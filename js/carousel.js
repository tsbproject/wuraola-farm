

// const slides = document.querySelectorAll('.carousel-slide');
// const dots = document.querySelectorAll('.dot');
// let current = 0;
// const interval = 8000;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle('active', i === index);
//     dots[i].classList.toggle('active', i === index);
//   });
//   current = index;
// }

// function nextSlide() {
//   const next = (current + 1) % slides.length;
//   showSlide(next);
// }

// dots.forEach(dot => {
//   dot.addEventListener('click', () => {
//     const slideIndex = parseInt(dot.dataset.slide);
//     showSlide(slideIndex);
//   });
// });

// setInterval(nextSlide, interval);

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".carousel-arrow.prev");
  const nextBtn = document.querySelector(".carousel-arrow.next");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");

      // Restart animation by removing and re-adding the element
      const text = slide.querySelector(".carousel-text");
      if (text) {
        text.style.animation = "none";
        // force reflow
        void text.offsetWidth;
        text.style.animation = "";
      }
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 8000); // change every 8s
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      currentSlide = index;
      showSlide(currentSlide);
      startAutoSlide();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }

  // Init
  showSlide(currentSlide);
  startAutoSlide();
});
