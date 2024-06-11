export const swiper_settings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            /* spaceBetween: 30, */
        },
        768: {
            slidesPerView: 2,
            /* spaceBetween: 40, */
        },
        1024: {
            slidesPerView: 3,
            /* spaceBetween: 50, */
        },
    },
};