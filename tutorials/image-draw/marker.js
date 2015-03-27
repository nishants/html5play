
/*************** Marker ****************/

var Marker = function($pane){
    this.pane       = $pane;
    this.locations  = [];
}; 

Marker.prototype.markLocation = function(){
    this.locations.push(markedLocation);
};

Marker.prototype.selectLocation = function(event){
    this.form.display(event.x, event.y);
};

/*************** Location Form Model /****************/

var LocationForm = function(locationXCoordinate, locationYCoordinate){
    // New instance must be created for each selection
    // Hides on cancel, visible on being created
    this.locationX = locationXCoordinate;
    this.locationY = locationYCoordinate;
    this.form().show();
};

LocationForm.prototype.form = function(){
    return $("#location-form");
};

LocationForm.prototype.addButton = function(){
    return $("#add-location");
};
LocationForm.prototype.cancelButton = function(){
    return $("#ignore-location");
};

LocationForm.prototype.nameInput = function(){
    return $("#iocation-name");
};

LocationForm.prototype.descriptionInput = function(){
    return $("#location-description");
};

/***************** Factory ****************************/

var newDiv= function(id){
    var sheet = $(jQuery.parseHTML("<div id='" + id + "' class='transparent-red elevated'></div>"));
    $("body").append(sheet);
    return sheet;
};

org.geeksaints.marker = function($image){
    var maskID = "marker";
    var markingLayer = newDiv(maskID);
    
    var mask = org.geeksaints.mask($image, markingLayer);
    mask.wear(); 

    var marker = new Marker(markingLayer, new LocationForm());
    LocationForm.prototype.form().hide();
    return marker;
};

/******************* Utility Test **************************/
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
