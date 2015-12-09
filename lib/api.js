/////////////////////////////////////////////
///
///
///
/// This file may not be changed!
/// 
/// 
/// 
/////////////////////////////////////////////

var Promise = require('es6-promise').Promise;
var models = ['Volvo', 'Audi', 'Seat', 'Holden', 'Chrysler', 'Pontiac', 'Dodge', 'Ford'];
var services = [
	{
		job: 'Wheel replacement',
		cost: '120 caps',
		type: 'repair'
	},
	{
		job: 'Oil refill',
		cost: '95 caps',
		type: 'maintenance'
	},
	{
		job: 'Bumper repair',
		cost: '75 caps',
		type: 'repair'
	},
	{
		job: 'Repaint',
		cost: '255 caps',
		type: 'cosmetic'
	},
	{
		job: 'Nitrous refill',
		cost: '450 caps',
		type: 'maintenance'
	}
];
var customerReviews = [
	{
		content: 'An absolutely professional auto shop!',
		source: 'Immortan Joe'
	},
	{
		content: 'High-octane auto repairs on demand!',
		source: 'Nux'
	},
	{
		content: "You're not getting a quote from me.",
		source: 'Max Rockatansky'
	}
];
var corporateReviews = [
	{
		content: 'One of our most valued partners.',
		source: 'Gastown'
	},
	{
		content: 'There is no better workshop in the wastelands!',
		source: 'Bullet Farm'
	}
];

module.exports = {
	fetchModels: function() {
		return new Promise(function(resolve, reject) {
			return resolve(models.slice());
		});
	},

	fetchServices: function() {
		return new Promise(function(resolve, reject) {
			return resolve(services.slice());
		});
	},

	fetchCustomerReviews: function() {
		return new Promise(function(resolve, reject) {
			return resolve(customerReviews.slice());
		});
	},

	fetchCorporateReviews: function() {
		return new Promise(function(resolve, reject) {
			return resolve(corporateReviews.slice());
		});
	}
}
