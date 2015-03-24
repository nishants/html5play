var app =  {};

var newCanvas= function(id){
    var canvas = $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent elevated'></canvas>"));
    $("body").append(canvas);
    return canvas;
};

var mask = function($target, $with){    
    $target.addClass("depressed");
    $with.addClass("fixed-position");

    $with.attr("width", $target.width());
    $with.attr("height", $target.height());
    
    var left = $target.position().left;
    var top = $target.position().top;
    $with.css({left: left, top: top});
};

app.process = function($imageElement){
    mask($imageElement, newCanvas("canvas"));
};

window.drawApp = app;




