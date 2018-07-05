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

    // light box
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
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

// ----------- MAP

(function () {

    function initMap() {
        var map = void 0;
        var mapContainer = document.querySelector('#map');
        var mapCoordinates = { lat: 47.785054, lng: 35.212481 };
        var mapOptions = {
            center: mapCoordinates,
            zoom: 16,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": "50"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "30"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "40"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                    ]
                }
            ],
            disableDefaultUI: true,
            scrollwheel: false
        };

        map = new google.maps.Map(mapContainer, mapOptions);

        var marker = new google.maps.Marker({
            position: { lat: 47.785054, lng: 35.212481 },
            map: map,
            icon: "img/pointer.png"
        });

        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }

    document.addEventListener('DOMContentLoaded', initMap);
})();