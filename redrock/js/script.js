
/***********************БУРГЕР МЕНЮ */
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
/******************************DROPDOWN***/
const filter = document.querySelector('.filter');

if (filter) {
    const items = filter.querySelectorAll('.block-filter')

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}
/**********************swiper */
const popularSlider = new Swiper('.popular_slider', {
    spaceBetween: 20,
    slidesPerView: 1,

    navigation: {
        nextEl: '.popular-slider-next',
        prevEl: '.popular-slider-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        }
    }

});
const reviewsSlider = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoheight: true,
    navigation: {
        nextEl: '.slider-reviews-next',
        prevEl: '.slider-reviews-prev',
    },

});
const galleryItems = document.querySelectorAll('.gallery_item');
if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
        })
    })
}
/**************ACARDION*******************/
const accordion = document.getElementsByClassName('container');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
/**************popup*******************/
