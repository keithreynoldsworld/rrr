var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		productId: null,
		categoryId: null
	}
});