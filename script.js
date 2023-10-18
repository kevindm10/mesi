const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].style.display = 'none';
    slides[slideIndex].style.display = 'block';
    currentSlide = slideIndex;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

showSlide(0);
