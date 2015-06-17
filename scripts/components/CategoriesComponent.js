var React = require('react');

module.exports = React.createClass({
	render: function(){
		var categoryElements = this.props.categories.map(function(model){
			return (<li role="presentation">
					<a href={'#/category/'+model.get('slug')}>H{model.get('name')}</a>
					</li>
				);
		});
		return(
			<ul className="nav nav-pills nav-stacked">
                <li role="presentation"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
		);
	}
});
