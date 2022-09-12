$('.features-items > div').on('click', function () {
    $(this).children('.features-items_title').toggleClass('features-items_title-change');
    $(this).parent('.features-items').toggleClass('features-change')
    $(this).next('.features-text').slideToggle(300);
})

$('.about-items > div').on('click', function () {
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color')
    $(this).next('.about-text').slideToggle(300);
})