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

            $('main').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
            $('.cab').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
            $('.contacts__right').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
            $('.item__left__inner').css({
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
            center: [55.751574, 37.573856],
            zoom: 9
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvdW50ZXIuanMiLCJsYXp5LmpzIiwibWFpbnNpemUuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pbi1iYW5uZXJfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaW4tYmFubmVyX19hcnJvd3MgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmluLWJhbm5lcl9fYXJyb3dzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmFib3V0X19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5hYm91dF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5hYm91dF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLml0ZW1fX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLml0ZW1fX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuaXRlbV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuY2Nhcm91c2VsX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuY2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuY2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLW5leHQnLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUzMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmZuLmY0UGxheWVyVjIgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBwbHVzOiAnJyxcclxuICAgICAgICAgICAgICAgIG1pbnVzOiAnJyxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnJyxcclxuICAgICAgICAgICAgICAgIG1heDogOTk5OSxcclxuICAgICAgICAgICAgICAgIG1pbjogMVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zKVxyXG5cclxuICAgICAgICAgICAgdmFyIG1ha2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBidG5fcGx1cyA9ICQodGhpcykuZmluZChvcHRpb25zLnBsdXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bl9taW51cyA9ICQodGhpcykuZmluZChvcHRpb25zLm1pbnVzKSxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZCA9ICQodGhpcykuZmluZChvcHRpb25zLmZpZWxkKVxyXG5cclxuICAgICAgICAgICAgICAgIGJ0bl9wbHVzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdXMoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBidG5fbWludXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXMoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwbHVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA8IG9wdGlvbnMubWF4KSBjdXJyZW50VmFsdWUrK1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbChjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1pbnVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA+IG9wdGlvbnMubWluKSBjdXJyZW50VmFsdWUtLVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbChjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA+IG9wdGlvbnMubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IG9wdGlvbnMubWF4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbChjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChtYWtlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQoJy5jb3VudGVyJykuZjRQbGF5ZXJWMih7XHJcbiAgICAgICAgICAgIHBsdXM6ICcuY291bnRlcl9fYnRuIGJ1dHRvbi5pcy0tcGx1cycsXHJcbiAgICAgICAgICAgIG1pbnVzOiAnLmNvdW50ZXJfX2J0biBidXR0b24uaXMtLW1pbnVzJyxcclxuICAgICAgICAgICAgZmllbGQ6ICcuY291bnRlcl9fZmllbGQgaW5wdXQnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsImxhenlMb2FkSW1hZ2VzKCk7XHJcblxyXG5mdW5jdGlvbiBsYXp5TG9hZEltYWdlcygpIHtcclxuICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eScpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbWFnZXNbaV0uc3JjID0gaW1hZ2VzW2ldLmRhdGFzZXQuc3JjO1xyXG4gICAgICAgIGltYWdlc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHNldE1haW5IZWlnaHQoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNYWluSGVpZ2h0KCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1zSGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGVsZW1zSGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLmNhYicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGVsZW1zSGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLmNvbnRhY3RzX19yaWdodCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGVsZW1zSGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLml0ZW1fX2xlZnRfX2lubmVyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TWFpbkhlaWdodCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUxNTc0LCAzNy41NzM4NTZdLFxyXG4gICAgICAgICAgICB6b29tOiA5XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgICAgIH0pXHJcbn0pOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlYXJjaEZpZWxkID0gJCgnLm5hdmJhcl9fdXNlcnBhbmVsX19maWVsZCcpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5PdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKCcjb3ZlcmxheScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tb3ZlcmxheScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJCgnI292ZXJsYXknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW92ZXJsYXknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblNlYXJjaEZpZWxkKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX191c2VycGFuZWwnKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCdmb3JtJylcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbignaW5wdXRbdHlwZT1cInRleHRcIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZvY3VzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoRmllbGQoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX3VzZXJwYW5lbCcpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2J0biBidXR0b24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tbW0nKVxyXG4gICAgICAgICAgICBjbG9zZUNhdGFsb2dTb3J0KClcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19idG4gYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1tJylcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJvZHlQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmcgKyAncHgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuQ2F0YWxvZ1NvcnQoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLWNhdGFsb2cnKTtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VDYXRhbG9nU29ydCgpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tY2F0YWxvZycpO1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KClcclxuICAgICAgICAgICAgY2xvc2VDYXRhbG9nU29ydCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX3RvcF9fb3BlbiBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3BlbkNhdGFsb2dTb3J0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fYXNpZGVfX2Nsb3NlIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUNhdGFsb2dTb3J0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcblxyXG4gICAgICAgICQoJyNvcGVuU2VhcmNoTmF2YmFyRmllbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoIXNlYXJjaEZpZWxkLmhhc0NsYXNzKCdpcy0tb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuU2VhcmNoRmllbGQoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVNlYXJjaEZpZWxkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXJfX3VzZXJwYW5lbCcpLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVNlYXJjaEZpZWxkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX2J0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoISQoJy5uYXZiYXJfX2J0biBidXR0b24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KCkgXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
