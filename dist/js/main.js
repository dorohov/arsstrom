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
(function($) {
    "use strict"
    $(function() {

        jQuery.fn.f4PlayerV2 = function(options){
            var options = $.extend({
                plus: '',
                minus: '',
                field: '',
                max: 9999,
                min: 1
            }, options)

            var make = function() {
                var btn_plus = $(this).find(options.plus),
                    btn_minus = $(this).find(options.minus),
                    field = $(this).find(options.field)

                btn_plus.on('click', function() {
                    plus()
                })

                btn_minus.on('click', function() {
                    minus()
                })

                function plus() {
                    var currentValue = field.val()
                    if(currentValue < options.max) currentValue++
                    field.val(currentValue)
                    reset()
                }

                function minus() {
                    var currentValue = field.val()
                    if(currentValue > options.min) currentValue--
                    field.val(currentValue)
                    reset()
                }

                function reset() {
                    var currentValue = field.val()
                    if(currentValue > options.max) {
                        currentValue = options.max
                    }
                    field.val(currentValue)
                }
            }
            return this.each(make)
        };

        $('.counter').f4PlayerV2({
            plus: '.counter__btn button.is--plus',
            minus: '.counter__btn button.is--minus',
            field: '.counter__field input'
        })

    })
})(jQuery);
$(document).ready(function() {
    $('form').parsley()
})
lazyLoadImages();

function lazyLoadImages() {
    var images = document.querySelectorAll('.lazy');
    window.addEventListener('load', function() {
    for(var i = 0; i < images.length; i++) {
        images[i].src = images[i].dataset.src;
        images[i].removeAttribute('data-src');
        }
    });
}
(function($) {
    "use strict"
    $(function() {

        setMainHeight()

        function setMainHeight() {

            var elemsHeight = $('.navbar').innerHeight() + $('.footer').innerHeight()
            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()

            $('main, .cab').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
            $('.item__left__inner, .contacts__left__top__inner, .contacts__left__form').css({
                paddingLeft: padding.left + 30
            })
        }

        $(window).resize(function() {
            setMainHeight()
        })

    })
})(jQuery);
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.666372, 35.712331],
            zoom: 14,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        })
});
(function($) {
    "use strict"
    $(function() {

        var searchField = $('.navbar__userpanel__field')

        function openOverlay() {
            $('#overlay').show();
            $('body').addClass('is--overlay')
        }
        
        function closeOverlay() {
            $('#overlay').hide();
            $('body').removeClass('is--overlay')
        }

        function openSearchField() {
            $('.navbar__userpanel').addClass('is--open')
            searchField
                .children('form')
                .children('input[type="text"]')
                .focus()
        }

        function closeSearchField() {
            $('.navbar__userpanel').removeClass('is--open') 
        }

        function openMobileMenu() {
            $('.navbar__btn button').addClass('is-active')
            $('body').addClass('is--mm')
            closeCatalogSort()
            openOverlay()
        }

        function closeMobileMenu() {
            $('.navbar__btn button').removeClass('is-active')
            $('body').removeClass('is--mm')
            closeOverlay()
        }

        function setBodyPadding() {
            var padding = $('.navbar').innerHeight();
            $('body').css({
                paddingTop: padding + 'px'
            })
        }

        function openCatalogSort() {
            $('body').addClass('is--catalog');
            openOverlay()
        }

        function closeCatalogSort() {
            $('body').removeClass('is--catalog');
            closeOverlay()
        }

        $('#overlay').on('click', function() {
            closeOverlay()
            closeMobileMenu()
            closeCatalogSort()
        })

        $('.catalog__top__open button').on('click', function() {
            openCatalogSort()
        })

        $('.catalog__aside__close button').on('click', function() {
            closeCatalogSort()
        })

        setBodyPadding()

        $('#openSearchNavbarField').on('click', function() {
            if(!searchField.hasClass('is--open')) {
                openSearchField()
            }else {
                closeSearchField()
            }
        })

        $(window).resize(function() {
            setBodyPadding()
        })

        $(document).on('click', function(e) {
            if($(e.target).closest('.navbar__userpanel').length <= 0) {
                closeSearchField()
            }
        })

        $('.navbar__btn button').on('click', function() {
            if(!$('.navbar__btn button').hasClass('is-active')) {
                openMobileMenu() 
            }else {
                closeMobileMenu()
            }
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvdW50ZXIuanMiLCJmb3JtLmpzIiwibGF6eS5qcyIsIm1haW5zaXplLmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFEQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pbi1iYW5uZXJfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaW4tYmFubmVyX19hcnJvd3MgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmluLWJhbm5lcl9fYXJyb3dzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmFib3V0X19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5hYm91dF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5hYm91dF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLml0ZW1fX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLml0ZW1fX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuaXRlbV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuY2Nhcm91c2VsX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuY2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuY2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLW5leHQnLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUzMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmZuLmY0UGxheWVyVjIgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBwbHVzOiAnJyxcclxuICAgICAgICAgICAgICAgIG1pbnVzOiAnJyxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnJyxcclxuICAgICAgICAgICAgICAgIG1heDogOTk5OSxcclxuICAgICAgICAgICAgICAgIG1pbjogMVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zKVxyXG5cclxuICAgICAgICAgICAgdmFyIG1ha2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBidG5fcGx1cyA9ICQodGhpcykuZmluZChvcHRpb25zLnBsdXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bl9taW51cyA9ICQodGhpcykuZmluZChvcHRpb25zLm1pbnVzKSxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZCA9ICQodGhpcykuZmluZChvcHRpb25zLmZpZWxkKVxyXG5cclxuICAgICAgICAgICAgICAgIGJ0bl9wbHVzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdXMoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBidG5fbWludXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXMoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwbHVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA8IG9wdGlvbnMubWF4KSBjdXJyZW50VmFsdWUrK1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbChjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1pbnVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA+IG9wdGlvbnMubWluKSBjdXJyZW50VmFsdWUtLVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbChjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA+IG9wdGlvbnMubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IG9wdGlvbnMubWF4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbChjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChtYWtlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQoJy5jb3VudGVyJykuZjRQbGF5ZXJWMih7XHJcbiAgICAgICAgICAgIHBsdXM6ICcuY291bnRlcl9fYnRuIGJ1dHRvbi5pcy0tcGx1cycsXHJcbiAgICAgICAgICAgIG1pbnVzOiAnLmNvdW50ZXJfX2J0biBidXR0b24uaXMtLW1pbnVzJyxcclxuICAgICAgICAgICAgZmllbGQ6ICcuY291bnRlcl9fZmllbGQgaW5wdXQnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG59KSIsImxhenlMb2FkSW1hZ2VzKCk7XHJcblxyXG5mdW5jdGlvbiBsYXp5TG9hZEltYWdlcygpIHtcclxuICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eScpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbWFnZXNbaV0uc3JjID0gaW1hZ2VzW2ldLmRhdGFzZXQuc3JjO1xyXG4gICAgICAgIGltYWdlc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHNldE1haW5IZWlnaHQoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNYWluSGVpZ2h0KCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1zSGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICAgICAgJCgnbWFpbiwgLmNhYicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGVsZW1zSGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLml0ZW1fX2xlZnRfX2lubmVyLCAuY29udGFjdHNfX2xlZnRfX3RvcF9faW5uZXIsIC5jb250YWN0c19fbGVmdF9fZm9ybScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldE1haW5IZWlnaHQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJ5bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzU2LjY2NjM3MiwgMzUuNzEyMzMxXSxcclxuICAgICAgICAgICAgem9vbTogMTQsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcclxuICAgICAgICB9KVxyXG59KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWFyY2hGaWVsZCA9ICQoJy5uYXZiYXJfX3VzZXJwYW5lbF9fZmllbGQnKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJCgnI292ZXJsYXknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLW92ZXJsYXknKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1vdmVybGF5JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2hGaWVsZCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fdXNlcnBhbmVsJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgc2VhcmNoRmllbGRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbignZm9ybScpXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJylcclxuICAgICAgICAgICAgICAgIC5mb2N1cygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaEZpZWxkKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX191c2VycGFuZWwnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19idG4gYnV0dG9uJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLW1tJylcclxuICAgICAgICAgICAgY2xvc2VDYXRhbG9nU29ydCgpXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1tbScpXHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCb2R5UGFkZGluZygpIHtcclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nICsgJ3B4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkNhdGFsb2dTb3J0KCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1jYXRhbG9nJyk7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQ2F0YWxvZ1NvcnQoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLWNhdGFsb2cnKTtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNvdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIGNsb3NlQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nX190b3BfX29wZW4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5DYXRhbG9nU29ydCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2FzaWRlX19jbG9zZSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VDYXRhbG9nU29ydCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG5cclxuICAgICAgICAkKCcjb3BlblNlYXJjaE5hdmJhckZpZWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCFzZWFyY2hGaWVsZC5oYXNDbGFzcygnaXMtLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgb3BlblNlYXJjaEZpZWxkKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VTZWFyY2hGaWVsZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZigkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX191c2VycGFuZWwnKS5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VTZWFyY2hGaWVsZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19idG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCcubmF2YmFyX19idG4gYnV0dG9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTW9iaWxlTWVudSgpIFxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
