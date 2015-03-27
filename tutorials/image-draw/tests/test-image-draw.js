// Create a test suite for models
QUnit.module( "models" );

// Create an image element before test.
QUnit.testStart(function( details ) {
    var testImageOne = $(jQuery.parseHTML(
            "<img id='some-image' src='../images/background.jpg' ></img>"
        )
    );
    var testImageTwo = $(jQuery.parseHTML(
            "<img id='some-other-image' src='../images/background.jpg' ></img>"
        )
    );
    $("#qunit-fixture").append(testImageOne);
    $("#qunit-fixture").append(testImageTwo);
});

QUnit.testDone(function(){
    // Delete the canvas elements created after test.
    $("canvas").remove();
});

QUnit.test("should create a canvas and append to the body on editImage", function(assert) {
    var done = assert.async();
    org.geeksaints.chiesel.editImage($("#some-image"));
    org.geeksaints.chiesel.editImage($("#some-other-image"));

    setTimeout(function(){
        var canvasCount = $("canvas").length
        assert.equal(canvasCount, 2, "Did not create overlaying canvas.");
        done();
    });
});

QUnit.test("should size canvas to overlap on image", function(assert){
    var done = assert.async();
    var imageElement = $("#some-image");
    var image = org.geeksaints.chiesel.editImage(imageElement);
    var canvas = $("canvas").first();

    setTimeout(function(){
        assert.equal(
            canvas.height(),   
            imageElement.height(),  
            "heights dont match");
            
        assert.equal(
            canvas.width(),    
            imageElement.width(),   
            "widths dont match");
            
        done();
    }); 
});

QUnit.skip("should size canvas to overlap on image", function(assert){
    var done = assert.async();
    var imageElement = $("#some-image");
    var image = org.geeksaints.chiesel.editImage(imageElement);
    var canvas = $("canvas").first();

    setTimeout(function(){
        
        assert.equal(
            canvas.position().top,  
            imageElement.position().top, 
            "top positions dont match");
            
        assert.equal(
            canvas.position().left, 
            imageElement.position().left,
            "left positions dont match");
      
        done();
    });   
});