!function(a){function b(){var b,c=a(".subnav");a(document).on("click",".subnav-toggle",function(d){d.preventDefault(),b=a(this),a(".subnav-toggle").each(function(){a(this).is(b)?(a(".js-regional-header .subnav").removeClass("is-active"),a(this).parent(c).hasClass("is-active")?a(this).parent(c).removeClass("is-active").trigger("subnavClosed"):a(this).parent(c).addClass("is-active")):a(this).parent(c).hasClass("is-active")&&a(this).parent(c).removeClass("is-active").trigger("subnavClosed")})}),a(".priority-nav").length&&priorityClone()}function c(b){b.preventDefault();var c=a(this).parent(".menu").attr("data-menu-group");if(c){var d=a('.menu[data-menu-group="'+c+'"]'),e=a(this).parent(".menu");d.each(function(){a(this).is(e)?a(this).toggleClass("is-active"):a(this).removeClass("is-active")})}else a(this).parent(".menu").toggleClass("is-active")}function d(b){var d=a(".menu .menu-toggle");a(b).length&&(d=a(b)),a(d).length&&d.on("click",c)}function e(){var b=(a(".menu"),a(".menu-toggle"));a(document).on("click",function(c){var d=a(c.target);a(c.target).closest(".subnav").length||a(".subnav-toggle").each(function(){a(this).parent(".subnav").hasClass("is-active")&&a(this).parent(".subnav").removeClass("is-active").trigger("subnavClosed")}),0===d.closest(".menu").length&&!d.hasClass("select2-selection__choice__remove")&&b.each(function(){var b=a(this).parent(".menu");b.hasClass("is-active")&&b.removeClass("is-active").trigger("menuClosed")})})}var f=function(){window.getScrollBarWidth=function(){var a=document.createElement("p");a.style.width="100%",a.style.height="200px";var b=document.createElement("div");b.style.position="absolute",b.style.top="0px",b.style.left="0px",b.style.visibility="hidden",b.style.width="200px",b.style.height="150px",b.style.overflow="hidden",b.appendChild(a),document.body.appendChild(b);var c=a.offsetWidth;b.style.overflow="scroll";var d=a.offsetWidth;return c===d&&(d=b.clientWidth),document.body.removeChild(b),c-d},window.scrollbarWidth=window.getScrollBarWidth(),window.currentViewportWidth=document.documentElement.clientWidth+scrollbarWidth,window.breakSmall=503,window.breakMedium=686,window.breakLarge=1012,window.breakExtra=1220};window.priorityVisibility=function(){var b=a(".priority-origin > .priority-item"),c=a(".priority-nav > .priority-item"),d=a(".priority-parent"),e="is-hidden";b.each(function(){window.currentViewportWidth>=a(this).attr("data-reveal-at")?a(this).addClass(e):a(this).removeClass(e)}),c.each(function(){window.currentViewportWidth<a(this).attr("data-reveal-at")?a(this).addClass(e):a(this).removeClass(e)}),d.each(function(){0===a(this).find(".priority-origin > li:not(.is-hidden)").length?a(this).addClass(e):a(this).removeClass(e)})},window.priorityClone=function(){var b,c,d,e=a(".priority-nav"),f="";e.each(function(){for(b=a(this).find(a(".priority-origin > .priority-item")),c=0,d="",c;c<b.length;c++)a(b[c]).is("[data-cloned-group]")?(""!=d&&d!=a(b[c]).attr("data-cloned-group")&&(f+="</ul></div></li>"),d!=a(b[c]).attr("data-cloned-group")&&(f+='<li class="priority-item subnav" data-reveal-at="'+a(b[c]).attr("data-reveal-at")+'"><a href="#" class="subnav-toggle">'+a(b[c]).attr("data-cloned-group")+'</a><div class="subnav-content"><ul class="tertiary-nav">')):""!=d&&(f+="</ul></div></li>"),f+=b[c].outerHTML,d=a(b[c]).is("[data-cloned-group]")?a(b[c]).attr("data-cloned-group"):"";a(this).prepend(f)}),a(".priority-item.subnav li").each(function(){a(this).is(".current")&&a(this).closest(".priority-item.subnav").addClass("current")}),priorityVisibility()};var g=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,h=function(a){var b=!1;void 0!==window.googletag&&googletag.apiReady&&(b=!0),b?f():g(h)};g(h),a(document).ready(function(){b(),e(),d()})}(window.jQuery);