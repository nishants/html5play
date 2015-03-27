
var newDiv= function(id){
    var sheet = $(jQuery.parseHTML("<div id='" + id + "' class='transparent-red elevated'></div>"));
    $("body").append(sheet);
    return sheet;
};

var Marker = function($target){
    this.element    = $target;
}; 

var markImagePositions = function($image){
    var maskID = "marker";
    var markingLayer = newDiv(maskID);

    var mask = org.geeksaints.mask($image, markingLayer);
    mask.wear(); 

    var marker = new Marker(markingLayer);
    return marker;
};

org.geeksaints.marker = markImagePositions;

