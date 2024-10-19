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
