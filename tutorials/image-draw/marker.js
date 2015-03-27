
var newDiv= function(id){
    var sheet = $(jQuery.parseHTML("<div id='" + id + "' class='transparent-red elevated'></div>"));
    $("body").append(sheet);
    return sheet;
};

var Marker = function($target){
    this.element    = $target;
}; 

// class arg is optional(custom styling for the mask)
var markImagePositions = function($image, maskStyle){
    var maskID = "marker";
    var markingLayer = newDiv(maskID);
    
    if(maskStyle){
      markingLayer.addClass(maskStyle);  
    } 

    var mask = org.geeksaints.mask($image, markingLayer);
    mask.wear(); 

    var marker = new Marker(markingLayer);
    return marker;
};

org.geeksaints.marker = markImagePositions;

var assertThat = function(sheetVal, imageVal, propertyName){
    if(!(sheetVal === imageVal)){
        console.error(propertyName + ": sheet: "+sheetVal + ", image: "+imageVal);
    } else {
        console.log(propertyName + " = " + sheetVal);
    }
};

window.test = function(){
    var sheet = $("#marker");
    var image  = $("#some-image");
    assertThat(sheet.height(), image.height(), "height");
    assertThat(sheet.width(), image.width(), "width");
    
    assertThat(sheet.position().left, image.position().left, "left");
    assertThat(sheet.position().right, image.position().right, "right");
};