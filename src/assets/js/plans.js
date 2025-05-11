// TODO: script do carrossel dos cards 
const wrapper = document.querySelector(".plans__carousel-wrapper");
const cards = document.querySelectorAll(".plans__free");
const arrowRight = document.querySelector(".arrow-dir");
const arrowLeft = document.querySelector(".arrow-esq");

let currentIndex = 0;

function updateCarousel() {
  const offset = currentIndex * -100;
  wrapper.style.transform = `translateX(${offset}%)`;
}

arrowRight.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// TODO: scripts dos ícones acima dos cards do carrossel 
const indicators = document.querySelectorAll(".plans__buttons-select img");
function updateIndicators() {
  indicators.forEach((img, index) => {
    img.src =
      index === currentIndex
        ? "src/assets/images/plans/button-select-grenn.svg" //? botão verde
        : "src/assets/images/plans/button-select.svg"; //? botão normal
  });
}

function updateCarousel() {
  const offset = currentIndex * -100;
  wrapper.style.transform = `translateX(${offset}%)`;
  updateIndicators();
}
updateIndicators();
