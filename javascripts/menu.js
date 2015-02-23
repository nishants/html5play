(function(){
"use strict"
	window.app = {};
	var Link = function($element, $target){
		this.$element = $element;
		this.targetTop = $target.offset().top;
		this.targetBottom = $target.offset().top + $target.height();
	};
	
	Link.prototype.highlight = function(){
		this.$element.addClass("highlight-link");
	};
		
	Link.prototype.blur = function(){
		this.$element.removeClass("highlight-link");
	};		
	
	Link.prototype.targetAt = function(position){
		return this.targetTop <= position && 
			this.targetBottom > position;
	};
	
	var MenuNavigation = function(links){
		this.links = links;
	};
		
	MenuNavigation.prototype.scrollHander = function(){
		var links = this.links;
		return function(){
			var scrollPosition = $(document).scrollTop();
			links.forEach(function(link){
				if(link.targetAt(scrollPosition)){
					link.highlight();
				} else{
					link.blur();
				}
			});
		};
	}
	
	var linksFrom = function ($links){
		var links = [];
		for(var i=0; i<$links.length; i++){
			var $link = $($links[i]);
			var $target = $($link.attr("href"));
			links.push(new Link($link, $target));
		}
		return links;
	};
	
	window.app.loadMenuControl = function load($links){
		var navigation = new MenuNavigation(linksFrom($links))
		return function(){
			$(document).on("scroll", navigation.scrollHander());
		};
	};
}).call(this);
/*
<script type="text/javascript">
	$(document).ready(
		app.loadMenuControl($(".navigation-link"))
	);
</script>*/
