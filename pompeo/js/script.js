$('#home_link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#home').offset().top }, 1000)

    document.getElementById('checkbox-menu').checked = false;
    $('body').css({'overflow': "visible" })
});

$('#about_link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#about').offset().top }, 1000)

    document.getElementById('checkbox-menu').checked = false;
    $('body').css({'overflow': "visible" })
});

$('#shop_link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#shop').offset().top }, 1000)

    document.getElementById('checkbox-menu').checked = false;
    $('body').css({'overflow': "visible" })
});

$('#contact_link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#contact').offset().top }, 1000)

    document.getElementById('checkbox-menu').checked = false;
    $('body').css({'overflow': "visible" })
});

$('#menuToggle #checkbox-menu').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});

