var app =  {};
var org = {};
org.geeksaints = {};
org.geeksaints.chiesel = {};

var newCanvas= function(id){
    var canvas = $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent elevated'></canvas>"));
    $("body").append(canvas);
    return canvas;
};

var mask = function($target, $with){    
    $with.addClass("fixed-position");

    $with.attr("width", $target.width());
    $with.attr("height", $target.height());
    
    var left = $target.position().left;
    var top = $target.position().top;
    $with.css({left: left, top: top});
};

var Image = function($targetElement){
    this.canvas = newCanvas("canvas");
    this.element = $targetElement;
}; 

Image.prototype.refresh = function(){
    mask(this.element, this.canvas);
    this.draw();
};

Image.prototype.draw = function(){
    var c = document.getElementById(this.canvas.attr("id"))
    var context = c.getContext("2d");
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(300,150);
    context.stroke();
};

org.geeksaints.chiesel.editImage = function($targetElement){
    var image = new Image($targetElement);
    image.refresh();
    return image;
};