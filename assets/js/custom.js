$(document).ready(function(){
	$('.element_hot_service').slick({
        dots: false,
        slidesToShow: 4,
        centerPadding: '30px',
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/hot_service_prev.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/hot_service_next.png' alt=''></button>",
        responsive: [{
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, ]
    });
});