const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll("#cardsObjects");
  const totalSlides = slides.length;

  // Exibe o slide atual
  function showSlide(index) {
      slides.forEach((slide) => {
          slide.style.display = "none";
      });
      slides[index].style.display = "block";
  }

  // Avança para o próximo slide
  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  // Retrocede para o slide anterior
  function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
  }

  // Adiciona eventos aos botões de navegação
  document.querySelector("#cards").addEventListener("click", function (event) {
      if (event.target.classList.contains("prev-btn")) {
          prevSlide();
      } else if (event.target.classList.contains("next-btn")) {
          nextSlide();
      }
  });

  // Inicia o carrossel exibindo o primeiro slide
  showSlide(currentSlide);
});