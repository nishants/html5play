var newCanvas= function(id){
    var canvas = $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent elevated'></canvas>"));
    $("body").append(canvas);
    return canvas;
};

var Drawing = function(context){
    this.context = context;
};

Drawing.prototype.drawLine = function(from, to){
    var context = this.context;
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.x);
    context.lineWidth = 10;
    context.strokeStyle = '#ff0000';
    context.stroke();
};

org.geeksaints.chiesel =  {};
org.geeksaints.chiesel.editImage = function($image){
    var maskID = "drawing";
    var mask = org.geeksaints.mask($image, newCanvas(maskID));
    var drawingContext = document.getElementById(maskID).getContext("2d");
    var drawing = new Drawing(drawingContext);
    mask.wear(); 
    return drawing;
};
