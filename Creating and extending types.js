/************ Class ************/
var newSheet = function(type){
    if(type == "div") return new DivSheet();
    if(type == "canvas") return new Canvasheet();
}

 Sheet = function($element){
    this.element = $element;
};

Sheet.prototype.relocate = function(top, left){
    console.log(this.element);
};

Sheet.prototype.resize = function(height, width){
    console.log("generic sheet resize");
};

/******* Extending and overriding ********/
CanvasSheet = function($element){
    Sheet.call(this);
    this.element = $element;
};

CanvasSheet.prototype = new Sheet();

CanvasSheet.prototype.resize = function(height, width){
    console.log("canvas resize");
};

/************ Static or Class Members ************/

var Car = function(){};
Car.prototype.tyreCount = 4;
Car.prototype.costOfReplacinTyres = function(costOfOneTyre){
	return costOfOneTyre * this.tyreCount;
};

(new Car()).costOfReplacinTyres(1);
