// ----------- MAP

var markersData = [
    {
        lat: 47.785054,     // Широта
        lng: 35.212481,    // Долгота
        name: "УютБудСервис", // Произвольное название, которое будем выводить в информационном окне
        // address:"Новинский бульвар, с1121069"   // Адрес, который также будем выводить в информационном окне
    }
];

var map, infoWindow;
function initMap() {
    var centerLatLng = new google.maps.LatLng(47.785054, 35.212481);
    var mapOptions = {
        center: centerLatLng,
        zoom: 16,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#deb33e"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],
    };
    map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markersData.length; i++){
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        addMarker(latLng, name, address);
        // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        // bounds.extend(latLng);
    }
    // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    // map.fitBounds(bounds);
}
// google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name,
        icon: {
            url: "img/pointer.png",
            // scaledSize: new google.maps.Size(30, 60)
        },
    });
    google.maps.event.addListener(marker, "click", function() {
        var contentString = '<div class="infowindow">' +
            '<h3>' + name + '</h3>' +
            '<p>' + address + '</p>' +
            '</div>';
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
    });
}

$(document).ready(function() {

// --------- scroll down
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
	    'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
	    window.location.hash = target;
	 	});
	});

// SLIDER
    $('.responsive').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            }
        ]
    });

    // --------- scroll up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#_toTop').fadeIn();
        } else {
            $('#_toTop').fadeOut();
        }
    });
    $('#_toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

//   // ANIMATION
// 	var doAnimations = function() {
//
// 		var offset = $(window).scrollTop() + $(window).height(),
// 			$animatables = $('.animatable');
//
// 		if ($animatables.size() == 0) {
// 			$(window).off('scroll', doAnimations);
// 		}
//
// 		$animatables.each(function(i) {
// 			var $animatable = $(this);
// 			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
// 				$animatable.removeClass('animatable').addClass('animated');
// 			}
// 		});
//
// 	};
//
// 	$(window).on('scroll', doAnimations);
// 	$(window).trigger('scroll');
//
});

