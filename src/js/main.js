// ----------- MAP
var markersData = [
    {
        lat: 47.785054,     // Широта
        lng: 35.212481,    // Долгота
        name: "УютБудСервис", // Произвольное название, которое будем выводить в информационном окне
        address:"г. Запорожье, ул. Паромонова, 4"   // Адрес, который также будем выводить в информационном окне
    }
];

var map, infoWindow;
function initMap() {
    var centerLatLng = new google.maps.LatLng(47.785054, 35.212481);
    var mapOptions = {
        center: centerLatLng,
        zoom: 16
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
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
            scaledSize: new google.maps.Size(54, 60)
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

//	------POP UP
    $('._btn').click(function(){
        $('._partner,._overlay').fadeIn(400);
    });
    $('._close,._overlay').click(function(){
        $('._partner,._overlay').fadeOut(400);
    });

    $('._btn1').click(function(){
        $('._partner1,._overlay').fadeIn(400);
    });
    $('._close1,._overlay').click(function(){
        $('._partner1,._overlay').fadeOut(400);
    });

    $('._btn2').click(function(){
        $('._partner2,._overlay').fadeIn(400);
    });
    $('._close2,._overlay').click(function(){
        $('._partner2,._overlay').fadeOut(400);
    });

    $('._btn3').click(function(){
        $('._partner3,._overlay1').fadeIn(400);
    });
    $('._close3,._overlay1').click(function(){
        $('._partner3,._overlay1').fadeOut(400);
    });

    $('._btn4').click(function(){
        $('._partner4,._overlay1').fadeIn(400);
    });
    $('._close4,._overlay1').click(function(){
        $('._partner4,._overlay1').fadeOut(400);
    });

    $('._btn5').click(function(){
        $('._partner5,._overlay1').fadeIn(400);
    });
    $('._close5,._overlay1').click(function(){
        $('._partner5,._overlay1').fadeOut(400);
    })

    $('._btn6').click(function(){
        $('._partner6,._overlay1').fadeIn(400);
    });
    $('._close6,._overlay1').click(function(){
        $('._partner6,._overlay1').fadeOut(400);
    })

    $('._btn7').click(function(){
        $('._partner7,._overlay1').fadeIn(400);
    });
    $('._close7,._overlay1').click(function(){
        $('._partner7,._overlay1').fadeOut(400);
    })

    $('._btn8').click(function(){
        $('._partner8,._overlay1').fadeIn(400);
    });
    $('._close8,._overlay1').click(function(){
        $('._partner8,._overlay1').fadeOut(400);
    })
// ------------ SLIDER
    $('.responsive').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 576,
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

    //CALL
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height > 50){
            $('.js-callback')
                .removeClass('.callback_none')
                .addClass('callback');
        } else{
            $('.js-callback')
                .removeClass('callback')
                .addClass('callback_none');
        }

    });

  // ANIMATION
	var doAnimations = function() {

		var offset = $(window).scrollTop() + $(window).height(),
			$animatables = $('.animatable');

		if ($animatables.size() == 0) {
			$(window).off('scroll', doAnimations);
		}

		$animatables.each(function(i) {
			var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
				$animatable.removeClass('animatable').addClass('animated');
			}
		});

	};

	$(window).on('scroll', doAnimations);
	$(window).trigger('scroll');


    //***ISOTOPE***

    var $grid = $('.grid').isotope({
        // main isotope options
        itemSelector: '.grid-item',
        // set layoutMode
        masonry: {
            columnWidth: '.grid-item',
            isFitWidth: true,
            gutter: 20,
            percentPosition: true

                    }
    })

    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        }
    };
// bind filter on select change
    $('.filters-select').on( 'change', function() {
        // get filter value from option value
        var filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

// // filter items on button click
//     $('.filter-button-group').on( 'click', 'button', function() {
//         var filterValue = $(this).attr('data-filter');
//         $grid.isotope({ filter: filterValue });
//     });
//
// // change is-checked class on buttons
//     $('.btn-group').each( function( i, buttonGroup ) {
//         var $buttonGroup = $( buttonGroup );
//         $buttonGroup.on( 'click', 'button', function() {
//             $buttonGroup.find('.is-checked').removeClass('is-checked');
//             $( this ).addClass('is-checked');
//         });
//     });
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

});

// if(window.innerWidth < 800) {
//     var body = (document.getElementByTagName("body"))[0];
//     body.className = "mobile";
// }