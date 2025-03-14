// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// Auto slideshow
function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds
showSlide(slideIndex); // Show the first slide initially

// Back to Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
