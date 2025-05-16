// TODO: script do carrossel dos cards 


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
