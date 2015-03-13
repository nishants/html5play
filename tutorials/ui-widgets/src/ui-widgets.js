(function() {
	'use strict';
	window.geeksaints = {};
	var TabButton = function(element){
		this.element 	= element;
	};

	TabButton.prototype.select = function(){
		this.element.addClass("active");
	};

	TabButton.prototype.unselect = function(){
		this.element.removeClass("active");
	};

	geeksaints.TabButton = TabButton;
}).call(this);