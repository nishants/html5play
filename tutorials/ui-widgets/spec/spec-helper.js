var MockedQueryElement = function (id) {
  this.id = id;
};

MockedQueryElement.prototype.addClass = function(){};
MockedQueryElement.prototype.removeClass = function(){};

var createNew = function (id) {
  var mock = new MockedQueryElement(id);
  spyOn(mock, 'addClass');
  spyOn(mock, 'removeClass');
  return mock;
};
window.geeksaints.$mock = createNew;
