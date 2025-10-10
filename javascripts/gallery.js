const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');

let currentIndex = 0;
let itemsToShow = getItemsToShow();

function getItemsToShow() {
    if (sliderItems.length === 0) return 1;
    return Math.max(1, Math.floor(sliderWrapper.offsetWidth / sliderItems[0].offsetWidth));
}

function clampIndex(index) {
    const maxIndex = Math.max(0, sliderItems.length - itemsToShow);
    return Math.min(Math.max(index, 0), maxIndex);
}

function updateSlider() {
    itemsToShow = getItemsToShow();
    currentIndex = clampIndex(currentIndex);
    const itemWidth = sliderItems[0].offsetWidth;
    sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = clampIndex(currentIndex - 1);
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = clampIndex(currentIndex + 1);
    updateSlider();
});

window.addEventListener('resize', () => {
    updateSlider();
});

// Initialize slider position on load
updateSlider();