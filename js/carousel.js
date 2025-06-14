const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function restartAnimation(element, animationClass) {
  element.classList.remove(animationClass);
  void element.offsetWidth;
  element.classList.add(animationClass);
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    const content = slide.querySelector('.content');
    slide.classList.remove("active");
    if (content) {
      content.classList.remove("animate-left", "animate-top", "animate-right");
    }
    dots[i].classList.remove("active");
  });

  const currentSlide = slides[index];
  const content = currentSlide.querySelector('.content');
  currentSlide.classList.add("active");
  dots[index].classList.add("active");

  const animations = ["animate-left", "animate-top", "animate-right"];
  const animationClass = animations[index % animations.length];

  if (content) {
    restartAnimation(content, animationClass);
  }

  current = index;
}

let interval = setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    showSlide(+dot.dataset.slide);
    interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
  });
});
