var app =  {};

var newCanvas= function(id){
    var canvas = $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent elevated'></canvas>"));
    $("body").append(canvas);
    return canvas;
};

var mask = function($target, $with){    
    $target.addClass("depressed");
    $with.addClass("fixed-position");

    $with.width($target.width());
    $with.height($target.height());
    
    var left = $target.position().left;
    var top = $target.position().top;
    $with.css({left: left, top: top});
};

app.process = function($imageElement){
    mask($imageElement, newCanvas("canvas"));
};

window.drawApp = app;




// image = $("#some-image");
// canvas = $("#canvas");
// console.log("image: "+image.position().top + " | canvas: " + canvas.position().top);
// console.log("image: "+image.position().left + " | canvas: " + canvas.position().left);
// console.log("image: "+image.width() + " | canvas: " + canvas.width());
// console.log("image: "+image.height() + " | canvas: " + canvas.height());