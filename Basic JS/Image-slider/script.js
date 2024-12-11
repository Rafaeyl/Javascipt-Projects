const slide = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slide.length > 0) {
    slide[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slide.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slide.length - 1;
  }

  slide.forEach((item) => {
    item.classList.remove("displaySlide");
  });

  slide[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
}
