/*! vTicker 1.15 http://richhollis.github.com/vticker/ | http://richhollis.github.com/vticker/license/ | based on Jubgits vTicker http://www.jugbit.com/jquery-vticker-vertical-news-ticker/ */
(function(d){var n={speed:700,pause:4E3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1},c={moveUp:function(a,b){c.animate(a,b,"up")},moveDown:function(a,b){c.animate(a,b,"down")},animate:function(a,b,e){var c=a.itemHeight,f=a.options,k=a.element,g=k.children("ul"),l="up"===e?"li:first":"li:last";k.trigger("vticker.beforeTick");var m=g.children(l).clone(!0);0<f.height&&(c=g.children("li:first").height());c+=f.margin+2*f.padding;"down"===e&&g.css("top","-"+c+"px").prepend(m);if(b&&b.animate){if(a.animating)return;a.animating=!0;g.animate("up"===e?{top:"-="+c+"px"}:{top:0},f.speed,function(){d(g).children(l).remove();d(g).css("top","0px");a.animating=!1;k.trigger("vticker.afterTick")})}else g.children(l).remove(),g.css("top","0px"),k.trigger("vticker.afterTick");"up"===e&&m.appendTo(g)},nextUsePause:function(){var a=d(this).data("state"),b=a.options;a.isPaused||2>a.itemCount||f.next.call(this,{animate:b.animate})},startInterval:function(){var a=d(this).data("state"),b=this;a.intervalId=setInterval(function(){c.nextUsePause.call(b)},a.options.pause)},stopInterval:function(){var a=d(this).data("state");a&&(a.intervalId&&clearInterval(a.intervalId),a.intervalId=void 0)},restartInterval:function(){c.stopInterval.call(this);c.startInterval.call(this)}},f={init:function(a){f.stop.call(this);var b=jQuery.extend({},n);a=d.extend(b,a);var b=d(this),e={itemCount:b.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:b,animating:!1,options:a,isPaused:a.startPaused?!0:!1,pausedByCode:!1};d(this).data("state",e);b.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:a.margin,padding:a.padding});isNaN(a.height)||0===a.height?(b.children("ul").children("li").each(function(){var a=d(this);a.height()>e.itemHeight&&(e.itemHeight=a.height())}),b.children("ul").children("li").each(function(){d(this).height(e.itemHeight)}),b.height((e.itemHeight+(a.margin+2*a.padding))*a.showItems+a.margin)):b.height(a.height);var h=this;a.startPaused||c.startInterval.call(h);a.mousePause&&b.bind("mouseenter",function(){!0!==e.isPaused&&(e.pausedByCode=!0,c.stopInterval.call(h),f.pause.call(h,!0))}).bind("mouseleave",function(){if(!0!==e.isPaused||e.pausedByCode)e.pausedByCode=!1,f.pause.call(h,!1),c.startInterval.call(h)})},pause:function(a){var b=d(this).data("state");if(b){if(2>b.itemCount)return!1;b.isPaused=a;b=b.element;a?(d(this).addClass("paused"),b.trigger("vticker.pause")):(d(this).removeClass("paused"),b.trigger("vticker.resume"))}},next:function(a){var b=d(this).data("state");if(b){if(b.animating||2>b.itemCount)return!1;c.restartInterval.call(this);c.moveUp(b,a)}},prev:function(a){var b=d(this).data("state");if(b){if(b.animating||2>b.itemCount)return!1;c.restartInterval.call(this);c.moveDown(b,a)}},stop:function(){d(this).data("state")&&c.stopInterval.call(this)},remove:function(){var a=d(this).data("state");a&&(c.stopInterval.call(this),a=a.element,a.unbind(),a.remove())}};d.fn.vTicker=function(a){if(f[a])return f[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)d.error("Method "+a+" does not exist on jQuery.vTicker");else return f.init.apply(this,arguments)}})(jQuery);
/* Tinytips */
(function ($) { $.fn.tinyTips = function (supCont) { var tipFrame = '<div class="tinyTip"><div class="tip-content"></div><div class="bottom"> </div></div>'; var animSpeed = 100; var tinyTip; var tText; $(this).hover(function () { $('body').append(tipFrame); tinyTip = $('div.tinyTip'); tinyTip.hide(); if (supCont === 'title') { var tipCont = $(this).attr('title') } else if (supCont !== 'title') { var tipCont = supCont } ;$('.tinyTip .tip-content').html(tipCont); tText = $(this).attr('title'); $(this).attr('title', ''); var yOffset = -20; var xOffset = (((tinyTip.width() - 10) / 2)) - ($(this).width() / 2); var pos = $(this).offset(); var nPos = pos; nPos.top = pos.top - yOffset; nPos.left = pos.left - xOffset; tinyTip.css('position', 'absolute').css('z-index', '1000'); tinyTip.css(nPos).fadeIn(animSpeed) }, function () { $(this).attr('title', tText); $('div.tinyTip').fadeOut(animSpeed, function () { $(this).remove() }) }) } })(jQuery);
/* jquery.highlight-3.yui.js */
jQuery.fn.highlight=function(b){function a(e,j){var l=0;if(e.nodeType==3){var k=e.data.toUpperCase().indexOf(j);if(k>=0){var h=document.createElement("span");h.className="highlight";var f=e.splitText(k);var c=f.splitText(j.length);var d=f.cloneNode(true);h.appendChild(d);f.parentNode.replaceChild(h,f);l=1}}else{if(e.nodeType==1&&e.childNodes&&!/(script|style)/i.test(e.tagName)){for(var g=0;g<e.childNodes.length;++g){g+=a(e.childNodes[g],j)}}}return l}return this.each(function(){a(this,b.toUpperCase());a(this, b.toUpperCase().replace(/\u06CC/g,'\u064A'));a(this, b.toUpperCase().replace(/\u0626/g,'\u064A'));})};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode){replaceChild(this.firstChild,this);normalize()}}).end()};
/* utf8.js */
function chr(a){return String.fromCharCode(a)}function code2utf(a){if(a<128){return chr(a)}if(a<2048){return chr(192+(a>>6))+chr(128+(a&63))}if(a<65536){return chr(224+(a>>12))+chr(128+((a>>6)&63))+chr(128+(a&63))}if(a<2097152){return chr(240+(a>>18))+chr(128+((a>>12)&63))+chr(128+((a>>6)&63))+chr(128+(a&63))}}function _utf8Encode(c){var b=new Array();for(var a=0;a<c.length;a++){b[a]=code2utf(c.charCodeAt(a))}return b.join("")}function utf8Encode(d){var c=new Array();var e,b=0;var a="";while((e=d.search(/[^\x00-\x7F]/))!=-1){a=d.match(/([^\x00-\x7F]+[\x00-\x7F]{0,10})+/)[0];c[b++]=d.substr(0,e);c[b++]=_utf8Encode(a);d=d.substr(e+a.length)}c[b++]=d;return c.join("")}function _utf8Decode(g){var f=new Array();var e,b,a,h,c=0;for(var d=0;d<g.length;){e=g.charCodeAt(d++);if(e>127){b=g.charCodeAt(d++)}if(e>223){a=g.charCodeAt(d++)}if(e>239){h=g.charCodeAt(d++)}if(e<128){f[c++]=chr(e)}else{if(e<224){f[c++]=chr(((e-192)<<6)+(b-128))}else{if(e<240){f[c++]=chr(((e-224)<<12)+((b-128)<<6)+(a-128))}else{f[c++]=chr(((e-240)<<18)+((b-128)<<12)+((a-128)<<6)+(h-128))}}}}return f.join("")}function utf8Decode(d){var c=new Array();var e=0;var a="";var b=0;while((e=d.search(/[^\x00-\x7F]/))!=-1){a=d.match(/([^\x00-\x7F]+[\x00-\x7F]{0,10})+/)[0];c[b++]=d.substr(0,e)+_utf8Decode(a);d=d.substr(e+a.length)}c[b++]=d;return c.join("")};
/* mousewheel.min.js Version: 3.0.6 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/* Tiny Scrollbar 1.8.1 http://www.baijs.nl/tinyscrollbar/ */
(function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:false}};a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(q,g){var k=this,t=q,j={obj:a(".viewport",q)},h={obj:a(".overview",q)},d={obj:a(".scrollbar",q)},m={obj:a(".track",d.obj)},p={obj:a(".thumb",d.obj)},l=g.axis==="x",n=l?"left":"top",v=l?"Width":"Height",r=0,y={start:0,now:0},o={},e="ontouchstart" in document.documentElement;function c(){k.update();s();return k}this.update=function(z){j[g.axis]=j.obj[0]["offset"+v];h[g.axis]=h.obj[0]["scroll"+v];h.ratio=j[g.axis]/h[g.axis];d.obj.toggleClass("disable",h.ratio>=1);m[g.axis]=g.size==="auto"?j[g.axis]:g.size;p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);w()};function w(){var z=v.toLowerCase();p.obj.css(n,r/d.ratio);h.obj.css(n,-r);o.start=p.obj.offset()[n];d.obj.css(z,m[g.axis]);m.obj.css(z,m[g.axis]);p.obj.css(z,p[g.axis])}function s(){if(!e){p.obj.bind("mousedown",i);m.obj.bind("mouseup",u)}else{j.obj[0].ontouchstart=function(z){if(1===z.touches.length){i(z.touches[0]);z.stopPropagation()}}}if(g.scroll&&window.addEventListener){t[0].addEventListener("DOMMouseScroll",x,false);t[0].addEventListener("mousewheel",x,false)}else{if(g.scroll){t[0].onmousewheel=x}}}function i(A){a("body").addClass("noSelect");var z=parseInt(p.obj.css(n),10);o.start=l?A.pageX:A.pageY;y.start=z=="auto"?0:z;if(!e){a(document).bind("mousemove",u);a(document).bind("mouseup",f);p.obj.bind("mouseup",f)}else{document.ontouchmove=function(B){B.preventDefault();u(B.touches[0])};document.ontouchend=f}}function x(B){if(h.ratio<1){var A=B||window.event,z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;r-=z*g.wheel;r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));p.obj.css(n,r/d.ratio);h.obj.css(n,-r);if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){A=a.event.fix(A);A.preventDefault()}}}function u(z){if(h.ratio<1){if(g.invertscroll&&e){y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))}else{y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))}r=y.now*d.ratio;h.obj.css(n,-r);p.obj.css(n,y.now)}}function f(){a("body").removeClass("noSelect");a(document).unbind("mousemove",u);a(document).unbind("mouseup",f);p.obj.unbind("mouseup",f);document.ontouchmove=document.ontouchend=null}return c()}}(jQuery));
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/* @author Blair Mitchelmore* jquery.query-2.1.7.min.js */
new function(a){var b=a.separator||"&";var c=a.spaces===false?false:true;var d=a.suffix===false?"":"[]";var e=a.prefix===false?false:true;var f=e?a.hash===true?"#":"?":"";var g=a.numbers===false?false:true;jQuery.query=new function(){var a=function(a,b){return a!=undefined&&a!==null&&(!!b?a.constructor==b:true)};var d=function(a){var b,c=/\[([^[]*)\]/g,d=/^([^[]+)(\[.*\])?$/.exec(a),e=d[1],f=[];while(b=c.exec(d[2]))f.push(b[1]);return[e,f]};var e=function(b,c,d){var f,g=c.shift();if(typeof b!="object")b=null;if(g===""){if(!b)b=[];if(a(b,Array)){b.push(c.length==0?d:e(null,c.slice(0),d))}else if(a(b,Object)){var h=0;while(b[h++]!=null);b[--h]=c.length==0?d:e(b[h],c.slice(0),d)}else{b=[];b.push(c.length==0?d:e(null,c.slice(0),d))}}else if(g&&g.match(/^\s*[0-9]+\s*$/)){var i=parseInt(g,10);if(!b)b=[];b[i]=c.length==0?d:e(b[i],c.slice(0),d)}else if(g){var i=g.replace(/^\s*|\s*$/g,"");if(!b)b={};if(a(b,Array)){var j={};for(var h=0;h<b.length;++h){j[h]=b[h]}b=j}b[i]=c.length==0?d:e(b[i],c.slice(0),d)}else{return d}return b};var h=function(a){var b=this;b.keys={};if(a.queryObject){jQuery.each(a.get(),function(a,c){b.SET(a,c)})}else{jQuery.each(arguments,function(){var a=""+this;a=a.replace(/^[?#]/,"");a=a.replace(/[;&]$/,"");if(c)a=a.replace(/[+]/g," ");jQuery.each(a.split(/[&;]/),function(){var a=decodeURIComponent(this.split("=")[0]||"");var c=decodeURIComponent(this.split("=")[1]||"");if(!a)return;if(g){if(/^[+-]?[0-9]+\.[0-9]*$/.test(c))c=parseFloat(c);else if(/^[+-]?[0-9]+$/.test(c))c=parseInt(c,10)}c=!c&&c!==0?true:c;if(c!==false&&c!==true&&typeof c!="number")c=c;b.SET(a,c)})})}return b};h.prototype={queryObject:true,has:function(b,c){var d=this.get(b);return a(d,c)},GET:function(b){if(!a(b))return this.keys;var c=d(b),e=c[0],f=c[1];var g=this.keys[e];while(g!=null&&f.length!=0){g=g[f.shift()]}return typeof g=="number"?g:g||""},get:function(b){var c=this.GET(b);if(a(c,Object))return jQuery.extend(true,{},c);else if(a(c,Array))return c.slice(0);return c},SET:function(b,c){var f=!a(c)?null:c;var g=d(b),h=g[0],i=g[1];var j=this.keys[h];this.keys[h]=e(j,i.slice(0),f);return this},set:function(a,b){return this.copy().SET(a,b)},REMOVE:function(a){return this.SET(a,null).COMPACT()},remove:function(a){return this.copy().REMOVE(a)},EMPTY:function(){var a=this;jQuery.each(a.keys,function(b,c){delete a.keys[b]});return a},load:function(a){var b=a.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");var c=a.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");return new h(a.length==c.length?"":c,a.length==b.length?"":b)},empty:function(){return this.copy().EMPTY()},copy:function(){return new h(this)},COMPACT:function(){function b(c){var d=typeof c=="object"?a(c,Array)?[]:{}:c;if(typeof c=="object"){function e(b,c,d){if(a(b,Array))b.push(d);else b[c]=d}jQuery.each(c,function(c,f){if(!a(f))return true;e(d,c,b(f))})}return d}this.keys=b(this.keys);return this},compact:function(){return this.copy().COMPACT()},toString:function(){var d=0,e=[],g=[],h=this;var i=function(a){a=a+"";if(c)a=a.replace(/ /g,"+");return encodeURIComponent(a)};var j=function(b,c,d){if(!a(d)||d===false)return;var e=[i(c)];if(d!==true){e.push("=");e.push(i(d))}b.push(e.join(""))};var k=function(a,b){var c=function(a){return!b||b==""?[a].join(""):[b,"[",a,"]"].join("")};jQuery.each(a,function(a,b){if(typeof b=="object")k(b,c(a));else j(g,c(a),b)})};k(this.keys);if(g.length>0)e.push(f);e.push(g.join(b));return e.join("")}};return new h(location.search,location.hash)}}(jQuery.query||{});

/*http://mojotech.github.io*/
(function($) {
  $.fn.extend({
    stickyMojo: function(options) {

      var settings = $.extend({
        'footerID': '',
        'contentID': '',
        'orientation': $(this).css('float')
      }, options);

      var sticky = {
         'el' : $(this),
         'stickyLeft' : $(settings.contentID).outerWidth() + $(settings.contentID).offset.left,
         'stickyTop2' : $(this).offset().top,
         'stickyHeight' : $(this).outerHeight(true),
         'contentHeight' : $(settings.contentID).outerHeight(true),
         'win' : $(window),
         'breakPoint' : $(this).outerWidth(true) + $(settings.contentID).outerWidth(true),
         'marg' : parseInt($(this).css('margin-top'), 10)
      };

      checkSettings();
      if(ieVersion()) {
          return;
        }
      return this.each(function() {
        sticky.el.css('left', sticky.stickyLeft);

        sticky.win.scroll(function() {
          stick();
        });

        sticky.win.resize(function() {
            sticky.el.css('left', sticky.stickyLeft);
          stick();
        });
      });

      function stick() {
            var limit = $(settings.footerID).offset().top - sticky.stickyHeight;
            var windowTop = sticky.win.scrollTop();
            var stickyTop = sticky.stickyTop2 - sticky.marg;
            if (stickyTop < windowTop && (sticky.win.width() >= sticky.breakPoint)) {
              sticky.el.css({
                position: 'fixed',
                top: 0
              });
              if (settings.orientation === "left") {
                $(settings.contentID).css('margin-left', sticky.el.outerWidth(true));
              } else {
                sticky.el.css('margin-left', $(settings.contentID).outerWidth(true));
              }
            } else {
              sticky.el.css('position', 'static');
              $(settings.contentID).css('margin-left', '0px');
              sticky.el.css('margin-left', '0px');
            }
            if (limit < windowTop) {
              var diff = limit - windowTop;
              sticky.el.css({
                top: diff
              });
            }
          }
        function checkSettings() {
          var errors = [];
          for (var key in settings) {
            if (!settings[key]) {
              console.warn(key + ": cannot be null. Please consult http://mojotech.com/mojosticky for instructions. Terminating.");
              errors.push(settings[key]);
              return;
            }
          }
        }
        function ieVersion()
        {
          var rv = -1;
          if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null){
              rv = parseFloat(RegExp.$1);
            }
          }
          switch (true) {
            case (rv >= 8.0):
              return false;
              break;
            case (rv > -1):
              return true;
              break;
            default:
              return false;
              break;
          }
        }
    }
  });
})(jQuery);

(function($) {
  $.fn.phraseCutter = function(options) {// Show or Hide Words.
    var defaults = {
      startNum: 0,
      endNum: 0,
      colorSelected: 'blue',
      FWSelected: 'bold' // Font Weight Selected
    }
      var o = $.extend(defaults, options);
    if (o.startNum < o.endNum){
    $(this).css("cursor","pointer");
      var tStr = $(this).text();
      var fRes = tStr.substr(o.startNum, (o.endNum - o.startNum));
      if ((o.startNum != 0) && (o.endNum < tStr.length)) {
        var fRes = "... " + fRes + " ...";
      } else if (o.startNum != 0) {
        var fRes = "... " + fRes;
      } else if (o.endNum < tStr.length) {
        var fRes = fRes + " ...";
      }
      $(this).text(fRes);
      $(this).click(function() {
        if ($(this).attr("rel") != "fullText") {
          $(this).css("display", "none").html(tStr.substr(0, o.startNum) + "<span style='color:" + o.colorSelected + "; font-weight:" + o.FWSelected + "'> " + tStr.substr(o.startNum, (o.endNum - o.startNum)) + " </span>" + tStr.substr(o.endNum));
          $(this).fadeIn("slow");
          $(this).attr("rel", "fullText");
        }
      });
  };
  };
})(jQuery);


if ($(".photoT3Box").length >0)
        $(".photoT3Box h3 img").lazyload({
            threshold : 210
        });

$(document).ready(function() {

  //News Ticker
    $(function () {
	$('#topticker').vTicker({
		speed: 600,
		pause: 4500,
		mousePause: true,
		showItems: 1
	    });
    });

  //breakingticker
    $(function () {
	$('#breakingticker').vTicker({
		speed: 600,
		pause: 4500,
		mousePause: true,
		showItems: 1
	});
    });

  //Menu Navigation
  //$(".menu-inner a.menu-homepage").mouseover();
  $(".menu-inner a").mouseover(function() {
    $("#divO").css({left:$(this).position().left, width:$(this).width() + 5});
    var tmpHref=$(this).attr("href");
    //alert(tmpHref);
    //$("#divO").attr("href",tmpHref);
    $("#divO").click(function(){location.href=tmpHref;});
/*
    var currDivOPos = $("#divO").position().left;
    if (currDivOPos < 500)
//      $("#submenu").css("margin-left", ($("#submenu ul[style='display: inline;']").width() / 2) + currDivOPos -125).css("float","left");
    $("#submenu").css("float","left");
    else
      //$("#submenu").css("margin-left", 0).css("float","right");
*/
    currClassName= $(this).attr("class");
    var _pos=0;
    var _bgPos=-473;
    if (currClassName=="menu-videos"){
      _pos=130;
	  _bgPos=-322;
	}else if (currClassName=="menu-audios"){
      _pos=130;
	  _bgPos=-344;
	}else if (currClassName=="menu-photos"){
      _pos=-20;
	  _bgPos=-377;
	}else if (currClassName=="menu-book"){
      _pos=60;
	  _bgPos=-409;
	}else if (currClassName=="menu-keywords"){
    _pos=335;
  _bgPos=-131;
}else if (currClassName=="menu-yad"){
    _pos=289;
  _bgPos=-158;
}else if (currClassName=="menu-memories"){
    _pos=295;
  _bgPos=-158;
}else if (currClassName=="menu-hadith"){
    _pos=245;
  _bgPos=-203;
}else if (currClassName=="menu-kharej"){
    _pos=195;
  _bgPos=-269;
}else if (currClassName=="menu-treatise"){
    _pos=130;
  _bgPos=-314;
}else if (currClassName=="menu-speeches"){
    _pos=-20
    ;
  _bgPos=-365;
}else if (currClassName=="menu-biography"){
    _pos=60;
  _bgPos=-402;
}else if (currClassName=="menu-news"){
	  _bgPos=-448;
	}else if (currClassName=="menu-homepage"){
	  _bgPos=-473;
	}

    $("#divO").css({"background-position":_bgPos+"px -43px"})
      $("#submenu").stop().animate({"right":_pos},100);


    $("#submenu .submenu-inner ul").css("display", "none");
    $("#submenu .submenu-inner ul[rel='" + $(this).attr("class") + "']").show();
  });

  //Search Box
  var searchContainer = $('#search');
  var searchBoxInput = $('.header-search-form .header-search-input');
  var searchBoxDefault = 'جستجو...';
  searchBoxInput.attr("value", searchBoxDefault);

  searchBoxInput.focus(function (e) {
    searchContainer.addClass("active");
  });
  searchBoxInput.blur(function (e) {
    searchContainer.removeClass("active");
  });

  searchBoxInput.focus(function () {
    if ($(this).val() == searchBoxDefault) $(this).attr("value", "");
    $(this).animate({width: '257px'}, 500);
  });
  searchBoxInput.blur(function () {
    if ($(this).val() == "") $(this).attr("value", searchBoxDefault);
    $(this).animate({
          width: '115px'
        }, 500);
  });

  $("input.header-search-button").click(function() {
    if ($("input.header-search-input").val() == searchBoxDefault) location.href = '/search'; else location.href = '/search-result?q=' + decodeURIComponent($("input.header-search-input").val())+'&nt=99,101,2,4,9,1,16,';
  });
  $("input.header-search-input").keypress(function(e) {
    var lkp = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if (e.keyCode == 13) {
      $("input.header-search-button").click();
    }
  });

  $("input.footer-search-button").click(function() {
    if ($("input.footer-search-input").val() == "") $("input.footer-search-input").focus(); else location.href = '/search-result?q=' + decodeURIComponent($("input.footer-search-input").val())+'&nt=99,101,2,4,9,1,16,';
  });
  $("input.footer-search-input").keypress(function(e) {
    var lkp = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if (e.keyCode == 13) {
      $("input.footer-search-button").click();
    }
  });

    $("input#BtnDoSrh").click(function() {
      if ($("input#others-search").val() == "") $("input#others-search").focus(); else location.href = '/search-result?q=' + decodeURIComponent($("input#others-search").val())+'&nt=99,101,2,4,9,1,16,';
    });
    $("input#others-search").keypress(function(e) {
      var lkp = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
      if (e.keyCode == 13) {
        $("input#BtnDoSrh").click();
      }
    });

    function DoMainSearch(e) {var __kp;if(window.event) __kp = e.keyCode; else if(e.which) __kp = e.which;if (__kp==13) document.getElementById('BtnDoSrh').click();};

  $('.showTooltip').tinyTips('title');
  $("img[src*='li_star_']").attr('alt','*');
  
  $(window).scroll(function(){
	  var _windowHeight = $(window).height();
	  var _scrollTop = $(window).scrollTop();
	  if(_scrollTop>(_windowHeight/2)){
			$('#scroll-top').addClass('show');  
	  }else{
			$('#scroll-top').removeClass('show');  		  
	  }
  });
  $('#scroll-top').click(function(){
	  $("html,body").stop().animate({scrollTop:0},600);
  });


    /*if comment box shown on left side box, must be height-fixed*/
    if ($("#newsContentLeftSide .comment-box").length >0)
        $('#newsContentLeftSide').stickyMojo({footerID: '#footersitemap', contentID: '#newsContentInnerSide'});

    if ($(".pnum").length >0)
        replacePersianDigits(".pnum");
	
	
	
	// breaking news by M.T.
	var _stoBrk = null;
	var _stoBrkCh = null;
	function breakingNews(_li_path,_timeOut){
		_stoBrk = setTimeout(function(){
			clearTimeout(_stoBrk);
			var _li = $(_li_path);
			var _li_f = _li.eq(0);
			var _ul = _li.parent('ul');
			var _count_anim = parseInt(_ul.attr('rel'))+1;
			var _li_length = _li.length;
			if(_count_anim<_li_length){
				var _new_pos = -(_count_anim*_ul.height());
				_li_f.stop(false,true).animate({'margin-top':_new_pos+'px'},300,function(){
					_ul.attr('rel',_count_anim);
					breakingNews(_li_path,3000);
				});
			}else{
				_li_f.stop(false,true).css({'margin-top':'0px'});
				_ul.attr('rel',0);
				breakingNews(_li_path,0);
			}
		},_timeOut);
	}
	
	function getTimeRand(){
		var d = new Date();
		var n = d.getTime(); 
		return n;
	}
	/*
	function addBreakingNews(){
		if($('.breaking-news-wrapper').length===0){
			$.getJSON('http://185.159.154.24/breaking-news/update.json?t='+getTimeRand(),function(_json){
				var _li_path = '.breaking-news-wrapper .bn-stage ul li';
				var _html = _json.html;
				$('#wrapper').append(_html);
				breakingNews(_li_path,3000);
				$('.breaking-news-wrapper .bn-close').remove();
				$('#footerCP').css('padding-bottom','70px');
			});
		}
	}
	
	function removeBreakingNews(){
		$('#wrapper .breaking-news-wrapper').remove();
		clearTimeout(_stoBrk);
		$('#footerCP').css('padding-bottom','0');
	}
	
	function checkBreakingNews(){
		_stoBrkCh = setTimeout(function(){
			clearTimeout(_stoBrkCh);
			$.getJSON('http://185.159.154.24/breaking-news/check.json?t='+getTimeRand(),function(_json){
				//console.log(_json.html);
				if(parseInt(_json.active)===1){
					addBreakingNews();
				}else{
					removeBreakingNews();
				}
				checkBreakingNews();
			});
		},10000);
	}
	*/
	function setCookie(_name, _value, _exp) {
		var d = new Date();
		d.setTime(d.getTime() + (_exp * 24 * 60 * 60 * 1000));
		var _expires = "expires="+d.toUTCString();
		document.cookie = _name + "=" + _value + ";" + _expires + ";path=/";
	}

	function getCookie(_name) {
		var name = _name + "=";
		var ca = document.cookie.split(';');
		console.log(ca);
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	if($('.breaking-news-wrapper').length===1 && $('.breaking-news-wrapper .bn-stage ul li').length>0){
		var bnClosed = getCookie('bnClosed');
		if(bnClosed !== ''){
			$('#footerCP').css('padding-bottom','0');
			$('.breaking-news-wrapper').addClass('closed');
		}else{
			var _li_path = '.breaking-news-wrapper .bn-stage ul li';
			if($(_li_path).length>1){
				var _first_html = $(_li_path).eq(0).html();
				var _parent = $(_li_path).parent('ul');
				var _new_li = $('<li>').html(_first_html).appendTo(_parent);
				_parent.attr('rel',0);

				breakingNews(_li_path,3000);
			}
			$('#footerCP').css('padding-bottom','70px');
		}
		
		
	}else{
		
	}
	//checkBreakingNews();
	
	
	$('.breaking-news-wrapper .bn-close').hide();
	/*
	$('.breaking-news-wrapper .bn-close').click(function(){
		var _parent = $(this).parent();
		_parent.addClass('closed');
		setCookie('bnClosed', 'true', 1);
	})
	*/
	//
	$('.toggle-menu-stage button.toggle-button').click(function(){
		var _parent = $('.toggle-menu-stage');
		if(_parent.hasClass('actived')){
			_parent.removeClass('actived');
			$('body').removeClass('actived-toggle-menu');
		}else{
			_parent.addClass('actived');
			$('body').addClass('actived-toggle-menu');
		}
	});
	
	$('.toggle-menu-stage .toggle-menu-main li.has-submenu>a').click(function(){
		if($(this).parent('li').hasClass('openned')){
			$(this).parent('li').removeClass('openned');
		}else{
			$(this).parent('li').addClass('openned');
		}
	});
		

});

