$(document).ready(function() {

// --------- burger
	$buttons = $('._navLinks');
	$('._navLinks, ._burger').click(function() {
	$buttons.toggleClass('active');
    return;
	});


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

// --------- parallax

	var currentX = '';
	var currentY = '';
	var movementConstant = .015;

	$(document).mousemove(function(e) {
		if(currentX == '') currentX = e.pageX;
		var xdiff = e.pageX - currentX;
		currentX = e.pageX;
		if(currentY == '') currentY = e.pageY;
		var ydiff = e.pageY - currentY;
		currentY = e.pageY; 

		$('._parallax').each(function(i, el) {
  			var movement = (i + .5) * (xdiff * movementConstant);
  			var movementy = (i + .5) * (ydiff * movementConstant);
  			var newX = $(el).position().left + movement;
  			var newY = $(el).position().top + movementy;
			$(el).css('left', newX + 'px');
			$(el).css('top', newY + 'px');
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