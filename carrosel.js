let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slider-content');
    if (index < 0) {
        currentSlide = slides.children.length - 1;
    } else if (index >= slides.children.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * (100 / 5) + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);
