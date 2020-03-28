$(document).ready(function(){

      //Menu Navigation
      //$(".menu-inner a.menu-homepage").mouseover();
      $(".menu-inner a").hover(function(){
     $("#divO").css({left:$(this).position().left, width:$(this).width()+5});
     $("#submenu .submenu-inner ul").css("display","none");
     $("#submenu .submenu-inner ul[rel='"+$(this).attr("class")+"']").css("display","inline");
     });

  $("a.ChangeJostarHP").click(function () {
    var currRel=$(this).attr("id");
	$("#keywords-list div.JSOC").css("display","none");
    $("#keywords-list ul li div div").css("display","none")
    $("div[rel='"+currRel+"']").toggle();
  });
$("a#JSOC_1").click();



   // $("div#selections-list").jsonScroll({vertical:false, rtl:true, scroll:2, nextBtn:'#navigate-left-selections', prevBtn:'#navigate-right-selections',mousewheel:false, queryStringParam:true, getItem:'y', comboBoxType:true, comboBoxItem:'#comboBox1', pointMarker:true, pointMarkerId:'#points1'});
    $("div#selections-list").jsonScroll({vertical:false, rtl:true, scroll:2, nextBtn:'#navigate-left-selections', prevBtn:'#navigate-right-selections',mousewheel:false, queryStringParam:true, getItem:'y', comboBoxType:true, comboBoxItem:'#comboBox1', pointMarker:true, pointMarkerId:'#points_1'});
    $("div#appended-list").jsonScroll({vertical:false, rtl:true, scroll:2, nextBtn:'#navigate-left-appended', prevBtn:'#navigate-right-appended',mousewheel:false, queryStringParam:true, getItem:'y', comboBoxType:true, comboBoxItem:'#comboBox1', pointMarker:true, pointMarkerId:'#points__9'});

	
    $("div#latesst").jsonScroll({vertical: true, rtl:false, scroll: 2, nextBtn: '#navigate-down-latesst', prevBtn: '#navigate-up-latesst'});
		
	$("div#telex-list").jsonScroll({vertical: true, rtl:false, scroll: 4, nextBtn: '#navigate-down-telex', prevBtn: '#navigate-up-telex'});
    $("div#speeches-list").jsonScroll({vertical: true, rtl:false, scroll: 4, nextBtn: '#navigate-down-speeches', prevBtn: '#navigate-up-speeches'});
	$(".gd_4 div#newKeywords-list").jsonScroll({vertical: true, rtl:false, scroll: 4, nextBtn: '#navigate-down-newKeywords', prevBtn: '#navigate-up-newKeywords'});
	$(".gd_4 div#radmap-list").jsonScroll({vertical: true, rtl:false, scroll: 4, nextBtn: '#navigate-down-radmap', prevBtn: '#navigate-up-radmap'});

    /*Row 4*/
	$(".gd_4 div#photo-list").jsonScroll({vertical: true, rtl: true, scroll: 3, nextBtn: '#navigate-down-photo', prevBtn: '#navigate-up-photo'});
	$(".gd_4 div#audio-list").jsonScroll({vertical: true, rtl: true, scroll: 3, nextBtn: '#navigate-down-audio', prevBtn: '#navigate-up-audio'});
	$(".gd_4 div#video-list").jsonScroll({vertical: true, rtl: true, scroll: 3, nextBtn: '#navigate-down-video', prevBtn: '#navigate-up-video'});
/*
	$(".gd_4 div#around-list").jsonScroll({vertical: true, rtl: true, scroll: 4, nextBtn: '#navigate-down-around', prevBtn: '#navigate-up-around'});
*/
    $("div#memory-list").jsonScroll({vertical: true, rtl:false, scroll: 4, nextBtn: '#navigate-down-memory', prevBtn: '#navigate-up-memory'});

    $('#newKeywords-list a.kwtitle:even').css({'background':'#c8d8f0'});

    // $('#sms-box').tinyscrollbar({
   	// 	axis: 'y',
   	// 	wheel: 40,
   	// 	scroll: true,
   	// 	size: 214
   	// });
/**/
    $('.header-rooznegar a').hover(function(){$(this).stop(false,true).animate({'margin-top':'0px'},300);},function(){$(this).stop(false,true).animate({'margin-top':'7px'},600);})

//  $("div#namSel-list").jsonScroll({vertical:false, rtl:true, scroll:6, nextBtn:'#namLNav', prevBtn:'#namRNav',mousewheel:false, queryStringParam:true, getItem:'y', comboBoxType:true, comboBoxItem:'#comboBox1', pointMarker:true, autoplay:true, pointMarkerId:'#points2'});

    $("div#multimedia-list").jsonScroll({vertical:false, rtl:true, scroll:1, nextBtn:'#navigate-left-multimedia', prevBtn:'#navigate-right-multimedia',mousewheel:true, queryStringParam:true, getItem:'y', pointMarker:true, pointMarkerId:'#points2'});
   	$('#multimedia .box-inner-horizontal li').hover(function(){
   		$(this).children('a').children('img').stop().animate({'top':'-162px'},400);
   		$(this).children('a').children('span').stop().animate({'height':'34px','padding-top':'10px'},400);
   	},function(){
   		$(this).children('a').children('img').stop().animate({'top':'0px'},400);
   		$(this).children('a').children('span').stop().animate({'height':'0px','padding-top':'0px'},400);
   	});
	
	// var _time_random = new Date().getTime();
	// $.getJSON('./ndata/news/weekly/files/subjects.json?r='+_time_random,function(_kjson){
	// 	var _target = $('#radmap-list>ul.list-items');
	// 	_target.parent('#radmap-list').attr('id','radmap-list-js')
	// 	_target.html('');
	// 	$.each(_kjson,function(_k_i,_k_item){
	// 		var _li = $('<li>');
	// 		$('<a>').attr({'href':'/weekly/#'+_k_item.id+',1','title':_k_item.fa_title}).text(_k_item.fa_description).appendTo(_li);
	// 		_li.appendTo(_target);
	// 	});
	// 	$(".gd_4 div#radmap-list-js").jsonScroll({vertical: true, rtl:false, scroll: 4, nextBtn: '#navigate-down-radmap', prevBtn: '#navigate-up-radmap'});
	// });
	
	if($('#features .divTitr1_2').length===1){
		$('#features').addClass('wide');
	}
	
	
	var _f_t1_elm = $('#features .divTitr1');
	if(_f_t1_elm.length===1){
		var _f_t1_elm_bg = _f_t1_elm.css('background-image');
		_f_t1_elm_bg = $.trim(_f_t1_elm_bg.replace('url("','').replace('")',''));
		
		var _f_t1_link = 'javascript:void(0)';
		if(_f_t1_elm.children('div[onclick]').attr('onclick')!==undefined){
			_f_t1_link = _f_t1_elm.children('div[onclick]').attr('onclick');
		}
		_f_t1_link = _f_t1_link.replace("location.href='",'').replace("';",'');
		var _f_t1_link_elm = $('<a>').attr({'href':_f_t1_link}).prependTo(_f_t1_elm);
		$('<img>').addClass('divTitr1_img').css('display','none').attr({'src':_f_t1_elm_bg,'alt':''}).appendTo(_f_t1_link_elm);
		//_f_t1_elm.removeAttr('style');
	}
	
	var _f_t1_2_elm = $('#features .divTitr1_2');
	if(_f_t1_2_elm.length===1){
		var _f_t1_2_elm_bg = _f_t1_2_elm.css('background-image');
		_f_t1_2_elm_bg = $.trim(_f_t1_2_elm_bg.replace('url("','').replace('")',''));
		var _f_t1_2_link = _f_t1_2_elm.children('div[onclick]').attr('onclick');
		_f_t1_2_link = _f_t1_2_link.replace("location.href='",'').replace("';",'');
		var _f_t1_2_link_elm = $('<a>').attr({'href':_f_t1_2_link}).prependTo(_f_t1_2_elm);
		$('<img>').addClass('divTitr1_2_img').css('display','none').attr({'src':_f_t1_2_elm_bg,'alt':''}).appendTo(_f_t1_2_link_elm);
		
		var _med_image = _f_t1_2_elm.find('.alt-image-med');
		var _med_image_src = _med_image.attr('src');
		_med_image.remove();
		$('<img>').addClass('divTitr1_2_img_alt_med').css('display','none').attr({'src':_med_image_src,'alt':''}).appendTo(_f_t1_2_link_elm);
		//_f_t1_elm.removeAttr('style');
	}
	
	var _f_t2_elm = $('#features .divTitr2');
	if(_f_t2_elm.length===1){
		var _f_t2_elm_bg = _f_t2_elm.css('background-image');
		_f_t2_elm_bg = $.trim(_f_t2_elm_bg.replace('url("','').replace('")',''));
		if($('#sms-box').length===0){
			if(_f_t2_elm.find('.div3 a').length>0){
				var _f_t2_elm_href = _f_t2_elm.find('.div3 a').attr('href');
				var _f_t2_elm_a = $('<a>').attr('href',_f_t2_elm_href).prependTo(_f_t2_elm);
				$('<img>').addClass('divTitr2_img').css('display','none').attr({'src':_f_t2_elm_bg,'alt':''}).prependTo(_f_t2_elm_a);
			}else{
				$('<img>').addClass('divTitr2_img').css('display','none').attr({'src':_f_t2_elm_bg,'alt':''}).prependTo(_f_t2_elm);
			}
		}
		//$('<img>').addClass('divTitr2_img').css('display','none').attr({'src':_f_t2_elm_bg,'alt':''}).prependTo(_f_t2_elm);
		//_f_t2_elm.removeAttr('style');
	}
	var _m_ads_elm = $('#main .row1 .gd_1 .divAds');
	if(_m_ads_elm.length===1){
		var _m_ads_elm_bg = _m_ads_elm.css('background-image');
		_m_ads_elm_bg = $.trim(_m_ads_elm_bg.replace('url("','').replace('")',''));
		$('<img>').addClass('divAds_img').css('display','none').attr({'src':_m_ads_elm_bg,'alt':''}).prependTo(_m_ads_elm);
	}
	
	
	$('#selections-list img[rel], #multimedia-list img[rel]').each(function(){
		var _this_rel = $(this).attr('rel');
		$(this).attr('src',_this_rel);
	});
	
	
	//_m_ads_elm.removeAttr('style');
	
	
	
	
	/*
	//<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://khameneisocial.com/live-irib-quran/index" style="width:582px; height:245px; border:none"></iframe>
	$('#features .divTitr1').html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://khameneisocial.com/live-irib-quran/index" style="width:582px; height:245px; border:none"></iframe>');
	setInterval(function(){
		$.getJSON("http://farsi.khamenei.ir/live/player.json", function(){
			//console.log( "success" );
		}).done(function(data){
			if(data.active!==true){
				if($('#features iframe').length>0){
					location.reload(true);
				}
			}
		});	
	}, 10000);
	*/
   });