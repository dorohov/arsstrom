(function($) {
    "use strict"
    $(function() {

        $('.in-banner__items').slick({
            prevArrow: '.in-banner__arrows button.is--prev',
            nextArrow: '.in-banner__arrows button.is--next',
            fade: true,
            cssEase: 'linear',
            draggable: false,
            autoplay: true
        })
        $('.about__carousel__items').slick({
            prevArrow: '.about__carousel__controls button.is--prev',
            nextArrow: '.about__carousel__controls button.is--next',
            fade: true,
            cssEase: 'linear',
            draggable: false,
            autoplay: true
        })
        $('.item__carousel__items').slick({
            prevArrow: '.item__carousel__controls button.is--prev',
            nextArrow: '.item__carousel__controls button.is--next',
            draggable: false,
            adaptiveHeight: true
        })
        $('.ccarousel__list').slick({
            prevArrow: '.ccarousel__controls button.is--prev',
            nextArrow: '.ccarousel__controls button.is--next',
            draggable: false,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        adaptiveHeight: true
                    }
                }
            ]
        })
    })
})(jQuery);