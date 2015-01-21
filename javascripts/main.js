(function() {
	'use strict';
	var TabView  = function(name){
		this.tabName 		= name;
		this.tabButton 	= $("#" + name);
		this.tabContent = $("#" + name + "-content");
		this.tabAside 	= $("#" + name + "-aside");
	};

	TabView.prototype.hide = function(){
		this.tabContent.hide();
		this.tabAside.hide();
	};

	TabView.prototype.show = function(){
		this.tabContent.show();
		this.tabAside.show();
	};

	TabView.prototype.name = function(){
		return this.tabName;
	};

	var MyApp = function(tabNames){
		var tabs = {};
		for(var i = 0; i < tabNames.length; i++){
			var tabName = tabNames[i];
			tabs[tabName] = new TabView(tabName);
		}
		this.tabs = tabs;
	};

	MyApp.prototype.showTab = function(showTabName){
		var tabs = this.tabs;
		for(var tabName in tabs){
			var tab     = tabs[tabName]
			if(tab.name() != (showTabName)){
				tab.hide();
			} else{
				tab.show();
			}
		}

		this.tabs[tabName].hide();
	};

	var whenDomReady = function(){
		var app = new MyApp(["tab1","tab2","tab3"]);
		app.showTab("tab1");				
		$("#tab1").on('click', function(){
			app.showTab("tab1");
		});

		$("#tab2").on('click', function(){
			app.showTab("tab2");
		});

		$("#tab3").on('click', function(){
			app.showTab("tab3");
		});

		// For testing only
		window.myTabbdApp = app;
	};

	$(document).ready(whenDomReady);	
}).call(this);