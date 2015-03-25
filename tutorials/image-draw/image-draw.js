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

var assertThat = function(canvasVal, imageVal, propertyName){
    if(!(canvasVal === imageVal)){
        console.error(propertyName + ": canvas: "+canvasVal + ", image: "+imageVal);
    } else {
        console.log(propertyName + " = " + canvasVal);
    }
}

window.testApp = function(){
    var canvas = $("#canvas");
    var image  = $("#some-image");
    assertThat(canvas.height(), image.height(), "height");
    assertThat(canvas.width(), image.width(), "width");
    
    assertThat(canvas.position().left, image.position().left, "left");
    assertThat(canvas.position().right, image.position().right, "right");
}


