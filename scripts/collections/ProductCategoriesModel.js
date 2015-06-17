var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ProductCategoriesModel = require('../models/ProductCategoriesModel');

module.exports = Backbone.Collection.extend({
		 model: ProductCategoriesModel
});