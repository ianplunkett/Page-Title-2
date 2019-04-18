let state = true;
$(".content").click(function() {
    if(state) {
        $('body').css('background-color', 'limegreen');
        $('.mytext').addClass('rotated');
    } else {
        $('body').css('background-color', 'pink');
        $('.mytext').removeClass('rotated');
    }
    state = !state;
});
