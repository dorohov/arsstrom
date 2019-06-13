ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.666372, 35.712331],
            zoom: 14,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        })
});