var windowWidth = window.innerWidth;

$(document).ready(function () {

    if (windowWidth > 995) {


        /*
        * Plugin intialization
        */
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['page1', 'page2', 'page3', 'page4'],
            sectionsColor: ['#12225a', '#FFF', '#FFF',],
            navigation: {
                'position': 'right',
                'tooltips': ['Page 1', 'Page 2', 'Page 3']
            },
            afterRender: function () {
                $('#pp-nav').addClass('custom');
            },
            afterLoad: function (anchorLink, index) {
                if (index > 1) {
                    $('#pp-nav').removeClass('custom');
                } else {
                    $('#pp-nav').addClass('custom');
                }
            }
        });

        /*
        * Internal use of the demo website
        */
        $('#showExamples').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('#examplesList').toggle();
        });

        $('html').click(function () {
            $('#examplesList').hide();
        });

    }

});