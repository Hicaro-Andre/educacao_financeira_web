
  const track = document.querySelector(".plans__carousel-track");
  const cards = document.querySelectorAll(".plans__card");
  const leftArrow = document.querySelector(".navigation-arrow.left");
  const rightArrow = document.querySelector(".navigation-arrow.right");
  const indicators = document.querySelectorAll(".plans__buttons-select img");

  let currentIndex = 0;
  let visibleCards = 1;

  function updateVisibleCards() {
    const width = window.innerWidth;
    if (width < 640) {
      visibleCards = 1;
    } else if (width < 1024) {
      visibleCards = 2;
    } else {
      visibleCards = 3;
    }
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // width + gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach((img, i) => {
      img.src = i === currentIndex % cards.length
        ? "src/assets/images/plans/button-select-grenn.svg"
        : "src/assets/images/plans/button-select.svg";
    });
  }

  function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = cards.length - visibleCards;
    } else if (currentIndex > cards.length - visibleCards) {
      currentIndex = 0;
    }

    updateCarousel();
  }

  rightArrow.addEventListener("click", () => moveCarousel(1));
  leftArrow.addEventListener("click", () => moveCarousel(-1));

  window.addEventListener("resize", () => {
    updateVisibleCards();
    updateCarousel();
  });

  updateVisibleCards();
  updateCarousel();

