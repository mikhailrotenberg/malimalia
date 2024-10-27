let startX = 0;
let currentIndex = 0;

// Adding event listeners for touch events
function enableSwipe(galleryContainer) {
    galleryContainer.addEventListener('touchstart', handleTouchStart, false);
    galleryContainer.addEventListener('touchmove', handleTouchMove, false);
    galleryContainer.addEventListener('touchend', handleTouchEnd, false);
}

function handleTouchStart(event) {
    // Capture the initial touch point
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    // Prevent scrolling while swiping
    event.preventDefault();
}

function handleTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const differenceX = startX - endX;

    // Detect swipe direction
    if (differenceX > 50) {
        // Swipe left: move to the next image
        moveToNextSlide();
    } else if (differenceX < -50) {
        // Swipe right: move to the previous image
        moveToPreviousSlide();
    }
}

function moveToNextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex = (currentIndex + 1) % slides.length;
    updateGallery();
}

function moveToPreviousSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateGallery();
}

function updateGallery() {
    const galleryItems = document.querySelectorAll('.carousel-slide');
    galleryItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize gallery with swiping
document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');

    // Initially display the first image
    updateGallery();

    // Enable swipe functionality on mobile
    enableSwipe(galleryContainer);
});
