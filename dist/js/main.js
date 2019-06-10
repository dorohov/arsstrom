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
            $('.item__left__inner').css({
                paddingLeft: padding.left + 30
            })
        }

        $(window).resize(function() {
            setMainHeight()
        })

    })
})(jQuery);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvdW50ZXIuanMiLCJsYXp5LmpzIiwibWFpbnNpemUuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmluLWJhbm5lcl9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5pbi1iYW5uZXJfX2Fycm93cyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuaW4tYmFubmVyX19hcnJvd3MgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuYWJvdXRfX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmFib3V0X19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmFib3V0X19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuaXRlbV9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaXRlbV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5pdGVtX19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5jY2Fyb3VzZWxfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5jY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5jY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBqUXVlcnkuZm4uZjRQbGF5ZXJWMiA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIHBsdXM6ICcnLFxyXG4gICAgICAgICAgICAgICAgbWludXM6ICcnLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgbWF4OiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgbWluOiAxXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpXHJcblxyXG4gICAgICAgICAgICB2YXIgbWFrZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bl9wbHVzID0gJCh0aGlzKS5maW5kKG9wdGlvbnMucGx1cyksXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuX21pbnVzID0gJCh0aGlzKS5maW5kKG9wdGlvbnMubWludXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkID0gJCh0aGlzKS5maW5kKG9wdGlvbnMuZmllbGQpXHJcblxyXG4gICAgICAgICAgICAgICAgYnRuX3BsdXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1cygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGJ0bl9taW51cy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW51cygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHBsdXMoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGZpZWxkLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbHVlIDwgb3B0aW9ucy5tYXgpIGN1cnJlbnRWYWx1ZSsrXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsKGN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXNldCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWludXMoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGZpZWxkLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbHVlID4gb3B0aW9ucy5taW4pIGN1cnJlbnRWYWx1ZS0tXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsKGN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXNldCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGZpZWxkLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbHVlID4gb3B0aW9ucy5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gb3B0aW9ucy5tYXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsKGN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKG1ha2UpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCgnLmNvdW50ZXInKS5mNFBsYXllclYyKHtcclxuICAgICAgICAgICAgcGx1czogJy5jb3VudGVyX19idG4gYnV0dG9uLmlzLS1wbHVzJyxcclxuICAgICAgICAgICAgbWludXM6ICcuY291bnRlcl9fYnRuIGJ1dHRvbi5pcy0tbWludXMnLFxyXG4gICAgICAgICAgICBmaWVsZDogJy5jb3VudGVyX19maWVsZCBpbnB1dCdcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwibGF6eUxvYWRJbWFnZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKCkge1xyXG4gICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5Jyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGltYWdlc1tpXS5zcmMgPSBpbWFnZXNbaV0uZGF0YXNldC5zcmM7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc2V0TWFpbkhlaWdodCgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1haW5IZWlnaHQoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbXNIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgZWxlbXNIZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaXRlbV9fbGVmdF9faW5uZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRNYWluSGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VhcmNoRmllbGQgPSAkKCcubmF2YmFyX191c2VycGFuZWxfX2ZpZWxkJylcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1vdmVybGF5JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKCcjb3ZlcmxheScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tb3ZlcmxheScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuU2VhcmNoRmllbGQoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX3VzZXJwYW5lbCcpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJ2Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpXHJcbiAgICAgICAgICAgICAgICAuZm9jdXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VTZWFyY2hGaWVsZCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fdXNlcnBhbmVsJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJykgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1tbScpXHJcbiAgICAgICAgICAgIGNsb3NlQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2J0biBidXR0b24nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tbW0nKVxyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZyArICdweCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5DYXRhbG9nU29ydCgpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tY2F0YWxvZycpO1xyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUNhdGFsb2dTb3J0KCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1jYXRhbG9nJyk7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKVxyXG4gICAgICAgICAgICBjbG9zZUNhdGFsb2dTb3J0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fdG9wX19vcGVuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nX19hc2lkZV9fY2xvc2UgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuXHJcbiAgICAgICAgJCgnI29wZW5TZWFyY2hOYXZiYXJGaWVsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighc2VhcmNoRmllbGQuaGFzQ2xhc3MoJ2lzLS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5TZWFyY2hGaWVsZCgpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlU2VhcmNoRmllbGQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYoJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fdXNlcnBhbmVsJykubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlU2VhcmNoRmllbGQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1vYmlsZU1lbnUoKSBcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
