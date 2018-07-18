var map,infoWindow,markersData=[{lat:47.785054,lng:35.212481,name:"УютБудСервис",address:"г. Запорожье, ул. Паромонова, 4"}];function initMap(){var e={center:new google.maps.LatLng(47.785054,35.212481),zoom:16};map=new google.maps.Map(document.getElementById("map"),e),infoWindow=new google.maps.InfoWindow,google.maps.event.addListener(map,"click",function(){infoWindow.close()});new google.maps.LatLngBounds;for(var o=0;o<markersData.length;o++){addMarker(new google.maps.LatLng(markersData[o].lat,markersData[o].lng),markersData[o].name,markersData[o].address)}}function addMarker(e,o,n){var a=new google.maps.Marker({position:e,map:map,title:o,icon:{url:"img/pointer.png",scaledSize:new google.maps.Size(54,60)}});google.maps.event.addListener(a,"click",function(){var e='<div class="infowindow"><h3>'+o+"</h3><p>"+n+"</p></div>";infoWindow.setContent(e),infoWindow.open(map,a)})}$(document).ready(function(){$('a[href^="#"]').bind("click.smoothscroll",function(e){e.preventDefault();var o=this.hash,n=$(o);$("html, body").stop().animate({scrollTop:n.offset().top},900,"swing",function(){window.location.hash=o})}),$("._btn").click(function(){$("._partner,._overlay").fadeIn(400)}),$("._close,._overlay").click(function(){$("._partner,._overlay").fadeOut(400)}),$("._btn1").click(function(){$("._partner1,._overlay").fadeIn(400)}),$("._close1,._overlay").click(function(){$("._partner1,._overlay").fadeOut(400)}),$("._btn2").click(function(){$("._partner2,._overlay").fadeIn(400)}),$("._close2,._overlay").click(function(){$("._partner2,._overlay").fadeOut(400)}),$("._btn4").click(function(){$("._partner4,._overlay1").fadeIn(400)}),$("._close4,._overlay1").click(function(){$("._partner4,._overlay1").fadeOut(400)}),$("._btn5").click(function(){$("._partner5,._overlay1").fadeIn(400)}),$("._close5,._overlay1").click(function(){$("._partner5,._overlay1").fadeOut(400)}),$("._btn6").click(function(){$("._partner6,._overlay1").fadeIn(400)}),$("._close6,._overlay1").click(function(){$("._partner6,._overlay1").fadeOut(400)}),$("._btn7").click(function(){$("._partner7,._overlay1").fadeIn(400)}),$("._close7,._overlay1").click(function(){$("._partner7,._overlay1").fadeOut(400)}),$(".responsive").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1240,settings:{slidesToShow:3,slidesToScroll:1,centerMode:!1,initialSlide:0}},{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:1,centerMode:!1,initialSlide:0}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,initialSlide:0}}]}),$(window).scroll(function(){0<$(this).scrollTop()?$("#_toTop").fadeIn():$("#_toTop").fadeOut()}),$("#_toTop").click(function(){return $("body,html").animate({scrollTop:0},900),!1}),$(window).scroll(function(){50<$(window).scrollTop()?$(".js-callback").removeClass(".callback_none").addClass("callback"):$(".js-callback").removeClass("callback").addClass("callback_none")});var o=function(){var n=$(window).scrollTop()+$(window).height(),e=$(".animatable");0==e.size()&&$(window).off("scroll",o),e.each(function(e){var o=$(this);o.offset().top+o.height()-20<n&&o.removeClass("animatable").addClass("animated")})};$(window).on("scroll",o),$(window).trigger("scroll");var n=$(".grid").isotope({itemSelector:".grid-item",masonry:{columnWidth:".grid-item",isFitWidth:!0,gutter:20,percentPosition:!0}}),a={numberGreaterThan50:function(){var e=$(this).find(".number").text();return 50<parseInt(e,10)}};$(".filters-select").on("change",function(){var e=this.value;e=a[e]||e,n.isotope({filter:e})}),$(document).on("click",'[data-toggle="lightbox"]',function(e){e.preventDefault(),$(this).ekkoLightbox()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWFwIiwiaW5mb1dpbmRvdyIsIm1hcmtlcnNEYXRhIiwibGF0IiwibG5nIiwibmFtZSIsImFkZHJlc3MiLCJpbml0TWFwIiwibWFwT3B0aW9ucyIsImNlbnRlciIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmciLCJ6b29tIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkluZm9XaW5kb3ciLCJldmVudCIsImFkZExpc3RlbmVyIiwiY2xvc2UiLCJMYXRMbmdCb3VuZHMiLCJpIiwibGVuZ3RoIiwiYWRkTWFya2VyIiwibGF0TG5nIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsImljb24iLCJ1cmwiLCJzY2FsZWRTaXplIiwiU2l6ZSIsImNvbnRlbnRTdHJpbmciLCJzZXRDb250ZW50Iiwib3BlbiIsIiQiLCJyZWFkeSIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ0aGlzIiwiaGFzaCIsIiR0YXJnZXQiLCJzdG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiY2xpY2siLCJmYWRlSW4iLCJmYWRlT3V0Iiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjZW50ZXJNb2RlIiwiaW5pdGlhbFNsaWRlIiwic2Nyb2xsIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImRvQW5pbWF0aW9ucyIsImhlaWdodCIsIiRhbmltYXRhYmxlcyIsInNpemUiLCJvZmYiLCJlYWNoIiwiJGFuaW1hdGFibGUiLCJvbiIsInRyaWdnZXIiLCIkZ3JpZCIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJtYXNvbnJ5IiwiY29sdW1uV2lkdGgiLCJpc0ZpdFdpZHRoIiwiZ3V0dGVyIiwicGVyY2VudFBvc2l0aW9uIiwiZmlsdGVyRm5zIiwibnVtYmVyR3JlYXRlclRoYW41MCIsIm51bWJlciIsImZpbmQiLCJ0ZXh0IiwicGFyc2VJbnQiLCJmaWx0ZXJWYWx1ZSIsInZhbHVlIiwiZmlsdGVyIiwiZWtrb0xpZ2h0Ym94Il0sIm1hcHBpbmdzIjoiQUFDQSxJQVNJQSxJQUFLQyxXQVRMQyxZQUFjLENBQ2QsQ0FDSUMsSUFBSyxVQUNMQyxJQUFLLFVBQ0xDLEtBQU0sZUFDTkMsUUFBUSxvQ0FLaEIsU0FBU0MsVUFDTCxJQUNJQyxFQUFhLENBQ2JDLE9BRmUsSUFBSUMsT0FBT0MsS0FBS0MsT0FBTyxVQUFXLFdBR2pEQyxLQUFNLElBRVZiLElBQU0sSUFBSVUsT0FBT0MsS0FBS0csSUFBSUMsU0FBU0MsZUFBZSxPQUFRUixHQUMxRFAsV0FBYSxJQUFJUyxPQUFPQyxLQUFLTSxXQUM3QlAsT0FBT0MsS0FBS08sTUFBTUMsWUFBWW5CLElBQUssUUFBUyxXQUN4Q0MsV0FBV21CLFVBR0YsSUFBSVYsT0FBT0MsS0FBS1UsYUFDN0IsSUFEQSxJQUNTQyxFQUFJLEVBQUdBLEVBQUlwQixZQUFZcUIsT0FBUUQsSUFBSSxDQUl4Q0UsVUFIYSxJQUFJZCxPQUFPQyxLQUFLQyxPQUFPVixZQUFZb0IsR0FBR25CLElBQUtELFlBQVlvQixHQUFHbEIsS0FDNURGLFlBQVlvQixHQUFHakIsS0FDWkgsWUFBWW9CLEdBQUdoQixVQVNyQyxTQUFTa0IsVUFBVUMsRUFBUXBCLEVBQU1DLEdBQzdCLElBQUlvQixFQUFTLElBQUloQixPQUFPQyxLQUFLZ0IsT0FBTyxDQUNoQ0MsU0FBVUgsRUFDVnpCLElBQUtBLElBQ0w2QixNQUFPeEIsRUFDUHlCLEtBQU0sQ0FDRkMsSUFBSyxrQkFDTEMsV0FBWSxJQUFJdEIsT0FBT0MsS0FBS3NCLEtBQUssR0FBSSxPQUc3Q3ZCLE9BQU9DLEtBQUtPLE1BQU1DLFlBQVlPLEVBQVEsUUFBUyxXQUMzQyxJQUFJUSxFQUFnQiwrQkFDUDdC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MUIsSUFBSXdELEVBQWN6QyxFQUFFTSxNQUNmbUMsRUFBWTdCLFNBQVNDLElBQU00QixFQUFZTCxTQUFXLEdBQU14QixHQUM1RDZCLEVBQVlSLFlBQVksY0FBY0MsU0FBUyxlQU1sRGxDLEVBQUVjLFFBQVE0QixHQUFHLFNBQVVQLEdBQ3ZCbkMsRUFBRWMsUUFBUTZCLFFBQVEsVUFLZixJQUFJQyxFQUFRNUMsRUFBRSxTQUFTNkMsUUFBUSxDQUUzQkMsYUFBYyxhQUVkQyxRQUFTLENBQ0xDLFlBQWEsYUFDYkMsWUFBWSxFQUNaQyxPQUFRLEdBQ1JDLGlCQUFpQixLQUtyQkMsRUFBWSxDQUVaQyxvQkFBcUIsV0FDakIsSUFBSUMsRUFBU3RELEVBQUVNLE1BQU1pRCxLQUFLLFdBQVdDLE9BQ3JDLE9BQThCLEdBQXZCQyxTQUFTSCxFQUFRLE1BSWhDdEQsRUFBRSxtQkFBbUIwQyxHQUFJLFNBQVUsV0FFL0IsSUFBSWdCLEVBQWNwRCxLQUFLcUQsTUFFdkJELEVBQWNOLEVBQVdNLElBQWlCQSxFQUMxQ2QsRUFBTUMsUUFBUSxDQUFFZSxPQUFRRixNQWlCNUIxRCxFQUFFdEIsVUFBVWdFLEdBQUcsUUFBUywyQkFBNEIsU0FBUzdELEdBQ3pEQSxFQUFNdUIsaUJBQ05KLEVBQUVNLE1BQU11RCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0gTUFQXHJcbnZhciBtYXJrZXJzRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBsYXQ6IDQ3Ljc4NTA1NCwgICAgIC8vINCo0LjRgNC+0YLQsFxyXG4gICAgICAgIGxuZzogMzUuMjEyNDgxLCAgICAvLyDQlNC+0LvQs9C+0YLQsFxyXG4gICAgICAgIG5hbWU6IFwi0KPRjtGC0JHRg9C00KHQtdGA0LLQuNGBXCIsIC8vINCf0YDQvtC40LfQstC+0LvRjNC90L7QtSDQvdCw0LfQstCw0L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INCy0YvQstC+0LTQuNGC0Ywg0LIg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90L7QvCDQvtC60L3QtVxyXG4gICAgICAgIGFkZHJlc3M6XCLQsy4g0JfQsNC/0L7RgNC+0LbRjNC1LCDRg9C7LiDQn9Cw0YDQvtC80L7QvdC+0LLQsCwgNFwiICAgLy8g0JDQtNGA0LXRgSwg0LrQvtGC0L7RgNGL0Lkg0YLQsNC60LbQtSDQsdGD0LTQtdC8INCy0YvQstC+0LTQuNGC0Ywg0LIg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90L7QvCDQvtC60L3QtVxyXG4gICAgfVxyXG5dO1xyXG5cclxudmFyIG1hcCwgaW5mb1dpbmRvdztcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIHZhciBjZW50ZXJMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ3Ljc4NTA1NCwgMzUuMjEyNDgxKTtcclxuICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgIGNlbnRlcjogY2VudGVyTGF0TG5nLFxyXG4gICAgICAgIHpvb206IDE2XHJcbiAgICB9O1xyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIG1hcE9wdGlvbnMpO1xyXG4gICAgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5mb1dpbmRvdy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCDQs9GA0LDQvdC40YbRiyDQstC40LTQuNC80L7QuSDQvtCx0LvQsNGB0YLQuCDQutCw0YDRgtGLINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQv9C+0LvQvtC20LXQvdC40LXQvCDQvNCw0YDQutC10YDQvtCyXHJcbiAgICB2YXIgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzRGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdmFyIGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobWFya2Vyc0RhdGFbaV0ubGF0LCBtYXJrZXJzRGF0YVtpXS5sbmcpO1xyXG4gICAgICAgIHZhciBuYW1lID0gbWFya2Vyc0RhdGFbaV0ubmFtZTtcclxuICAgICAgICB2YXIgYWRkcmVzcyA9IG1hcmtlcnNEYXRhW2ldLmFkZHJlc3M7XHJcbiAgICAgICAgYWRkTWFya2VyKGxhdExuZywgbmFtZSwgYWRkcmVzcyk7XHJcbiAgICAgICAgLy8g0KDQsNGB0YjQuNGA0Y/QtdC8INCz0YDQsNC90LjRhtGLINC90LDRiNC10Lkg0LLQuNC00LjQvNC+0Lkg0L7QsdC70LDRgdGC0LgsINC00L7QsdCw0LLQuNCyINC60L7QvtGA0LTQuNC90LDRgtGLINC90LDRiNC10LPQviDRgtC10LrRg9GJ0LXQs9C+INC80LDRgNC60LXRgNCwXHJcbiAgICAgICAgLy8gYm91bmRzLmV4dGVuZChsYXRMbmcpO1xyXG4gICAgfVxyXG4gICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LzQsNGB0YjRgtCw0LHQuNGA0YPQtdC8INC60LDRgNGC0YMg0YLQsNC6LCDRh9GC0L7QsdGLINCy0YHQtSDQvNCw0YDQutC10YDRiyDQsdGL0LvQuCDQsiDQstC40LTQuNC80L7QuSDQvtCx0LvQsNGB0YLQuCDQutCw0YDRgtGLXHJcbiAgICAvLyBtYXAuZml0Qm91bmRzKGJvdW5kcyk7XHJcbn1cclxuLy8gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCBcImxvYWRcIiwgaW5pdE1hcCk7XHJcbmZ1bmN0aW9uIGFkZE1hcmtlcihsYXRMbmcsIG5hbWUsIGFkZHJlc3MpIHtcclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogbGF0TG5nLFxyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgIHRpdGxlOiBuYW1lLFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgdXJsOiBcImltZy9wb2ludGVyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg1NCwgNjApXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb250ZW50U3RyaW5nID0gJzxkaXYgY2xhc3M9XCJpbmZvd2luZG93XCI+JyArXHJcbiAgICAgICAgICAgICc8aDM+JyArIG5hbWUgKyAnPC9oMz4nICtcclxuICAgICAgICAgICAgJzxwPicgKyBhZGRyZXNzICsgJzwvcD4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGNvbnRlbnRTdHJpbmcpO1xyXG4gICAgICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAtLS0tLS0tLS0gc2Nyb2xsIGRvd25cclxuXHQkKCdhW2hyZWZePVwiI1wiXScpLmJpbmQoJ2NsaWNrLnNtb290aHNjcm9sbCcsZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR2YXIgdGFyZ2V0ID0gdGhpcy5oYXNoLFxyXG5cdFx0JHRhcmdldCA9ICQodGFyZ2V0KTtcclxuXHJcblx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdCAgICAnc2Nyb2xsVG9wJzogJHRhcmdldC5vZmZzZXQoKS50b3BcclxuXHRcdH0sIDkwMCwgJ3N3aW5nJywgZnVuY3Rpb24gKCkge1xyXG5cdCAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcclxuXHQgXHR9KTtcclxuXHR9KTtcclxuXHJcbi8vXHQtLS0tLS1QT1AgVVBcclxuICAgICQoJy5fYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXIsLl9vdmVybGF5JykuZmFkZUluKDQwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5fY2xvc2UsLl9vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXIsLl9vdmVybGF5JykuZmFkZU91dCg0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLl9idG4xJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXIxLC5fb3ZlcmxheScpLmZhZGVJbig0MDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuX2Nsb3NlMSwuX292ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5fcGFydG5lcjEsLl9vdmVybGF5JykuZmFkZU91dCg0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLl9idG4yJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXIyLC5fb3ZlcmxheScpLmZhZGVJbig0MDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuX2Nsb3NlMiwuX292ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5fcGFydG5lcjIsLl9vdmVybGF5JykuZmFkZU91dCg0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLl9idG40JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXI0LC5fb3ZlcmxheTEnKS5mYWRlSW4oNDAwKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLl9jbG9zZTQsLl9vdmVybGF5MScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLl9wYXJ0bmVyNCwuX292ZXJsYXkxJykuZmFkZU91dCg0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLl9idG41JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXI1LC5fb3ZlcmxheTEnKS5mYWRlSW4oNDAwKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLl9jbG9zZTUsLl9vdmVybGF5MScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLl9wYXJ0bmVyNSwuX292ZXJsYXkxJykuZmFkZU91dCg0MDApO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuX2J0bjYnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5fcGFydG5lcjYsLl9vdmVybGF5MScpLmZhZGVJbig0MDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuX2Nsb3NlNiwuX292ZXJsYXkxJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuX3BhcnRuZXI2LC5fb3ZlcmxheTEnKS5mYWRlT3V0KDQwMCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5fYnRuNycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLl9wYXJ0bmVyNywuX292ZXJsYXkxJykuZmFkZUluKDQwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5fY2xvc2U3LC5fb3ZlcmxheTEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5fcGFydG5lcjcsLl9vdmVybGF5MScpLmZhZGVPdXQoNDAwKTtcclxuICAgIH0pXHJcbi8vIC0tLS0tLS0tLS0tLSBTTElERVJcclxuICAgICQoJy5yZXNwb25zaXZlJykuc2xpY2soe1xyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tIHNjcm9sbCB1cFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICQoJyNfdG9Ub3AnKS5mYWRlSW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjX3RvVG9wJykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnI190b1RvcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgOTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0NBTExcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZihoZWlnaHQgPiA1MCl7XHJcbiAgICAgICAgICAgICQoJy5qcy1jYWxsYmFjaycpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJy5jYWxsYmFja19ub25lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY2FsbGJhY2snKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICQoJy5qcy1jYWxsYmFjaycpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NhbGxiYWNrJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY2FsbGJhY2tfbm9uZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgLy8gQU5JTUFUSU9OXHJcblx0dmFyIGRvQW5pbWF0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdCRhbmltYXRhYmxlcyA9ICQoJy5hbmltYXRhYmxlJyk7XHJcblxyXG5cdFx0aWYgKCRhbmltYXRhYmxlcy5zaXplKCkgPT0gMCkge1xyXG5cdFx0XHQkKHdpbmRvdykub2ZmKCdzY3JvbGwnLCBkb0FuaW1hdGlvbnMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRhbmltYXRhYmxlcy5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0dmFyICRhbmltYXRhYmxlID0gJCh0aGlzKTtcclxuXHRcdFx0aWYgKCgkYW5pbWF0YWJsZS5vZmZzZXQoKS50b3AgKyAkYW5pbWF0YWJsZS5oZWlnaHQoKSAtIDIwKSA8IG9mZnNldCkge1xyXG5cdFx0XHRcdCRhbmltYXRhYmxlLnJlbW92ZUNsYXNzKCdhbmltYXRhYmxlJykuYWRkQ2xhc3MoJ2FuaW1hdGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGRvQW5pbWF0aW9ucyk7XHJcblx0JCh3aW5kb3cpLnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG5cclxuXHJcbiAgICAvLyoqKklTT1RPUEUqKipcclxuXHJcbiAgICB2YXIgJGdyaWQgPSAkKCcuZ3JpZCcpLmlzb3RvcGUoe1xyXG4gICAgICAgIC8vIG1haW4gaXNvdG9wZSBvcHRpb25zXHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgICAgICAgLy8gc2V0IGxheW91dE1vZGVcclxuICAgICAgICBtYXNvbnJ5OiB7XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtaXRlbScsXHJcbiAgICAgICAgICAgIGlzRml0V2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGd1dHRlcjogMjAsXHJcbiAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHZhciBmaWx0ZXJGbnMgPSB7XHJcbiAgICAgICAgLy8gc2hvdyBpZiBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDUwXHJcbiAgICAgICAgbnVtYmVyR3JlYXRlclRoYW41MDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gJCh0aGlzKS5maW5kKCcubnVtYmVyJykudGV4dCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtYmVyLCAxMCkgPiA1MDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4vLyBiaW5kIGZpbHRlciBvbiBzZWxlY3QgY2hhbmdlXHJcbiAgICAkKCcuZmlsdGVycy1zZWxlY3QnKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGdldCBmaWx0ZXIgdmFsdWUgZnJvbSBvcHRpb24gdmFsdWVcclxuICAgICAgICB2YXIgZmlsdGVyVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIC8vIHVzZSBmaWx0ZXJGbiBpZiBtYXRjaGVzIHZhbHVlXHJcbiAgICAgICAgZmlsdGVyVmFsdWUgPSBmaWx0ZXJGbnNbIGZpbHRlclZhbHVlIF0gfHwgZmlsdGVyVmFsdWU7XHJcbiAgICAgICAgJGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XHJcbiAgICB9KTtcclxuXHJcbi8vIC8vIGZpbHRlciBpdGVtcyBvbiBidXR0b24gY2xpY2tcclxuLy8gICAgICQoJy5maWx0ZXItYnV0dG9uLWdyb3VwJykub24oICdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICB2YXIgZmlsdGVyVmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcbi8vICAgICAgICAgJGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XHJcbi8vICAgICB9KTtcclxuLy9cclxuLy8gLy8gY2hhbmdlIGlzLWNoZWNrZWQgY2xhc3Mgb24gYnV0dG9uc1xyXG4vLyAgICAgJCgnLmJ0bi1ncm91cCcpLmVhY2goIGZ1bmN0aW9uKCBpLCBidXR0b25Hcm91cCApIHtcclxuLy8gICAgICAgICB2YXIgJGJ1dHRvbkdyb3VwID0gJCggYnV0dG9uR3JvdXAgKTtcclxuLy8gICAgICAgICAkYnV0dG9uR3JvdXAub24oICdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgJGJ1dHRvbkdyb3VwLmZpbmQoJy5pcy1jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcclxuLy8gICAgICAgICAgICAgJCggdGhpcyApLmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJsaWdodGJveFwiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmVra29MaWdodGJveCgpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSB7XHJcbi8vICAgICB2YXIgYm9keSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlUYWdOYW1lKFwiYm9keVwiKSlbMF07XHJcbi8vICAgICBib2R5LmNsYXNzTmFtZSA9IFwibW9iaWxlXCI7XHJcbi8vIH0iXX0=
