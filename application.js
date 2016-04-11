	var options = {
			
			thumbnailData:[{
		message: "inbox",
		number: 32,
		imageUrl: "http://www.programwitherik.com/content/images/2015/12/reactjs.png",
		description: "react is a cool library for dymanica applications"


	},
	{
		message: "inbox",
		number: 32,
		imageUrl: "http://www.programwitherik.com/content/images/2015/12/reactjs.png",
		description: "react is a cool library for dymanica applications"


	}
	]
}

	var element = React.createElement(ThumbnailList, options);
	ReactDOM.render(element, document.querySelector(".target"));
	var Badge = React.createClass({displayName: "Badge",
		render:function(){
			return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
  					this.props.message, React.createElement("span", {className: "badge"}, this.props.number)
					)
		}
	});
var Thumbnail = require('thumbnail');

	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function(){
			var list = this.props.thumbnailData.map(function(props){
				return React.createElement(Thumbnail, React.__spread({},  props))
			})
			return React.createElement("div", null, " ", list, " ")
		}
	})
	var Thumbnail = React.createClass({displayName: "Thumbnail",
		render:function(){
			return     React.createElement("div", {className: "thumbnail"}, 
					      React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
					      React.createElement("div", {className: "caption"}, 
					        React.createElement("h3", null, "Thumbnail label"), 
					        React.createElement("p", null, this.props.description), 
					        
					        React.createElement(Badge, {message: this.props.message, number: this.props.number})
					      )
					   )
		}
	});
