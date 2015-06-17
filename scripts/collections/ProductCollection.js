var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ProductModel = require('../models/ProductModel');

module.exports = Backbone.Collection.extend({
		 model: ProductModel
});