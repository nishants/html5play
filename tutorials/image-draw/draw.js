var newCanvas= function(id){
    var canvas = $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent elevated'></canvas>"));
    $("body").append(canvas);
    return canvas;
};

var Drawing = function(context){
    this.context = context;
};

Drawing.prototype.size = function(){
    this
    return {};
}

Drawing.prototype.drawLine = function(from, to){
    var context = this.context;
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.x);
    context.lineWidth = 10;
    context.strokeStyle = '#ff0000';
    context.stroke();
};

Drawing.prototype.markPoint = function(x, y){
    // Preferring rect over circle(better performance)
    // Create a rectangle of five pixel
    this.context.fillStyle="#FF0000";
    this.context.fillRect(x, y, 50,50);
    this.context.fillRect(x, y, 1, 1);

};

org.geeksaints.chiesel =  {};
org.geeksaints.chiesel.editImage = function($image){
    var maskID = "drawing" + Math.random();
    var mask = org.geeksaints.mask($image, newCanvas(maskID));
    var drawingContext = document.getElementById(maskID).getContext("2d");
    var drawing = new Drawing(drawingContext);
    mask.wear(); 
    return drawing;
};
