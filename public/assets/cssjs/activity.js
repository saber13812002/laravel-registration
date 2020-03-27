// $('document').ready(function(){
	
// 	function makeid(){
// 		var text = "";
// 		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 		for( var i=0; i < 10; i++ ){
// 			text += possible.charAt(Math.floor(Math.random() * possible.length));
// 		}
// 		return text;
// 	}	

// 	var _modified_time = 0;
// 	function loadStagePlayer(){
// 		var _p_sto = setTimeout(function(){
// 			var d = new Date();
// 			var n = d.getTime(); 
			
// 			$.getJSON('./api/live-stream-web/get_datas_stream?r='+makeid()+n,function(_res){
// 				console.log(_res);
// 				var _code = parseInt(_res.code);
// 				if(_code===200){
// 					if(parseFloat(_res.result.modified_time)!==_modified_time){
// 						var _active = _res.result.active;
// 						if(_active===true){
// 							_modified_time= _res.result.modified_time;

// 							var _channel = _res.result.channel;
// 							var _location = _res.result.location;
// 							var _description = _res.result.description;
							
// 							if($('#features .divTitr1 iframe').length===0){
// 								$('#features .divTitr1').removeAttr('style');//583
// 								var _html = '<iframe frameborder="0" scrolling="no" width="583" height="244" style="width:100%" src="http://farsi.khamenei.ir/player-live/index.html?v='+_modified_time+'" allowtransparency="0"></iframe>';
// 								$('#features .divTitr1').html(_html);
// 							}
// 							var _location_ifr = $('#features .divTitr1 iframe').contents().find('body .location');
// 							var _description_ifr = $('#features .divTitr1 iframe').contents().find('body .title');
// 							var _video_src_ifr = $('#features .divTitr1 iframe').contents().find('body #player-wrapper');
// 							_video_src_ifr.attr('data-src',_channel);
// 							_location_ifr.html(_location);
// 							_description_ifr.html(_description);
// 							//if($.trim(_location_ifr.html()) !== $.trim(_location)){
// 							//	
// 							//}
// 							//if($.trim(_description_ifr.html()) !== $.trim(_description)){
// 							//	
// 							//}
// 						}else{
// 							if($('#features .divTitr1 iframe').length>0){
// 								location.reload();
// 							}
// 						}
// 					}
// 				}
// 			//
// 			//	clearTimeout(_p_sto);
// 			//	var _status = _res.status;
// 			//
// 			//	
// 			//	if(_code===200){
// 			//		var _location_title = _res.location;
// 			//		var _title = _res.title;
// 			//		
// 			//		if($('#features .divTitr1 iframe').length===0){
// 			//			$('#features .divTitr1').removeAttr('style');//583
// 			//			var _html = '<iframe frameborder="0" scrolling="no" width="285" height="244" style="width:100%" src="http://farsi.khamenei.ir/player-live/index.html?v=35" allowtransparency="0"></iframe>';
// 			//			$('#features .divTitr1').html(_html);
// 			//		}
// 			//		var _location_ifr = $('#features .divTitr1 iframe').contents().find('body .location');
// 			//		var _title_ifr = $('#features .divTitr1 iframe').contents().find('body .title');
// 			//		
// 			//		if($.trim(_location_ifr.html()) !== $.trim(_location_title)){
// 			//			_location_ifr.html(_location_title);
// 			//		}
// 			//		if($.trim(_title_ifr.html()) !== $.trim(_title)){
// 			//			_title_ifr.html(_title);
// 			//		}
// 			//		/*
// 			//		if($('#features .divTitr1 iframe').length===0){
// 			//			$('#features .divTitr1').removeAttr('style');
// 			//			var _html = '<iframe frameborder="0" scrolling="no" width="285" height="244" src="http://farsi.khamenei.ir/player-live/index.html"  allowtransparency="0"></iframe>';
// 			//			$('#features .divTitr1').html(_html);
// 			//		}
// 			//		*/
// 			//	}else{
// 			//		if($('#features .divTitr1 iframe').length>0){
// 			//			location.reload();
// 			//		}
// 			//		/*
// 			//		if($('#features .divTitr1 iframe').length>0){
// 			//			location.reload();
// 			//		}
// 			//		*/
// 			//	}
// 				loadStagePlayer();
// 			});
// 		},3000);
// 	}
// 	if($('#features .divTitr2').length>0){
// 		loadStagePlayer();
// 	}
// });