barsNum = 1;
$('.bars').on('click', function() {
    if (barsNum == 1){
        $('nav').css('height', '300px');
        $('.navbar_nav').css('display', 'flex')
        barsNum = 0;
    } else if (barsNum == 0) {
        $('nav').css('height', '100px')
        $('.navbar_nav').css('display', 'none')
        barsNum = 1;
    }
})
