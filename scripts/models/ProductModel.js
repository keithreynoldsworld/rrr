var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		buyerId: null,
		sellerId: null,
		image: null,
		title: null,
		description: null,
		createdAt: null,
		startingPrice: null,
		currentPrice: null,
		nomBids: null,
		endsAt: null,
		startsAt: null
	}
});