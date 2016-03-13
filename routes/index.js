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
router.get('/services', function(req, res, next) {
	// use api to get services and render output
	var services = api.fetchServices()
	res.render('services', {services: services._result});
});
router.get('/services/:type', function(req, res, next) {
	// use api to get services and render output
	var services = api.fetchServices()

	var uniqueTypes = _.uniq(_.map(services._result, function(service){
		return service.type;
	}));

	var fileteredServices = _.map(services._result, function(service){
		return service.type === req.params.type ? service: false;
	});

	console.log(fileteredServices)

	res.render('services', {services: fileteredServices, uniqueTypes: uniqueTypes});
});

/*
* Task 3:
* Bugfix: Something prevents reviews from being rendered
* Make reviews searchable (content and source)
*/
router.get('/reviews', function(req, res, next) {
	return Promise.all([api.fetchCustomerReviews(), api.fetchCorporateReviews()])
		.then(function(reviews) {
			res.render('reviews', {reviews: reviews});
		});
});

module.exports = router;
