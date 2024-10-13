let currentIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}