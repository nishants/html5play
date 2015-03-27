
/*/*************** Dom Dependency ****************/
var isCanvas = function(element){
    return element.is("canvas");
};

var getPosition = function(element){
    return element.offset();
};

var setPosition = function(element, position){
    element.css({
        left:   position.left, 
        top:    position.top
    });
};

var setAttribute = function(element, name, value){
    element.attr(name, value);
};

var setWidth = function(element, width){
    element.width(width);
};

var setHeight = function(element, height){
    element.height(height);
};

var getWidth = function(element){
    return element.width();
};

var getHeight = function(element){
    return element.height();
};

var setPositionToFixed = function(element){
    element.css("position", "fixed");
};

/*/***************Sheet model/****************/
var Sheet = function($element){
    this.element = $element;
};

Sheet.prototype.relocate = function(toPosition){
    setPosition(this.element, toPosition);
};

Sheet.prototype.resize = function(toWidth, toHeight){
    setHeight(this.element, toHeight);
    setWidth(this.element , toWidth);
};

/*************** Canvas Model /****************/
var CanvasSheet = function($element){
    Sheet.call(this);
    this.element = $element;
};

CanvasSheet.prototype = new Sheet();

CanvasSheet.prototype.resize = function(toWidth, toHeight){
    setAttribute(this.element, "height" , toHeight);
    setAttribute(this.element, "width"  , toWidth);    
};

/*********************************************/
var newSheetWith = function($element){
    // A sheet elment must have a fixed position.
    setPositionToFixed($element);

    if(isCanvas($element)){
      return new CanvasSheet($element);  
    } 
    return new Sheet($element);
};

var Mask = function($target, sheet){
    this.target = $target;
    this.sheet  = sheet;
};

Mask.prototype.wear = function(){
    this.sheet.resize(
        getWidth(this.target),
        getHeight(this.target)
    );

    this.sheet.relocate(
        getPosition(this.target)
    );
};

var setMask = function($target, $sheet){
    return new Mask($target, newSheetWith($sheet));
};

window.org = {
    geeksaints: {mask: setMask}
};