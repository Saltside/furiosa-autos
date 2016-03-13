var express = require('express');
var _ = require('lodash');
var router = express.Router();
var api = require('../lib/api');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

/*
* Task 1:
* Make models alphabetically sortable (ascending, descending, default)
*/
var renderModels = function(req, res, next) {
	return Promise.resolve(api.fetchModels())
	.then(function(models){
		var sortable = req.params.sortable || 'default';

		res.render('models', {models: models, sort:sortable});
	});
}

router.get('/models/', function(req, res, next) {
	renderModels(req, res, next);
});

router.get('/models/:sortable', function(req, res, next) {
	// use api to get models and render output
	renderModels(req, res, next);
});

/*
* Task 2:
* Make services filterable by type (repair, maintenance, cosmetic)
*/
var renderServices = function(req, res, next) {
	return Promise.resolve(api.fetchServices())
		.then(function(services){

			var uniqueTypes = _.uniq(_.map(services, function(service){
				return service.type;
			}));

			var fileteredServices = services;

			if(!!req.params.type) {
				fileteredServices = _.map(services, function(service){
					return service.type === req.params.type ? service: false;
				});
				fileteredServices = _.filter(fileteredServices, function(service){
					return service !== false;
				});
			}
			res.render('services', {services: fileteredServices, uniqueTypes: uniqueTypes});
		});
}

router.get('/services', function(req, res, next) {
	renderServices(req, res, next);
});
router.get('/services/:type', function(req, res, next){
	renderServices(req, res, next);
});

/*
* Task 3:
* Bugfix: Something prevents reviews from being rendered
* Make reviews searchable (content and source)
*/
var renderReviews = function(req, res, next) {
	return Promise.all([api.fetchCustomerReviews(), api.fetchCorporateReviews()])
		.then(function(reviews) {

			var reviewModel = {
				searchFilter: false,
				customer: {
					reviews: reviews[0]
				},
				corporate: {
					reviews: reviews[1]
				}
			}

			if(!!req.query.q) {
				reviewModel.searchFilter = true;
				reviewModel.searchTerm = req.query.q;
				var query = req.query.q.toLowerCase();

				//TODO clean this
				reviewModel.customer['reviews'] = _.map(reviewModel.customer.reviews, function(review){
					return review.content.toLowerCase().indexOf(query)>=0 || review.source.toLowerCase().indexOf(query)>=0 ? review : false;
				});
				reviewModel.customer['reviews'] = _.filter(reviewModel.customer.reviews, function(review) {
					return review !== false;
				});


				//TODO clean this
				reviewModel.corporate['reviews'] = _.map(reviewModel.corporate.reviews, function(review){
					return review.content.toLowerCase().indexOf(query)>=0 || review.source.toLowerCase().indexOf(query)>=0 ? review : false;
				});
				reviewModel.corporate['reviews'] = _.filter(reviewModel.corporate.reviews, function(review) {
					return review !== false;
				});

			}

			console.log(reviewModel);
			res.render('reviews', {data: reviewModel});
		});
}

router.get('/reviews', function(req, res, next) {
	renderReviews(req, res, next);
});


module.exports = router;
