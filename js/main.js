//Owl Carusel Slider
$('.owl').owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



//Sticky Navbar code
window.addEventListener('scroll', function () {
    var header = document.querySelector('#nav');
    header.classList.toggle('sticky', window.scrollY > 0);


});


//Scrool Fixed code
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});



//Type js codepen code
new Typed('#typed', {
    strings: ['Idea Share', 'Idea Execute', 'Training And Motivation'],
    typeSpeed: 140,
    delaySpeed: 190,
    loop: true
});