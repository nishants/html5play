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


QUnit.test("should create a canvas and append to the body on editImage", function(assert) {
    org.geeksaints.chiesel.editImage($("#some-image"));
    var canvasCountAfter = $("canvas").length;
    assert.ok(1 == canvasCountAfter, "Did not create overlaying canvas.");
    // assert.equal($($("canvas")[0]).parent(), $("body"), "Canvas not appended to body.");
    
    org.geeksaints.chiesel.editImage($("#some-other-image"));
    var canvasCountAfter = $("canvas").length;
    assert.ok(2 == canvasCountAfter, "Did not create overlaying canvas.");
});
