$(function(){
    $('.about__inner').slick({
        
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        
    });

    var mixer = mixitup('.product-filter');
    var mixer = mixitup('.product-items');
});

