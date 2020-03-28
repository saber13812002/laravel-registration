(function($){
	$.fn.jsonScroll= function(options) {
		
		var defaults = {
			nextBtn: '#next',
			prevBtn: '#prev',
			disabledClass: 'disabled',
			rtl: true,
			mousewheel: true,
			speed: 600,
			scroll: 1,
			queryStringParam: false,
			getItem: '',
			selectedClass: 'selectedItem',
			comboBoxType: false,
			comboBoxItem: '',
			vertical: false,
			pointMarker:false,
			autoplay:false,
			autoplayDelay:10000,
			pointMarkerId:''
		}
		
		var options = $.extend(defaults, options);
		var selector = this;
		var _sid = $(this).attr("id");//Current Selector ID
        var sto=null;
		
		$(options.prevBtn).addClass(options.disabledClass);
		var maxLength = selector.children("ul").children("li").length;
		var pageNumber = parseInt(maxLength/options.scroll)
		$("<li />").addClass("__last").css({"width":"1px","height":"1px","visibility":"hidden"}).appendTo(selector.children("ul"));
		
		//if(maxLength%2 == 0){var plusLength = 1;}else{var plusLength = 1;}
		var plusLength = 1;
		var numOfMove = 0;
		var selectPage = 0;

		if((options.rtl)&&(options.vertical == false)){var RTLscroll = "right";selector.css("direction","rtl");}else if(options.vertical == false){var RTLscroll = "left";selector.css("direction","ltr");}
		selector.children("ul").children("li").css("float",RTLscroll);
		if(options.vertical){var scrollDir = "top";}else{var scrollDir = RTLscroll;}
		
		if(options.queryStringParam){
			var pageUrl = location.href;
			var allParameters = pageUrl.substr(pageUrl.indexOf("?")+1).split("&");
			if(allParameters){
				var newParameters = "";
				var parameterValue = "";
				for(i = 0; i < allParameters.length; i++){
					newParameters = allParameters[i].split("=");
					for(j = 0; j < newParameters.length; j++)
						if(newParameters[j] == options.getItem)
							parameterValue = allParameters[i];
				}
				parameterValue = parameterValue.replace(options.getItem+"=","");
				
				if((parameterValue != "")){
					var numOfGetItem = -1;
					for(i=0;i<=maxLength;i++){
						var ulLiSelectorEQ = $("#"+_sid+" ul li:eq("+i+")");
						if (ulLiSelectorEQ.text() == parameterValue){
							numOfGetItem = i;
							ulLiSelectorEQ.addClass(options.selectedClass);
						}
					}
				}
				
				for(j=1;j<=parseInt(numOfGetItem/options.scroll);j++){
					if(numOfMove+options.scroll+plusLength <= maxLength){
						numOfMove = numOfMove+(options.scroll);
						animateUl(numOfMove,1,0);
					}
				}
				
			}
			
			if(options.comboBoxType){
				for(i=0;i<=maxLength;i++){
					var ulLiSelectorEQ = $("#"+_sid+" ul li:eq("+i+")");
					var liSelectorText = ulLiSelectorEQ.text();
					if(liSelectorText != ""){
						if(parameterValue == liSelectorText){
							$("<option />").attr({"value":liSelectorText,"selected":"selected"}).text(liSelectorText).appendTo($(options.comboBoxItem))
						}else{
							$("<option />").attr("value",liSelectorText).text(liSelectorText).appendTo($(options.comboBoxItem))
						}
					}
				}
				$(options.comboBoxItem).change(function(){
					window.location="?"+options.getItem+"="+$(this).val();
				})
			}
		}

		
		if(options.pointMarker){
			var currentPage = maxLength/options.scroll;
			if(currentPage > parseInt(currentPage)){currentPage = parseInt(currentPage)+1;}else{currentPage = parseInt(currentPage);}
			for(i=1;i<=currentPage;i++){
				if(options.rtl){
					$("<div />").addClass("pointMarker").appendTo($(options.pointMarkerId));
				}else{
					$("<div />").addClass("pointMarker").css("float","left").appendTo($(options.pointMarkerId));
				}
			}
			$(options.pointMarkerId+" .pointMarker:first").attr("class","pointMarkerSelected")
			$(options.pointMarkerId+" div").click(function(){
				clearTimeout(sto);
				var lastIndex = $(options.pointMarkerId+" div").index($(options.pointMarkerId+" .pointMarkerSelected"));
				var index = $(options.pointMarkerId+" div").index(this);
				if($(this).attr("class") != "pointMarkerSelected"){
					if(lastIndex < index){
						for(j=lastIndex+1;j<=index;j++){
							numOfMove = numOfMove+(options.scroll);
							animateUl(numOfMove,1,300);
						}
					}else{
						for(j=index+1;j<=lastIndex;j++){
							numOfMove = numOfMove-(options.scroll);
							animateUl(numOfMove,-1,300);
						}
					}
				}
				
			})
		}


		// Load Image
		$("#"+_sid+" ul li:lt(7) img:not([src])[rel]").each(function(i){$(this).attr("src",$(this).attr("rel")).removeAttr("rel")});

		selector.attr('rel','next');
		//Animate
		function animateUl(_scroll,_dir,_speed){
			// Button Disable
			if(maxLength <= _scroll+options.scroll+plusLength){$(options.nextBtn).addClass(options.disabledClass);selector.attr('rel','prev');}else{$(options.nextBtn).removeClass(options.disabledClass);}
			if(_scroll == 0){$(options.prevBtn).addClass(options.disabledClass);selector.attr('rel','next');}else{$(options.prevBtn).removeClass(options.disabledClass);}
			
			var _width=0;
			var _height=0;
			if(_dir>0){_scroll = _scroll-options.scroll}
			for (i=_scroll;i<_scroll+options.scroll;i++){
				var ulLiSelectorEQ = $("#"+_sid+" ul li:eq("+i+")");
				_width += ulLiSelectorEQ.outerWidth()+parseInt(ulLiSelectorEQ.css("margin-right"))+parseInt(ulLiSelectorEQ.css("margin-left"));// Number Of Move Width
				_height += ulLiSelectorEQ.outerHeight()+parseInt(ulLiSelectorEQ.css("margin-top"))+parseInt(ulLiSelectorEQ.css("margin-bottom"));// Number Of Move Height
			}
			
			var lastItem = selector.children("ul").children("li.__last").position();
			var boxWidth = selector.outerWidth();
			var lastItemPos = $("#"+_sid+" ul").width() -parseInt(lastItem.left);
			
			
			if(options.pointMarker){
				selectPage += _dir;
				$(options.pointMarkerId+" div").attr("class","pointMarker");
				$(options.pointMarkerId+" div:eq("+selectPage+")").attr("class","pointMarkerSelected");
			}
			
			if(_dir>0)
				$("#"+_sid+" ul li img:not([src])[rel]").each(function(i){
					$(this).attr("src",$(this).attr("rel")).removeAttr("rel")
					});
						
			selector.children("ul").stop(false,true);
			animeTo = _dir*_width;
			var animateFinal;
			if(scrollDir == "left"){
				var marginLeft = parseInt(selector.children("ul").css("left"))-animeTo;
				var ulWidth =selector.children("ul").outerWidth();
				if(_dir>0){
					if(ulWidth-lastItemPos+marginLeft <= boxWidth){animateFinal =-(ulWidth-lastItemPos-boxWidth);}else{animateFinal = "-="+animeTo;}
				}else{
					if(marginLeft < 0){animateFinal ="-="+animeTo;}else{animateFinal = 0;}
				}
				selector.children("ul").animate({"left": animateFinal+"px"},_speed);
			}else if(scrollDir == "right"){
				var marginRight = parseInt(selector.children("ul").css("right"))-animeTo;
				if(_dir>0){
					if(lastItemPos+marginRight <= boxWidth){animateFinal =-(lastItemPos-boxWidth);}else{animateFinal = "-="+animeTo;}
				}else{
					if(marginRight < 0){animateFinal ="-="+animeTo;}else{animateFinal = 0;}
				}
				selector.children("ul").animate({"right": animateFinal+"px"},_speed);
			}else{
				var boxHeight = selector.outerHeight();
				var lastItemPos = parseInt(lastItem.top);
				animeTo = _dir*_height;
				var marginTop = parseInt(selector.children("ul").css("top"))-animeTo;
				if(_dir>0){
					if(lastItemPos+marginTop <= boxHeight){animateFinal = -(lastItemPos-boxHeight);}else{animateFinal = "-="+animeTo;}
				}else{
					if(marginTop<0){animateFinal ="-="+animeTo;}else{animateFinal = 0;}
				}
				selector.children("ul").animate({"top": animateFinal+"px"},_speed);
			}
			
		}
		
		function GoPrev(){
			if(numOfMove-plusLength >= 0){
				numOfMove = numOfMove-(options.scroll);
				animateUl(numOfMove,-1,options.speed)
			}
		}
		
		function GoNext(){
			if(numOfMove+options.scroll+plusLength <= maxLength){
				numOfMove = numOfMove+(options.scroll);
				animateUl(numOfMove,1,options.speed)
			}
		}

		//Auto Play
		if(options.autoplay){
			function playFunc(){
				sto = setTimeout(function(){
					clearTimeout(sto);
					if(numOfMove+options.scroll+plusLength <= maxLength){
						GoNext();
					}else{
						var currentPage = maxLength/options.scroll;
						if(currentPage > parseInt(currentPage)){currentPage = parseInt(currentPage)+1;}else{currentPage = parseInt(currentPage);}
						for(au=1;au<=currentPage;au++){
							GoPrev();
						}
					}
					playFunc();
				},options.autoplayDelay);
			}
			playFunc();
			//Auto Play Pausing
			selector.hover(function(){clearTimeout(sto);},function(){playFunc();});
		}
		
		// Click
		$(options.nextBtn).click(function(){
			clearTimeout(sto);
			GoNext();
		});
		$(options.prevBtn).click(function(){
			clearTimeout(sto);
			GoPrev();
		});

		// Mouse Wheel
		if(options.mousewheel){
			selector.bind('mousewheel', function(event, delta) {
				var operator = delta > 0 ? -1 : 1, vel = Math.abs(delta);
				var boxId = selector.attr('class');
				if($(options.prevBtn).attr('class').indexOf(' '+options.disabledClass) != -1){
					if((numOfMove+options.scroll+plusLength <= maxLength)&&(operator>0)){event.preventDefault();numOfMove = numOfMove+(options.scroll);animateUl(numOfMove,1,options.speed);}
				}else if($(options.nextBtn).attr('class').indexOf(' '+options.disabledClass) != -1){
					if((numOfMove-plusLength >= 0)&&(operator<0)){event.preventDefault();numOfMove = numOfMove-(options.scroll);animateUl(numOfMove,-1,options.speed);}
				}else{
					event.preventDefault();if((numOfMove+options.scroll+plusLength <= maxLength)&&(operator>0)){numOfMove = numOfMove+(options.scroll);animateUl(numOfMove,1,options.speed);}else if((numOfMove-plusLength >= 0)&&(operator<0)){numOfMove = numOfMove-(options.scroll);animateUl(numOfMove,-1,options.speed);}
				}
			});
		}

	}
})(jQuery);
