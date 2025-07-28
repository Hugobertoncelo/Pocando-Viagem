const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let counter = 0;

function updateSlide() {
  const width = images[0].clientWidth;
  slide.style.transform = `translateX(${-width * counter}px)`;
}

nextBtn.addEventListener("click", () => {
  counter = (counter + 1) % images.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  counter = (counter - 1 + images.length) % images.length;
  updateSlide();
});

window.addEventListener("resize", updateSlide);
window.addEventListener("load", updateSlide);
