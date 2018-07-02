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

});

