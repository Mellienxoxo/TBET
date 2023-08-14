//Wait for the document to be fully loaded
document.addEventListener("DomContentLoaded", function() {
    //Initialize Siper
    const swiper = new Swiper('.home-swiper', {
        //Swiper options and configuration here
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.indicator-par',
            clickable: true,
        },
    });
});