var map,infoWindow,markersData=[{lat:47.785054,lng:35.212481,name:"УютБудСервис",address:"г. Запорожье, ул. Паромонова, 4"}];function initMap(){var o={center:new google.maps.LatLng(47.785054,35.212481),zoom:16};map=new google.maps.Map(document.getElementById("map"),o),infoWindow=new google.maps.InfoWindow,google.maps.event.addListener(map,"click",function(){infoWindow.close()});new google.maps.LatLngBounds;for(var e=0;e<markersData.length;e++){addMarker(new google.maps.LatLng(markersData[e].lat,markersData[e].lng),markersData[e].name,markersData[e].address)}}function addMarker(o,e,a){var n=new google.maps.Marker({position:o,map:map,title:e,icon:{url:"img/pointer.png",scaledSize:new google.maps.Size(54,60)}});google.maps.event.addListener(n,"click",function(){var o='<div class="infowindow"><h3>'+e+"</h3><p>"+a+"</p></div>";infoWindow.setContent(o),infoWindow.open(map,n)})}if($(document).ready(function(){$('a[href^="#"]').bind("click.smoothscroll",function(o){o.preventDefault();var e=this.hash,a=$(e);$("html, body").stop().animate({scrollTop:a.offset().top},900,"swing",function(){window.location.hash=e})}),$(".responsive").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1240,settings:{slidesToShow:3,slidesToScroll:1,centerMode:!1,initialSlide:0}},{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:1,centerMode:!1,initialSlide:0}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,initialSlide:0}}]}),$(window).scroll(function(){0<$(this).scrollTop()?$("#_toTop").fadeIn():$("#_toTop").fadeOut()}),$("#_toTop").click(function(){return $("body,html").animate({scrollTop:0},900),!1}),$(window).scroll(function(){50<$(window).scrollTop()?$(".js-callback").removeClass(".callback_none").addClass("callback"):$(".js-callback").removeClass("callback").addClass("callback_none")});var e=function(){var a=$(window).scrollTop()+$(window).height(),o=$(".animatable");0==o.size()&&$(window).off("scroll",e),o.each(function(o){var e=$(this);e.offset().top+e.height()-20<a&&e.removeClass("animatable").addClass("animated")})};$(window).on("scroll",e),$(window).trigger("scroll")}),window.innerWidth<800){var body=document.getElementByTagName("body")[0];body.className="mobile"}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWFwIiwiaW5mb1dpbmRvdyIsIm1hcmtlcnNEYXRhIiwibGF0IiwibG5nIiwibmFtZSIsImFkZHJlc3MiLCJpbml0TWFwIiwibWFwT3B0aW9ucyIsImNlbnRlciIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmciLCJ6b29tIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkluZm9XaW5kb3ciLCJldmVudCIsImFkZExpc3RlbmVyIiwiY2xvc2UiLCJMYXRMbmdCb3VuZHMiLCJpIiwibGVuZ3RoIiwiYWRkTWFya2VyIiwibGF0TG5nIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsImljb24iLCJ1cmwiLCJzY2FsZWRTaXplIiwiU2l6ZSIsImNvbnRlbnRTdHJpbmciLCJzZXRDb250ZW50Iiwib3BlbiIsIiQiLCJyZWFkeSIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ0aGlzIiwiaGFzaCIsIiR0YXJnZXQiLCJzdG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjZW50ZXJNb2RlIiwiaW5pdGlhbFNsaWRlIiwic2Nyb2xsIiwiZmFkZUluIiwiZmFkZU91dCIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImRvQW5pbWF0aW9ucyIsImhlaWdodCIsIiRhbmltYXRhYmxlcyIsInNpemUiLCJvZmYiLCJlYWNoIiwiJGFuaW1hdGFibGUiLCJvbiIsInRyaWdnZXIiLCJpbm5lcldpZHRoIiwiYm9keSIsImdldEVsZW1lbnRCeVRhZ05hbWUiLCJjbGFzc05hbWUi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TXhCLEdBQzVENkIsRUFBWVIsWUFBWSxjQUFjQyxTQUFTLGVBTWxEbEMsRUFBRWMsUUFBUTRCLEdBQUcsU0FBVVAsR0FDdkJuQyxFQUFFYyxRQUFRNkIsUUFBUSxZQUloQjdCLE9BQU84QixXQUFhLElBQUssQ0FDeEIsSUFBSUMsS0FBUW5FLFNBQVNvRSxvQkFBb0IsUUFBUyxHQUNsREQsS0FBS0UsVUFBWSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0gTUFQXHJcbnZhciBtYXJrZXJzRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBsYXQ6IDQ3Ljc4NTA1NCwgICAgIC8vINCo0LjRgNC+0YLQsFxyXG4gICAgICAgIGxuZzogMzUuMjEyNDgxLCAgICAvLyDQlNC+0LvQs9C+0YLQsFxyXG4gICAgICAgIG5hbWU6IFwi0KPRjtGC0JHRg9C00KHQtdGA0LLQuNGBXCIsIC8vINCf0YDQvtC40LfQstC+0LvRjNC90L7QtSDQvdCw0LfQstCw0L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INCy0YvQstC+0LTQuNGC0Ywg0LIg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90L7QvCDQvtC60L3QtVxyXG4gICAgICAgIGFkZHJlc3M6XCLQsy4g0JfQsNC/0L7RgNC+0LbRjNC1LCDRg9C7LiDQn9Cw0YDQvtC80L7QvdC+0LLQsCwgNFwiICAgLy8g0JDQtNGA0LXRgSwg0LrQvtGC0L7RgNGL0Lkg0YLQsNC60LbQtSDQsdGD0LTQtdC8INCy0YvQstC+0LTQuNGC0Ywg0LIg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90L7QvCDQvtC60L3QtVxyXG4gICAgfVxyXG5dO1xyXG5cclxudmFyIG1hcCwgaW5mb1dpbmRvdztcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIHZhciBjZW50ZXJMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ3Ljc4NTA1NCwgMzUuMjEyNDgxKTtcclxuICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgIGNlbnRlcjogY2VudGVyTGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE2XHJcbiAgICB9O1xyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIG1hcE9wdGlvbnMpO1xyXG4gICAgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5mb1dpbmRvdy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCDQs9GA0LDQvdC40YbRiyDQstC40LTQuNC80L7QuSDQvtCx0LvQsNGB0YLQuCDQutCw0YDRgtGLINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQv9C+0LvQvtC20LXQvdC40LXQvCDQvNCw0YDQutC10YDQvtCyXHJcbiAgICB2YXIgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzRGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdmFyIGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobWFya2Vyc0RhdGFbaV0ubGF0LCBtYXJrZXJzRGF0YVtpXS5sbmcpO1xyXG4gICAgICAgIHZhciBuYW1lID0gbWFya2Vyc0RhdGFbaV0ubmFtZTtcclxuICAgICAgICB2YXIgYWRkcmVzcyA9IG1hcmtlcnNEYXRhW2ldLmFkZHJlc3M7XHJcbiAgICAgICAgYWRkTWFya2VyKGxhdExuZywgbmFtZSwgYWRkcmVzcyk7XHJcbiAgICAgICAgLy8g0KDQsNGB0YjQuNGA0Y/QtdC8INCz0YDQsNC90LjRhtGLINC90LDRiNC10Lkg0LLQuNC00LjQvNC+0Lkg0L7QsdC70LDRgdGC0LgsINC00L7QsdCw0LLQuNCyINC60L7QvtGA0LTQuNC90LDRgtGLINC90LDRiNC10LPQviDRgtC10LrRg9GJ0LXQs9C+INC80LDRgNC60LXRgNCwXHJcbiAgICAgICAgLy8gYm91bmRzLmV4dGVuZChsYXRMbmcpO1xyXG4gICAgfVxyXG4gICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LzQsNGB0YjRgtCw0LHQuNGA0YPQtdC8INC60LDRgNGC0YMg0YLQsNC6LCDRh9GC0L7QsdGLINCy0YHQtSDQvNCw0YDQutC10YDRiyDQsdGL0LvQuCDQsiDQstC40LTQuNC80L7QuSDQvtCx0LvQsNGB0YLQuCDQutCw0YDRgtGLXHJcbiAgICAvLyBtYXAuZml0Qm91bmRzKGJvdW5kcyk7XHJcbn1cclxuLy8gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCBcImxvYWRcIiwgaW5pdE1hcCk7XHJcbmZ1bmN0aW9uIGFkZE1hcmtlcihsYXRMbmcsIG5hbWUsIGFkZHJlc3MpIHtcclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogbGF0TG5nLFxyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHRpdGxlOiBuYW1lLFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgdXJsOiBcImltZy9wb2ludGVyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg1NCwgNjApXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb250ZW50U3RyaW5nID0gJzxkaXYgY2xhc3M9XCJpbmZvd2luZG93XCI+JyArXHJcbiAgICAgICAgICAgICc8aDM+JyArIG5hbWUgKyAnPC9oMz4nICtcclxuICAgICAgICAgICAgJzxwPicgKyBhZGRyZXNzICsgJzwvcD4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGNvbnRlbnRTdHJpbmcpO1xyXG4gICAgICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAtLS0tLS0tLS0gc2Nyb2xsIGRvd25cclxuXHQkKCdhW2hyZWZePVwiI1wiXScpLmJpbmQoJ2NsaWNrLnNtb290aHNjcm9sbCcsZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR2YXIgdGFyZ2V0ID0gdGhpcy5oYXNoLFxyXG5cdFx0JHRhcmdldCA9ICQodGFyZ2V0KTtcclxuXHJcblx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdCAgICAnc2Nyb2xsVG9wJzogJHRhcmdldC5vZmZzZXQoKS50b3BcclxuXHRcdH0sIDkwMCwgJ3N3aW5nJywgZnVuY3Rpb24gKCkge1xyXG5cdCAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcclxuXHQgXHR9KTtcclxuXHR9KTtcclxuXHJcbi8vIFNMSURFUlxyXG4gICAgJCgnLnJlc3BvbnNpdmUnKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI0MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY5LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0gc2Nyb2xsIHVwXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcclxuICAgICAgICAgICAgJCgnI190b1RvcCcpLmZhZGVJbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNfdG9Ub3AnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcjX3RvVG9wJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA5MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ0FMTFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGlmKGhlaWdodCA+IDUwKXtcclxuICAgICAgICAgICAgJCgnLmpzLWNhbGxiYWNrJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnLmNhbGxiYWNrX25vbmUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjYWxsYmFjaycpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgJCgnLmpzLWNhbGxiYWNrJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY2FsbGJhY2snKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjYWxsYmFja19ub25lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAvLyBBTklNQVRJT05cclxuXHR2YXIgZG9BbmltYXRpb25zID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyIG9mZnNldCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0JGFuaW1hdGFibGVzID0gJCgnLmFuaW1hdGFibGUnKTtcclxuXHJcblx0XHRpZiAoJGFuaW1hdGFibGVzLnNpemUoKSA9PSAwKSB7XHJcblx0XHRcdCQod2luZG93KS5vZmYoJ3Njcm9sbCcsIGRvQW5pbWF0aW9ucyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JGFuaW1hdGFibGVzLmVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHR2YXIgJGFuaW1hdGFibGUgPSAkKHRoaXMpO1xyXG5cdFx0XHRpZiAoKCRhbmltYXRhYmxlLm9mZnNldCgpLnRvcCArICRhbmltYXRhYmxlLmhlaWdodCgpIC0gMjApIDwgb2Zmc2V0KSB7XHJcblx0XHRcdFx0JGFuaW1hdGFibGUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGFibGUnKS5hZGRDbGFzcygnYW5pbWF0ZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgZG9BbmltYXRpb25zKTtcclxuXHQkKHdpbmRvdykudHJpZ2dlcignc2Nyb2xsJyk7XHJcblxyXG59KTtcclxuXHJcbmlmKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSB7XHJcbiAgICB2YXIgYm9keSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlUYWdOYW1lKFwiYm9keVwiKSlbMF07XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IFwibW9iaWxlXCI7XHJcbn0iXX0=
