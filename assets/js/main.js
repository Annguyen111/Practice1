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