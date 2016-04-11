$(document).ready(function() {
    $('.menu').click(function(){
        $('.top-line,.middle-line,.bottom-line').toggleClass('active');
        $('.menu-list').toggleClass('out');
    });
	
     function HeightDetected(){
        var height = $(window).height();
        $('.image').css('height',height)
    }
    
    HeightDetected();
	
    $(window).resize(function(){
        HeightDetected();
    });
});

$(window).load(function(){
    $('.loader').fadeOut();
    $('.text').delay(400).fadeOut('slow');
})