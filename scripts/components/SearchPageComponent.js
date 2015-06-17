var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<form>
				<input ref ="searchBox" type = "text"/>
				<button type="submit">Submit</button>
			</form>
			);
	}

});