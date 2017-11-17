$( document ).ready(function() {
	$('.navbar').hide();
    $(window).scroll(function() {
    	$('.navbar').fadeIn('slow');
    	if ($(window).scrollTop() == 0) {
    	$('.navbar').fadeOut('slow');
    	};
    });

});