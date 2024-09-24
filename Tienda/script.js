const productList = document.querySelector('.product-list');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0; 
const cardsToShow = 3; 
const totalCards = document.querySelectorAll('.card_box').length; 

const cardWidth = document.querySelector('.card_box').offsetWidth + 20;

function updateCarousel() {
    productList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards - cardsToShow) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - cardsToShow; 
    }
    updateCarousel();
});
