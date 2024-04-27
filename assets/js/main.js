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