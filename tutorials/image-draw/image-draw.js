var newCanvas= function(id){
    var canvas = $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent elevated'></canvas>"));
    $("body").append(canvas);
    return canvas;
};

var Drawing = function(context){
    this.context = context;
};

Drawing.prototype.draw = function(){
    var context = this.context;
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(300,150);
    context.stroke();

};

org.geeksaints.chiesel =  {};
org.geeksaints.chiesel.editImage = function($image){
    var maskID = "mask";
    var mask = org.geeksaints.mask($image, newCanvas(maskID));
    var drawingContext = document.getElementById(maskID).getContext("2d");
    var drawing = new Drawing(drawingContext);
    mask.wear(); 
    setTimeout(function(){drawing.draw();});
    return drawing;
};
