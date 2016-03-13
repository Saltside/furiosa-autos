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
//TODO find a wat to combine these rules
router.get('/models/', function(req, res, next) {
	// use api to get models and render output
	var models = api.fetchModels()
	res.render('models', {models: models._result, sort:'default'});
});

router.get('/models/:sortable', function(req, res, next) {
	// use api to get models and render output
	var models = api.fetchModels()
	res.render('models', {models: models._result, sort:req.params.sortable});
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
router.get('/reviews', function(req, res, next) {
	return Promise.all([api.fetchCustomerReviews(), api.fetchCorporateReviews()])
		.then(function(reviews) {
			var customerReviews = reviews[0];
			var corporateReviews = reviews[1];
			res.render('reviews', {customerReviews: customerReviews, corporateReviews: corporateReviews});
		});
});

module.exports = router;
