import React, { useEffect, useRef } from "react";
import "../styles/AboutSection.css"
import foto1 from "../assets/images/mentoring/foto1.png";
import foto2 from "../assets/images/mentoring/foto2.png";
import foto3 from "../assets/images/mentoring/foto3.png";
import foto4 from "../assets/images/mentoring/foto4.png";

function AboutSection() {
  const carouselRef = useRef(null);

  const cards = [
    { id: 1, image: foto1, text: "Minha missão é guiar casais rumo à estabilidade financeira, ajudando-os a administrar seus recursos com sabedoria, intencionalidade e alinhamento aos valores cristãos. Através de uma abordagem prática e embasada, ensino estratégias que promovem liberdade financeira, fortalecem relacionamentos e preparam casais para um futuro próspero e equilibrado." },
    { id: 2, image: foto2, text: "Sou Gisele Almeida, especialista em educação financeira para casais cristãos. Acredito que a organização financeira, fundamentada em princípios bíblicos, é uma ferramenta poderosa para transformar não apenas as finanças, mas também a harmonia e o propósito dentro do casamento." },
    { id: 3, image: foto3, text: "Ter a Visão de ser uma referência em educação financeira cristã para casais, ajudando milhares de famílias a alcançarem estabilidade financeira, paz e unidade no casamento, através de ensinamentos práticos e transformadores alinhados à Palavra de Deus." },
    { id: 4, image: foto4, text: "Valores fundamentados em princípios bíblicos são essenciais para uma vida financeira equilibrada. Acredito na transparência, fidelidade e mordomia responsável como pilares para que os casais administrem seus recursos com sabedoria, propósito e generosidade, fortalecendo sua relação e impactando futuras gerações." },
  ];

  const extendedCards = [...cards, cards[0]]; // clone do primeiro card para loop

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.innerWidth >= 768) return;

    const cardElements = carousel.querySelectorAll(".mentoring__cards");
    const cardWidth = cardElements[0].offsetWidth; 
    let index = 0;

    carousel.scrollLeft = 0;

    const scrollNext = () => {
      index++;
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });

      if (index === cards.length) {
        setTimeout(() => {
          carousel.scrollLeft = 0; // reset instantâneo
          index = 0;
        }, 500); // tempo para animação smooth
      }
    };

    const interval = setInterval(scrollNext, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mentoring" id="mentoring">
      <div className="mentoring__content">
        <h3>Sobre a Mentoria </h3>
        <p>
          Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela
          transforma a vida financeira e o casamento de casais cristãos.
        </p>
      </div>

      <div className="mentoring__carousel" ref={carouselRef}>
        {extendedCards.map((card, i) => (
          <div className="mentoring__cards" key={i}>
            <img className="image-cards" src={card.image} alt={`Mentoria ${i}`} />
            <div className="mentoring__text-card">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
