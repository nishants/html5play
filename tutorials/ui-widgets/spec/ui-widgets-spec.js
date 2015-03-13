describe('ui-widgets', function () {
  it('should become active on selecting', function () {

    var button = new geeksaints.TabButton(geeksaints.$mock("eleme"));
    button.select();
    expect(element.addClass).toHaveBeenCalledWith("active")
  });

});