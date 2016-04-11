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