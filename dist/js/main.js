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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImxhenkuanMiLCJtYWluc2l6ZS5qcyIsIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pbi1iYW5uZXJfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaW4tYmFubmVyX19hcnJvd3MgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmluLWJhbm5lcl9fYXJyb3dzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmFib3V0X19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5hYm91dF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5hYm91dF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLml0ZW1fX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLml0ZW1fX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuaXRlbV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwibGF6eUxvYWRJbWFnZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKCkge1xyXG4gICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5Jyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGltYWdlc1tpXS5zcmMgPSBpbWFnZXNbaV0uZGF0YXNldC5zcmM7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc2V0TWFpbkhlaWdodCgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1haW5IZWlnaHQoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbXNIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgZWxlbXNIZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaXRlbV9fbGVmdF9faW5uZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRNYWluSGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VhcmNoRmllbGQgPSAkKCcubmF2YmFyX191c2VycGFuZWxfX2ZpZWxkJylcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1vdmVybGF5JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKCcjb3ZlcmxheScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tb3ZlcmxheScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuU2VhcmNoRmllbGQoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX3VzZXJwYW5lbCcpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJ2Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpXHJcbiAgICAgICAgICAgICAgICAuZm9jdXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VTZWFyY2hGaWVsZCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fdXNlcnBhbmVsJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJykgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1tbScpXHJcbiAgICAgICAgICAgIGNsb3NlQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2J0biBidXR0b24nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tbW0nKVxyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZyArICdweCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5DYXRhbG9nU29ydCgpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tY2F0YWxvZycpO1xyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUNhdGFsb2dTb3J0KCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1jYXRhbG9nJyk7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKVxyXG4gICAgICAgICAgICBjbG9zZUNhdGFsb2dTb3J0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fdG9wX19vcGVuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nX19hc2lkZV9fY2xvc2UgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQ2F0YWxvZ1NvcnQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuXHJcbiAgICAgICAgJCgnI29wZW5TZWFyY2hOYXZiYXJGaWVsZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighc2VhcmNoRmllbGQuaGFzQ2xhc3MoJ2lzLS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5TZWFyY2hGaWVsZCgpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlU2VhcmNoRmllbGQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYoJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fdXNlcnBhbmVsJykubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlU2VhcmNoRmllbGQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighJCgnLm5hdmJhcl9fYnRuIGJ1dHRvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1vYmlsZU1lbnUoKSBcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
