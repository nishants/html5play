

window.org.geeksaints.toRelative = function(point, image){
	//x, y, height, length, top, left


	var locationOf = function($element){
		return {
			x:  $element.offset().left, 
			y: $element.offset().top
		};
	};

	var dimensionOf = function($element){
		return {
			height: $element.height(),
			width: $element.width()
		};
	};
	var dimension = dimensionOf(image), 
		location = locationOf(image);

	var x = (point.x - location.x)/dimension.width * 100,
		y = (point.y - location.y)/dimension.height * 100;

	console.log("locaiton : " + image.offset().left +", " + image.offset().top);
	console.log("locaiton returned: " + location.x +", " + location.y);

	return {
		x: x,
		y: y
	};
};


			
