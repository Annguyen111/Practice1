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