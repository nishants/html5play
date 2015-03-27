
var createSheet= function(id){
    var sheet = $(jQuery.parseHTML("<div id='" + id + "' class='transparent-red elevated'></div>"));
    $("body").append(sheet);
    return sheet;
};

var mask = function($target, $with){    
    $with.addClass("fixed-position");

    $with.width( $target.width());
    $with.height($target.height());
    
    var left = $target.position().left;
    var top = $target.position().top;
    $with.css({left: left, top: top});
};

var Marker = function($image){
    this.element    = $image;
    this.sheet      = createSheet("marker-sheet");
}; 

Marker.prototype.refresh = function(){
    mask(this.element, this.sheet);
};

var markImagePositions = function($image){
    var marker = new Marker($image);
    marker.refresh();
    return marker;
};

var app =  {};
var org = {};
org.geeksaints = {};
org.geeksaints.chiesel = {};
org.geeksaints.chiesel.markImagePositions = markImagePositions;

