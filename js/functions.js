$(function() {
    openWindow();
    checkClickClose()

    function openWindow() {
        $('.container-mobile').click(function() {
            $('.container-mobile ul').fadeIn();

        });
    }

    function checkClickClose() {
        var el = $('.section-top');
        el.click(function() {
            $('.container-mobile ul').fadeOut();
        })

    }
})