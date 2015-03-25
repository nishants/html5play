// Create a test suite for models
QUnit.module( "models" );

// Create an image element before test.
QUnit.testStart(function( details ) {
    var testImage = $(jQuery.parseHTML(
            "<img id='some-image' src='../images/background.jpg' ></img>"
        )
    );
    $("#qunit-fixture").append(testImage);
});


QUnit.test("should create a canvas and append to the body", function(assert) {
    var image = new org.geeksaints.chiesel.Image($("#some-image"));
    assert.ok(image);
});