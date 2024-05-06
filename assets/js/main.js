const categorySlider = [...document.querySelectorAll('.category__slider')]
const nextBtn = [...document.querySelectorAll('.category__btn--next')]
const prevBtn = [...document.querySelectorAll('.category__btn--prev')]

categorySlider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// =================================================================
const featureSlider = [...document.querySelectorAll('.fetured__slider')]
const nextBtnn = [...document.querySelectorAll('.fetured__btn--next')]
const prevBtnn = [...document.querySelectorAll('.fetured__btn--prev')]

featureSlider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// =================================================================
const popularSlider = [...document.querySelectorAll('.popular__slider')]
const nextBtnnn = [...document.querySelectorAll('.popular__btn--next')]
const prevBtnnn = [...document.querySelectorAll('.popular__btn--prev')]

popularSlider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtnnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtnnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// =================================================================
const recentSlider = [...document.querySelectorAll('.recent__slider')]
const nextBtnnnn = [...document.querySelectorAll('.recent__btn--next')]
const prevBtnnnn = [...document.querySelectorAll('.recent__btn--prev')]

recentSlider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtnnnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtnnnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// =================================================================
const reviewSlider = [...document.querySelectorAll('.slider__box')]
const nextBtnnnnn = [...document.querySelectorAll('.review__btn--next')]
const prevBtnnnnn = [...document.querySelectorAll('.review__btn--prev')]

reviewSlider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtnnnnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtnnnnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function scrollToTop() {
    var element = document.documentElement;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var registerBtn = document.querySelector('.register__btn');
    var linkNav = [document.querySelectorAll('.link-open')];
    var searchBtn = this.document.querySelector('.search__btn');
    var loginBtn = this.document.querySelector('.login__btn');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) { 
        header.classList.add('fixed');
        registerBtn.style.backgroundColor = 'rgba(255, 111, 40, 1)';
        registerBtn.style.color = '#ffffff'
        linkNav.forEach((item, i) => {
            item.forEach((link, i) => {
                link.style.color = 'rgba(255, 111, 40, 1)';
            })
        })
        loginBtn.style.color = 'rgba(255, 111, 40, 1)'
        searchBtn.style.color = 'rgba(255, 111, 40, 1)'
    } else {
        header.classList.remove('fixed');
        registerBtn.style.backgroundColor = '#ffffff';
        registerBtn.style.color = 'rgba(255, 111, 40, 1)'
        linkNav.forEach((item, i) => {
            item.forEach((link, i) => {
                link.style.color = '#ffffff';
            })
        })
        loginBtn.style.color = '#ffffff'
        searchBtn.style.color = '#ffffff'

    }
});