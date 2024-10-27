let startX = 0;
let currentIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Function to open image in full screen
function openFullScreen(image) {
    if (image.requestFullscreen) {
        image.requestFullscreen();  // Open the image in full screen
    } else if (image.webkitRequestFullscreen) { /* Safari */
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { /* IE11 */
        image.msRequestFullscreen();
    }
}

// Optionally, you can add an event listener to exit full screen when the user clicks outside the image or presses ESC.
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFullScreen();
    }
});
document.addEventListener('click', function() {
    closeFullScreen();
});

// Function to close full screen
function closeFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

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
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Initialize gallery with swiping
document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    updateGallery();  // Initially display the first image
    enableSwipe(galleryContainer);  // Enable swipe functionality on mobile
});