

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

var relativeToAbsolute = function(point, dimension, location){
	var x, y;

	x = point.x * dimension.width / 100;
	y = point.y * dimension.height / 100;

	return {
		x: x,
		y: y
	};
};


window.org.geeksaints.toRelative = function(point, image){
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

window.org.geeksaints.getPointFrom = function(e){
	return {
		x: e.clientX,
		y: e.clientY
	};
};

		
window.org.geeksaints.markOnImage = function(point, $element, drawing){
	var point = relativeToAbsolute(
		point, 
		dimensionOf($element)
	);
	drawing.markPoint(point.x, point.y);
};
