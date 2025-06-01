 
   //! a ajustar
 document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".principles__carrossel__track");
  const cards = document.querySelectorAll(".principles__content-card");
  const totalCards = cards.length;
  let index = 0;

  // Clona o primeiro card e adiciona no final
  const firstClone = cards[0].cloneNode(true);
  track.appendChild(firstClone);

  const intervalTime = 4000;
  const transitionTime = 500; // tempo da transição em ms

  function moveToNextSlide() {
    index++;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalCards) {
      // Após a transição para o clone, resetar para o slide 0 instantaneamente
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = `translateX(0%)`;
      }, transitionTime);
    }
  }

  setInterval(moveToNextSlide, intervalTime);
});
