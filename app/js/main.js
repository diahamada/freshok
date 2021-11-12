$(function(){
    $('.slider__inner').slick({
        
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
    var mixer = mixitup('.gallery__content');
    var mixer = mixitup('.gallery__items');
    var mixer = mixitup('.services__content');
    var mixer = mixitup('.services__items');
});