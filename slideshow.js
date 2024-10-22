// slideshow.js

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Update dots (optional)
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (dots.length) {
        dots[slideIndex - 1].className += " active";
    }

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
