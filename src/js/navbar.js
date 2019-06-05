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