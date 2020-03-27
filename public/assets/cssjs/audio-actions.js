var _audiojs = null;
var _parse_xml_audio = function(xml){
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
	
	
	//alert($(xml).find('item').length);
	
	if($(xml).find('item').length===1){
		_obj.channel.mode = 'default';
		_obj.channel.item = {};
		_obj.channel.item.title = $.trim($(xml).find('item title').text());
		_obj.channel.item.link = $.trim($(xml).find('item link').text());
		_obj.channel.item.description = $.trim($(xml).find('item description').text());
		_obj.channel.item.pubDate = $.trim($(xml).find('item pubDate').text());
		_obj.channel.item.audio = {};
		var _waveform_url_arr = $.trim($(xml).find('item enclosure').attr('url')).split('_');
		_obj.channel.item.audio.waveform = _waveform_url_arr[0]+'_'+_waveform_url_arr[1]+'.mp3.waveform';
		_obj.channel.item.audio.q1 = $.trim($(xml).find('item enclosure').attr('url'));
		_obj.channel.item.audio.q2 = $.trim($(xml).find('item jwplayer\\:hd\\.file').text());
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
			_obj.channel.items[_items_index].audio = {};
			var _waveform_url_arr = $.trim($(this).find('enclosure').attr('url')).split('_');
			_obj.channel.items[_items_index].audio.waveform = _waveform_url_arr[0]+'_'+_waveform_url_arr[1]+'.mp3.waveform';
			_obj.channel.items[_items_index].audio.q1 = $.trim($(this).find('enclosure').attr('url'));
			_obj.channel.items[_items_index].audio.q2 = $.trim($(this).find('jwplayer\\:hd\\.file').text());
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

var _make_canvas = function(_canvas_id,_target_width,_canvas_height,_aurio_view,_left_wave,_bar_unit){
	_aurio_view.find('.vjs-progress-control .vjs-progress-holder canvas').remove();
	
	var _canvas_gray = $('<canvas>').attr({id:_canvas_id+'_1','width':_target_width,'height':_canvas_height}).css('width',_target_width+'px');
	var _canvas_color = $('<canvas>').attr({id:_canvas_id+'_2','width':_target_width,'height':_canvas_height}).css('width',_target_width+'px');
	var _canvas_progress = $('<canvas>').attr({id:_canvas_id+'_3','width':_target_width,'height':_canvas_height}).css('width',_target_width+'px');

	_canvas_gray.appendTo(_aurio_view.find('.vjs-progress-control .vjs-progress-holder'));
	_canvas_color.appendTo(_aurio_view.find('.vjs-progress-control .vjs-progress-holder .vjs-play-progress'));
	_canvas_progress.appendTo(_aurio_view.find('.vjs-progress-control .vjs-progress-holder .vjs-load-progress'));


	var _canvas_gray_js = document.getElementById(_canvas_id+'_1');
	var _ctx_canvas_gray = _canvas_gray_js.getContext("2d");
	var _ctx_canvas_gray_grd = _ctx_canvas_gray.createLinearGradient(0,0,0,60);
	_ctx_canvas_gray_grd.addColorStop(0,"#FFFFFF");
	_ctx_canvas_gray_grd.addColorStop(1,"#FFFFFF");
	_ctx_canvas_gray.fillStyle = _ctx_canvas_gray_grd;
    _ctx_canvas_gray.strokeStyle = "#666666";
    _ctx_canvas_gray.lineWidth = 0.1;	

	var _canvas_progress_js = document.getElementById(_canvas_id+'_3');
	var _ctx_canvas_progress = _canvas_progress_js.getContext("2d");
	var _ctx_canvas_progress_grd = _ctx_canvas_progress.createLinearGradient(0,0,0,60);
	_ctx_canvas_progress_grd.addColorStop(0.5,"#999999");
	_ctx_canvas_progress_grd.addColorStop(1,"#FFFFFF");
	_ctx_canvas_progress.fillStyle = _ctx_canvas_progress_grd;
    _ctx_canvas_progress.strokeStyle = "#666666";
    _ctx_canvas_progress.lineWidth = 0.1;	
	
	
	var _canvas_color_js = document.getElementById(_canvas_id+'_2');
	var _ctx_canvas_color = _canvas_color_js.getContext("2d");
	var _ctx_canvas_color_grd = _ctx_canvas_color.createLinearGradient(0,0,0,60);
	_ctx_canvas_color_grd.addColorStop(0.5,"#988d31");
	_ctx_canvas_color_grd.addColorStop(1,"#dbcb47");
	_ctx_canvas_color.fillStyle = _ctx_canvas_color_grd;
	_ctx_canvas_color.strokeStyle = "#dbcb47";
    _ctx_canvas_color.lineWidth = 0.1;	
	

	$.each(_left_wave,function(_lwi,_lwitem){
		_ctx_canvas_gray.fillRect((_bar_unit*_lwi)+1,(_canvas_height-_lwitem),Math.round(_bar_unit)-1,_lwitem);
		_ctx_canvas_gray.strokeRect((_bar_unit*_lwi)+1,(_canvas_height-_lwitem),Math.round(_bar_unit)-1,_lwitem);
		_ctx_canvas_color.fillRect((_bar_unit*_lwi)+1,(_canvas_height-_lwitem),Math.round(_bar_unit)-1,_lwitem);
		_ctx_canvas_color.strokeRect((_bar_unit*_lwi)+1,(_canvas_height-_lwitem),Math.round(_bar_unit)-1,_lwitem);
		_ctx_canvas_progress.fillRect((_bar_unit*_lwi)+1,(_canvas_height-_lwitem),Math.round(_bar_unit)-1,_lwitem);
		_ctx_canvas_progress.strokeRect((_bar_unit*_lwi)+1,(_canvas_height-_lwitem),Math.round(_bar_unit)-1,_lwitem);
	});
	
};

var _make_waveform = function(_target,_waveform_path){
	var _aurio_view = _target.children('.video-js.khamenei_ir-ajs');
	var _canvas_id = 'canvas_'+_aurio_view.attr('id');
	var _target_width = _target.width();
	//var _bar_width = 3;
	var _bar_unit_200 = (_target_width/200);
	var _bar_unit_100 = (_target_width/100);
	var _canvas_height = 80;
	
	
	$.getJSON(_waveform_path,function(_json){
		if(_json!==null){
			var _left_wave_arr = _json.left_wave;
			//var _duration = (_json.duration);
			var _left_wave_200 = [];
			var _left_wave_100 = [];
			var _left_wave_100_index = 0;
			$.each(_left_wave_arr,function(_wi,_witem){
				_left_wave_200[_wi] = parseInt(parseFloat(_witem)*60);
				if(_wi%2===0){
					_left_wave_100[_left_wave_100_index] = parseInt(parseFloat(_witem)*60);
					_left_wave_100_index++;
				}
			});

			$(window).resize(function(){
				_target_width = _target.width();
				_bar_unit_200 = (_target_width/200);
				_bar_unit_100 = (_target_width/100);
				if(_target_width>450){
					_make_canvas(_canvas_id,_target_width,_canvas_height,_aurio_view,_left_wave_200,_bar_unit_200);
				}else{
					_make_canvas(_canvas_id,_target_width,_canvas_height,_aurio_view,_left_wave_100,_bar_unit_100);
				}
			});
			if(_target_width>450){
				_make_canvas(_canvas_id,_target_width,_canvas_height,_aurio_view,_left_wave_200,_bar_unit_200);
			}else{
				_make_canvas(_canvas_id,_target_width,_canvas_height,_aurio_view,_left_wave_100,_bar_unit_100);			
			}
			
		}else{
			_aurio_view.find('.vjs-progress-control').addClass('ajs-simple-progress-control');
		}
		
		
		
		
		//console.log(_duration,_left_wave);
	});
};

var _player_setup_audio_small = function(_target,_obj){
	
	var _thumbnail = _obj.channel.item.thumbnail;
	var _title = _obj.channel.item.title;
	var _description = _obj.channel.item.description;
	var _link = _obj.channel.item.link;
	var _audio_size = _obj.channel.item.length;
	var _audio_path = _obj.channel.item.audio.q1;
	var _audio_waveform_path = _obj.channel.item.audio.waveform;
	var _audio_path_hd = _obj.channel.item.audio.q2;
	
	
	var _small_player_wrapper = $('<div>').addClass('audio-player-small').appendTo(_target);
	var _spw_download = $('<div>').addClass('audio-player-small-download').appendTo(_small_player_wrapper);
	var _spw_download_button = $('<button>').attr({'type':'button'}).addClass('audio-player-small-download-button').html('دریافت').appendTo(_spw_download);
	var _spw_download_list = $('<ul>').addClass('audio-player-small-download-list').appendTo(_spw_download);
	$('<li>').html('<a href="'+(_target.attr('data-hq'))+'" target="_blank">کیفیت خوب</a>').appendTo(_spw_download_list);
	$('<li>').html('<a href="'+(_target.attr('data-mq'))+'" target="_blank">کیفیت متوسط</a>').appendTo(_spw_download_list);
	$('<li>').html('<a href="'+(_target.attr('data-lq'))+'" target="_blank">کیفیت پایین</a>').appendTo(_spw_download_list);
	
	var _spw_play_pause = $('<div>').addClass('audio-player-small-play-pause').appendTo(_small_player_wrapper);
	var _spw_play_pause_button = $('<button>').attr({'type':'button','data-thumbnail':_thumbnail,'data-title':_title,'data-description':_description,'data-link':_link,'data-path':_audio_path,'data-waveform-path':_audio_waveform_path}).addClass('audio-player-small-play-pause-button paused').html('<i class="icon icon-play"></i><i class="icon icon-pause"></i>').appendTo(_spw_play_pause);
	
	
	_spw_download_button.click(function(){
		if(_spw_download_list.hasClass('show')){
			_spw_download_list.removeClass('show');
		}else{
			_spw_download_list.addClass('show');
		}
	});
	
	var _spw_sto = null;
	_spw_download.mouseout(function(){
		_spw_sto = setTimeout(function(){
			_spw_download_list.removeClass('show');
		},100);
	});
	_spw_download_list.mouseover(function(){
		clearTimeout(_spw_sto);
		_spw_download_list.addClass('show');
	});
	
	_spw_play_pause_button.click(function(){
		if(!_spw_play_pause_button.hasClass('paused')){
			_spw_play_pause_button.addClass('paused');
			_audiojs.pause();
		}else{
			$('.audio-player-small-play-pause button').addClass('paused');
			var _target_main = $.trim(_spw_play_pause_button.parents('.khamenei_ir-ajs-small').attr('data-target'));
			_target_main = $('.khamenei_ir-ajs[data-id="'+_target_main+'"]');
			_audiojs.src(_spw_play_pause_button.attr('data-path'));
			_audiojs.ready(function(){
				_audiojs.play();
				_make_waveform(_target_main,_spw_play_pause_button.attr('data-waveform-path'));
				_target_main.find('.datas-stage-ajs .title a').text(_spw_play_pause_button.attr('data-title'));
				_target_main.find('.datas-stage-ajs .title small').text(_spw_play_pause_button.attr('data-description'));
				_spw_play_pause_button.removeClass('paused');
				
				$('body,html').animate({'scrollTop':(($('#newsContentInnerSide .Content .khamenei_ir-ajs[data-id]').offset().top)-50)+'px'},600);
				
			});
		}
	});
	
	//console.log(_thumbnail,_title,_description,_link,_audio_path,_audio_waveform_path);
};

var _player_setup_audio = function(_target,_xml_path,_obj,_shift_item){
	//console.log(_target,_obj);
	var _time_now = new Date().getTime();
	var _audio_elm_id = 'audio_'+_time_now+'_'+parseInt(Math.random()*100000);
	
	if(_shift_item===null){
		_target.addClass(_obj.channel.mode);
	}
	var _audio_elm = $('<audio>').addClass('video-js khamenei_ir-ajs '+_obj.channel.mode).attr({'id':_audio_elm_id,'controls':true,'preload':'metadata','width':800,'height':80,'data-setup':'{}'});
	//_audio_elm.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
	if(_target.hasClass('in-archive')){
		_audio_elm.attr({'width':'581','height':'80'});
	}
	var _thumbnail = null;
	var _title = null;
	var _description = null;
	var _link = null;
	var _audio_size = null;
	var _audio_path = null;
	var _audio_waveform_path = null;
	var _audio_path_hd = null;
	
	//alert(_obj.channel.mode);
	
	if(_shift_item===null){
		switch(_obj.channel.mode){
			case 'default':
				_thumbnail = _obj.channel.item.thumbnail;
				_title = _obj.channel.item.title;
				_description = _obj.channel.item.description;
				_link = _obj.channel.item.link;
				_audio_size = _obj.channel.item.length;
				_audio_path = _obj.channel.item.audio.q1;
				_audio_waveform_path = _obj.channel.item.audio.waveform;
				_audio_path_hd = _obj.channel.item.audio.q2;
				//$('<source>').attr({'src':_audio_path,'type':'audio/mp4'/*_obj.channel.item.type*/}).appendTo(_audio_elm);
			break;
			case 'playlist':
				_thumbnail = _obj.channel.items[0].thumbnail;
				_title = _obj.channel.items[0].title;
				_description = _obj.channel.items[0].description;
				_link = _obj.channel.items[0].link;
				_audio_size = _obj.channel.items[0].length;
				_audio_path = _obj.channel.items[0].audio.q1;
				_audio_waveform_path = _obj.channel.items[0].audio.waveform;
				_audio_path_hd = _obj.channel.items[0].audio.q2;
				//$('<source>').attr({'src':_audio_path,'type':'audio/mp4'/*_obj.channel.items[0].type*/}).appendTo(_audio_elm);
			break;
		}
	}else{
		var _curr_shift = parseInt(_shift_item)-1;

		////
		_thumbnail = _obj.channel.items[_curr_shift].thumbnail;
		_title = _obj.channel.items[_curr_shift].title;
		_description = _obj.channel.items[_curr_shift].description;
		_link = _obj.channel.items[_curr_shift].link;
		_audio_size = _obj.channel.items[_curr_shift].length;
		_audio_path = _obj.channel.items[_curr_shift].audio.q1;
		_audio_waveform_path = _obj.channel.items[_curr_shift].audio.waveform;
		_audio_path_hd = _obj.channel.items[_curr_shift].audio.q2;
	}
	
	
	$('<source>').attr({'src':_audio_path,'type':'audio/mpeg'}).appendTo(_audio_elm);
	_target.html('');
	_audio_elm.appendTo(_target);
	var _canvas_stage = $('<div>').addClass('canvas-stage-ajs').appendTo(_target);
	$('<div>').addClass('background-stage').css({'background-image':'url("'+_thumbnail+'")'}).appendTo(_canvas_stage);
	var _thumbnail_elm = $('<figure>').addClass('thumbnail').appendTo(_canvas_stage);
	$('<a>').attr({'href':_link,'target':'_blank'}).html('<img src="'+_thumbnail+'" alt="">').appendTo(_thumbnail_elm);
	
	var _canvas_datas_stage = $('<div>').addClass('datas-stage-ajs').appendTo(_target);
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
			var _audio_size = _vitem.length;
			var _audio_path = _vitem.audio.q1;
			var _audio_path_hd = _vitem.audio.q2;
			
			var _playlist_li = $('<li>').addClass('playlist-item').attr({'data-title':_title,'data-description':_description,'data-thumbnail':_thumbnail,'data-link':_link,'data-audio':_audio_path,'data-audio-hd':_audio_path_hd}).appendTo(_playlist_ul);
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
	
	
	var options = {
		controlBar: {
			volumePanel: {inline: false}
		},
	};
	_audiojs = videojs(_audio_elm_id,options);
	
	_audiojs.ready(function(){
		_make_waveform(_target,_audio_waveform_path);
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
			var _audio_path = _this.attr('data-audio');
			var _audio_path_hd = _this.attr('data-audio-hd');
			
			_canvas_datas_stage.children('.thumbnail').html('');
			$('<a>').attr({'href':_link,'target':'_blank'}).html('<img src="'+_thumbnail+'" alt="">').appendTo(_canvas_datas_stage.children('.thumbnail'));
	
			_canvas_datas_stage.children('.title').html('');
			$('<a>').attr({'href':_link,'target':'_blank'}).text(_title).appendTo(_canvas_datas_stage.children('.title'));
			$('<small>').text('('+_description+')').appendTo(_canvas_datas_stage.children('.title'));
			
			
			
			_audiojs.src(_audio_path);
			_audiojs.ready(function(){
				_audiojs.play();
				$('body,html').animate({scrollTop:(_target.offset().top - 55)+'px'},600);
			});
		}
	});
	
	
	if($('#newsContentInnerSide .Content .SpchIdxBoxTitle').length>0){
		var _main_links_elms = $('#newsContentInnerSide .Content ._links');
		
		$('<div>').addClass('oliveBox').css('float','right').html('<div class="L"></div><div class="C" style="padding:0 5px; line-height:21px; color:#fff;">صوت اصلی</div><div class="R"></div>').appendTo('#newsContentInnerSide .Content .player-row-view');
		var _main_audio_small = $('<div>').addClass('SpchIdxBoxTitle').appendTo('#newsContentInnerSide .Content .player-row-view').css('margin-bottom','20px');
		$('<div>').addClass('khamenei_ir-ajs-small').attr({'data-rss':_xml_path,'data-hq':_main_links_elms.find('.bluelink:eq(0) a.FFF').attr('href'),'data-mq':_main_links_elms.find('.bluelink:eq(1) a.FFF').attr('href'),'data-lq':_main_links_elms.find('.bluelink:eq(2) a.FFF').attr('href'),'data-target':_target.attr('data-id')}).appendTo(_main_audio_small);
		var _main_audio_small_view = $('<div>').addClass('SpchIdxSlideBar').appendTo(_main_audio_small);
		//$('<div>').addClass('leftArrow').appendTo(_main_audio_small_view);
		var _main_audio_small_view_text = $('<div>').addClass('text-wrapper').css({'display':'inline','float':'right','width':'calc(100% - 25px)','margin-right':'5px'}).appendTo(_main_audio_small_view);
		$('<span>').css({'color':'#103b7f'}).text(_title).appendTo(_main_audio_small_view_text);
		$('<div>').addClass('SpchIdxSlideBottomBg').appendTo(_main_audio_small);
	}
	
	
	$('.khamenei_ir-ajs-small').each(function(){
		var _this = $(this);
		var _xml_path = _this.attr('data-rss');
		$.get(_xml_path,function(_xml_str){
			var _xml_obj = _parse_xml_audio(_xml_str);
			_player_setup_audio_small(_this,_xml_obj);
		});
	});
	
};

$('.khamenei_ir-ajs').each(function(){
	var _this = $(this);
	var _xml_path = _this.attr('data-rss');
	var _shift_item = null;
	if(_this.attr('data-shift') !== undefined){
		_shift_item = parseInt(_this.attr('data-shift'));
	}
	
	$.get(_xml_path,function(_xml_str){
		var _xml_obj = _parse_xml_audio(_xml_str);
		_player_setup_audio(_this,_xml_path,_xml_obj,_shift_item);
	});
});






