QUnit.module( "mask" );

// Create an image element before test.
QUnit.testStart(function( details ) {
    var target = "<img id='target' src='../images/background.jpg' ></img>";
    var mask = "<canvas id='mask'></div>";

    // $("#qunit-fixture").append(target);
    // $("#qunit-fixture").append(mask);
    $("body").append(target);
    $("body").append(mask);
});

QUnit.test("should reposition the mask on target", function(assert) {
    var done = assert.async();
    var targetElement = $("#target");
    var maskElement = $("#mask");

    org.geeksaints.mask(targetElement, maskElement);

    setTimeout(function(){
        // console.log(targetElement.height() +" |hieght| " + maskElement.height());
        // console.log(targetElement.width() +" | width | " + maskElement. width());
        // console.log(targetElement.position().left +" |left| " + maskElement.position().left);
        // console.log(targetElement.position().top+" | width | " + maskElement.position().top);

        assert.equal(
            targetElement.width(), 
            maskElement.width(), 
            "width not same.");

        assert.equal(
            targetElement.height(), 
            maskElement.height(), 
            "height not same.");

        assert.equal(
            targetElement.position().left, 
            maskElement.position().left,    
            "left position not same.");       

        assert.equal(
            targetElement.position().top,  
            maskElement.position().top,     
            "top position not same."); 
 
        // console.log(targetElement.height() +" |hieght| " + maskElement.height());
        // console.log(targetElement.width() +" | width | " + maskElement. width());
        // console.log(targetElement.position().left +" |left| " + maskElement.position().left);
        // console.log(targetElement.position().top+" | width | " + maskElement.position().top);

        done();
    }, 2000);
});

var assertThat = function(canvasVal, imageVal, propertyName){
    if(!(canvasVal === imageVal)){
        console.error(propertyName + ": mask: "+canvasVal + ", target: "+imageVal);
    } else {
        console.log(propertyName + " = " + canvasVal);
    }
};

window.test = function(){
    var target = $("#target");
    var mask  = $("#mask");
    assertThat(mask.height(), target.height(), "height");
    assertThat(mask.width(), target.width(), "width");
    
    assertThat(mask.position().left, target.position().left, "left");
    assertThat(mask.position().top, target.position().top, "top");
};

window.mask = function(){
    var target = $("#target");
    var mask  = $("#mask");
    mask.height(target.height());
    mask.width(target.width());
};