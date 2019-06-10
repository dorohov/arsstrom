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