var _parse_xml = function(xml){
	var _obj = {};
	_obj.channel = {};
	_obj.channel.title = $.trim($(xml).find('channel>title').text());
	_obj.channel.link = $.trim($(xml).find('channel>link').text());
	_obj.channel.description = $.trim($(xml).find('channel>description').text());
	_obj.channel.language = $.trim($(xml).find('channel>language').text());
	_obj.channel.generator = $.trim($(xml).find('channel>generator').text());
	_obj.channel.author = $.trim($(xml).find('channel>itunes\\:author').text());
	_obj.channel.category = $.trim($(xml).find('channel>itunes\\:category').attr('text'));
	_obj.channel.ttl = $.trim($(xml).find('channel>ttl').text());
	
	if($(xml).find('item').length===1){
		_obj.channel.mode = 'default';
		_obj.channel.item = {};
		_obj.channel.item.title = $.trim($(xml).find('item title').text());
		_obj.channel.item.link = $.trim($(xml).find('item link').text());
		_obj.channel.item.description = $.trim($(xml).find('item description').text());
		_obj.channel.item.pubDate = $.trim($(xml).find('item pubDate').text());
		_obj.channel.item.video = {};
		_obj.channel.item.video.q1 = $.trim($(xml).find('item enclosure').attr('url'));
		_obj.channel.item.video.q2 = $.trim($(xml).find('item jwplayer\\:hd\\.file').text());
		_obj.channel.item.length = $.trim($(xml).find('item enclosure').attr('length'));
		_obj.channel.item.type = $.trim($(xml).find('item enclosure').attr('type'));
		_obj.channel.item.duration = $.trim($(xml).find('item media\\:content').attr('duration'));
		_obj.channel.item.thumbnail = $.trim($(xml).find('item media\\:thumbnail').attr('url'));
		_obj.channel.item.author = $.trim($(xml).find('item itunes\\:author').text());
	}else{
		_obj.channel.mode = 'playlist';
		_obj.channel.items = {};
		var _items_index = 0;
		$.each($(xml).find('channel>item'),function(){
			_obj.channel.items[_items_index] = {};
			_obj.channel.items[_items_index].title = $.trim($(this).find('title').text());
			_obj.channel.items[_items_index].link = $.trim($(this).find('link').text());
			_obj.channel.items[_items_index].description = $.trim($(this).find('description').text());
			_obj.channel.items[_items_index].pubDate = $.trim($(this).find('pubDate').text());
			_obj.channel.items[_items_index].video = {};
			_obj.channel.items[_items_index].video.q1 = $.trim($(this).find('enclosure').attr('url'));
			_obj.channel.items[_items_index].video.q2 = $.trim($(this).find('jwplayer\\:hd\\.file').text());
			_obj.channel.items[_items_index].length = $.trim($(this).find('enclosure').attr('length'));
			_obj.channel.items[_items_index].type = $.trim($(this).find('enclosure').attr('type'));
			_obj.channel.items[_items_index].duration = $.trim($(this).find('media\\:content').attr('duration'));
			_obj.channel.items[_items_index].thumbnail = $.trim($(this).find('media\\:thumbnail').attr('url'));
			_obj.channel.items[_items_index].author = $.trim($(this).find('itunes\\:author').text());
			_items_index++;
		});
	}
	return _obj;
};

var _player_setup = function(_target,_obj,_shift_item){
	//console.log(_target,_obj);
	var _time_now = new Date().getTime();
	var _video_elm_id = 'video_'+_time_now+'_'+parseInt(Math.random()*100000);
	
	if(_shift_item===null){
		_target.addClass(_obj.channel.mode);
	}
	var _video_elm = $('<video>').addClass('video-js khamenei_ir-vjs '+_obj.channel.mode).attr({'id':_video_elm_id,'controls':true,'preload':'metadata','width':800,'height':482,'data-setup':'{}'});
	_video_elm.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
	if(_target.hasClass('in-archive')){
		_video_elm.attr({'width':'581','height':'330'});
	}
	var _thumbnail = null;
	var _title = null;
	var _description = null;
	var _link = null;
	var _video_size = null;
	var _video_path = null;
	var _video_path_vt = null;
	var _video_path_hd = null;
	
	if(_shift_item===null){
		switch(_obj.channel.mode){
			case 'default':
				_thumbnail = _obj.channel.item.thumbnail;
				_title = _obj.channel.item.title;
				_description = _obj.channel.item.description;
				_link = _obj.channel.item.link;
				_video_size = _obj.channel.item.length;
				_video_path = (_obj.channel.item.video.q1).replace('.flv','_l.mp4');
				_video_path_vt = (_obj.channel.item.video.q1).replace('.flv','_vt.mp4');
				_video_path_hd = _obj.channel.item.video.q2;
				//$('<source>').attr({'src':_video_path,'type':'video/mp4'/*_obj.channel.item.type*/}).appendTo(_video_elm);
			break;
			case 'playlist':
				_thumbnail = _obj.channel.items[0].thumbnail;
				_title = _obj.channel.items[0].title;
				_description = _obj.channel.items[0].description;
				_link = _obj.channel.items[0].link;
				_video_size = _obj.channel.items[0].length;
				_video_path = (_obj.channel.items[0].video.q1).replace('.flv','_l.mp4');
				_video_path_vt = (_obj.channel.items[0].video.q1).replace('.flv','_vt.mp4');
				_video_path_hd = _obj.channel.items[0].video.q2;
				//$('<source>').attr({'src':_video_path,'type':'video/mp4'/*_obj.channel.items[0].type*/}).appendTo(_video_elm);
			break;
		}
	}else{
		var _curr_shift = parseInt(_shift_item)-1;

		////
		_thumbnail = _obj.channel.items[_curr_shift].thumbnail;
		_title = _obj.channel.items[_curr_shift].title;
		_description = _obj.channel.items[_curr_shift].description;
		_link = _obj.channel.items[_curr_shift].link;
		_video_size = _obj.channel.items[_curr_shift].length;
		_video_path = (_obj.channel.items[_curr_shift].video.q1).replace('.flv','_l.mp4');
		_video_path_vt = (_obj.channel.items[_curr_shift].video.q1).replace('.flv','_vt.mp4');
		_video_path_hd = _obj.channel.items[_curr_shift].video.q2;

	}
	$('<source>').attr({'src':_video_path,'type':'video/mp4'}).appendTo(_video_elm);
	_target.html('');
	_video_elm.appendTo(_target);
	var _canvas_stage = $('<div>').addClass('canvas-stage-vjs').appendTo(_target);
	$('<div>').addClass('background-stage').css({'background-image':'url("'+_thumbnail+'")'}).appendTo(_canvas_stage);
	var _canvas_datas_stage = $('<div>').addClass('datas-stage-vjs').appendTo(_target);
	var _thumbnail_elm = $('<figure>').addClass('thumbnail').appendTo(_canvas_datas_stage);
	$('<a>').attr({'href':_link,'target':'_blank'}).html('<img src="'+_thumbnail+'" alt="">').appendTo(_thumbnail_elm);
	var _title_elm = $('<h3>').addClass('title').appendTo(_canvas_datas_stage);
	$('<a>').attr({'href':_link,'target':'_blank'}).text(_title).appendTo(_title_elm);
	$('<small>').text('('+_description+')').appendTo(_title_elm);
	
	
	if(!_target.hasClass('in-archive') && _obj.channel.items!==undefined && _shift_item===null){
		var _playlist = $('<div>').addClass('playlist-stage-vjs').appendTo(_target);
		var _playlist_prev = $('<button>').addClass('playlist-prev-vjs').appendTo(_playlist);
		var _playlist_next = $('<button>').addClass('playlist-next-vjs').appendTo(_playlist);
		var _playlist_ul = $('<ul>').appendTo(_playlist);
		
		$.each(_obj.channel.items,function(_vi,_vitem){
			var _thumbnail = _vitem.thumbnail;
			var _title = _vitem.title;
			var _description = _vitem.description;
			var _link = _vitem.link;
			var _video_size = _vitem.length;
			var _video_path = (_vitem.video.q1).replace('.flv','_l.mp4');
			var _video_path_hd = _vitem.video.q2;

			var _playlist_li = $('<li>').addClass('playlist-item').attr({'data-title':_title,'data-description':_description,'data-thumbnail':_thumbnail,'data-link':_link,'data-video':_video_path,'data-video-hd':_video_path_hd}).appendTo(_playlist_ul);
			if(parseInt(_vi)===0){
				_playlist_li.addClass('selected');
			}
			var _thumbnail_elm = $('<figure>').addClass('thumbnail').appendTo(_playlist_li);
			$('<a>').attr({'href':'javascript:void(0)'}).html('<img src="'+_thumbnail+'" alt="">').appendTo(_thumbnail_elm);
			var _title_elm = $('<h4>').addClass('title').appendTo(_playlist_li);
			$('<a>').attr({'href':'javascript:void(0)'}).text(_title).appendTo(_title_elm);
			$('<small>').text('('+_description+')').appendTo(_title_elm);
			//console.log(_vitem);
		});
		
		if(!_target.hasClass('in-archive') && _obj.channel.mode==='playlist'){
			_target.css('margin-bottom',_playlist_ul.height()+'px');
		}
		
		_playlist_prev.click(function(){
			var _index = _playlist_ul.find('.playlist-item').index(_playlist_ul.find('.playlist-item.selected'));
			if(_index>0){
				_playlist_ul.find('.playlist-item').eq(_index-1).click();
			}
		});
		_playlist_next.click(function(){
			var _index = _playlist_ul.find('.playlist-item').index(_playlist_ul.find('.playlist-item.selected'));
			if(_index<_playlist_ul.find('.playlist-item').length){
				_playlist_ul.find('.playlist-item').eq(_index+1).click();
			}
		});
		_playlist_prev.mousemove(function(){
			_target.find('.video-js').removeClass('vjs-user-inactive').addClass('vjs-user-active');
		});
		_playlist_next.mousemove(function(){
			_target.find('.video-js').removeClass('vjs-user-inactive').addClass('vjs-user-active');			
		});
		
	}
	
	var _videojs = videojs(_video_elm_id);
	_videojs.ready(function(){
		//_video_path_vt
		var _video_elm_vt = $('<video>').attr({'id':_video_elm_id+'_vt','preload':'metadata','width':80,'height':45});
		$('<source>').attr({'src':_video_path_vt,'type':'video/mp4'}).appendTo(_video_elm_vt);
		_video_elm_vt.appendTo($('#'+_video_elm_id+' .vjs-progress-control .vjs-mouse-display'));
	});
	_target.find('.playlist-stage-vjs .playlist-item').click(function(){
		var _this = $(this);
		if(!_this.hasClass('selected')){
			_target.find('.playlist-stage-vjs .playlist-item').removeClass('selected');
			_this.addClass('selected');
			var _thumbnail = _this.attr('data-thumbnail');
			var _title = _this.attr('data-title');
			var _description = _this.attr('data-description');
			var _link = _this.attr('data-link');
			var _video_path = _this.attr('data-video').replace('.flv','_l.mp4');
			var _video_path_vt = _this.attr('data-video').replace('.flv','_vt.mp4');
			var _video_path_hd = _this.attr('data-video-hd');
			
			_canvas_datas_stage.children('.thumbnail').html('');
			$('<a>').attr({'href':_link,'target':'_blank'}).html('<img src="'+_thumbnail+'" alt="">').appendTo(_canvas_datas_stage.children('.thumbnail'));
	
			_canvas_datas_stage.children('.title').html('');
			$('<a>').attr({'href':_link,'target':'_blank'}).text(_title).appendTo(_canvas_datas_stage.children('.title'));
			$('<small>').text('('+_description+')').appendTo(_canvas_datas_stage.children('.title'));
			
			
			
			_videojs.src(_video_path);
			_videojs.ready(function(){
				_videojs.play();
				$('body,html').animate({scrollTop:(_target.offset().top - 55)+'px'},600);
				var _video_elm_vt = $('<video>').attr({'id':_video_elm_id+'_vt','preload':'metadata','width':80,'height':45});
				$('<source>').attr({'src':_video_path_vt,'type':'video/mp4'}).appendTo(_video_elm_vt);	
				$('#'+_video_elm_id+' .vjs-progress-control .vjs-mouse-display video').remove();
				_video_elm_vt.appendTo($('#'+_video_elm_id+' .vjs-progress-control .vjs-mouse-display'));
			});
		}
	});
	
	
	$('#'+_video_elm_id+' .vjs-progress-control').mousemove(function(){
		var _timeFormatted = $.trim($('#'+_video_elm_id+' .vjs-progress-control .vjs-mouse-display .vjs-time-tooltip').text());
		var _time_arr = _timeFormatted.split(':');
		var _sec = 0;
		if(_time_arr.length===1){
			_sec = parseInt(_time_arr[0]);
		}else if(_time_arr.length===2){
			_sec = (parseInt(_time_arr[0])*60)+parseInt(_time_arr[1]);
		}else if(_time_arr.length===3){
			_sec = (parseInt(_time_arr[0])*3600)+(parseInt(_time_arr[1])*60)+parseInt(_time_arr[2]);
		}
		
		var _vt_vid = document.getElementById(_video_elm_id+'_vt');
		_vt_vid.currentTime = _sec; 
		
		//console.log(_sec);
	});
	//.vjs-progress-control
	
};

$('.khamenei_ir-vjs').each(function(){
	var _this = $(this);
	var _xml_path = _this.attr('data-rss');
	var _shift_item = null;
	if(_this.attr('data-shift') !== undefined){
		_shift_item = parseInt(_this.attr('data-shift'));
	}
	
	$.get(_xml_path,function(_xml_str){
		var _xml_obj = _parse_xml(_xml_str);
		_player_setup(_this,_xml_obj,_shift_item);
	});
});







