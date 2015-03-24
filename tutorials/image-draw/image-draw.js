var app =  {};

var newCanvas= function(){
    var id = "canvas";
    return $(jQuery.parseHTML("<canvas id='" + id + "' class='transparent'><canvas>"));
};

var mask = function($target, $with){
    $target.before($with);
    $with.width($target.width());
    $with.height($target.height());
    var left = $target.position().left;
    var top = $target.position().top;
    
    $with.css({left: left, top: top});
};

app.process = function(imageElement){
    var $canvas = newCanvas();
    mask(imageElement, $canvas);
};

window.drawApp = app;