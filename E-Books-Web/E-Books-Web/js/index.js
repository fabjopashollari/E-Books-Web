/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search-close');
const searchContent = document.getElementById('search-content');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
    });
}


/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close'); 
const loginContent = document.getElementById('login-content');

if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login');
    });
}


if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login');
    });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints:{
        1220:{
            spaceBetween: -32,
        },
    },
});
/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        1150:{
            slidesPerView: 4,
            centeredSlides: false,
        },
    },
});

// swiperFeatured.on('init', function() {
//     swiperFeatured.on('beforeInit', function(e) {
//         e.preventDefault(); 
//     });
// });
// const prevButton = document.querySelector('.swiper-button-prev');
// const nextButton = document.querySelector('.swiper-button-next');


// prevButton.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     swiperFeatured.slidePrev(); 
// });


// nextButton.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     swiperFeatured.slideNext(); 
// });

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints:{
        1150:{
            slidesPerView: 3,
        },
    },
});


/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    breakpoints:{
        1150:{
            slidesPerView: 3,
            centeredSlides: false,
        },
    },
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUP = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
                        : scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = ()=> {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAtribute('id'),
        sectionsClass = document.querySelector(`.nav__menu a[href*=` + sectionId + `]`)

        if(scrollDown > sectionTOp && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/