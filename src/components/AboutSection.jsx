import React, { useRef, useState, useEffect } from "react";
import "../styles/AboutSection.css";
import foto1 from "../assets/images/mentoring/foto1.png";
import foto2 from "../assets/images/mentoring/foto2.png";
import foto3 from "../assets/images/mentoring/foto3.png";
import foto4 from "../assets/images/mentoring/foto4.png";

function AboutSection() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, image: foto1, text: "Minha missão é guiar casais rumo à estabilidade financeira, ajudando-os a administrar seus recursos com sabedoria, intencionalidade e alinhamento aos valores cristãos. Através de uma abordagem prática e embasada, ensino estratégias que promovem liberdade financeira, fortalecem relacionamentos e preparam casais para um futuro próspero e equilibrado." },
    { id: 2, image: foto2, text: "Sou Gisele Almeida, especialista em educação financeira para casais cristãos. Acredito que a organização financeira, fundamentada em princípios bíblicos, é uma ferramenta poderosa para transformar não apenas as finanças, mas também a harmonia e o propósito dentro do casamento." },
    { id: 3, image: foto3, text: "Ter a Visão de ser uma referência em educação financeira cristã para casais, ajudando milhares de famílias a alcançarem estabilidade financeira, paz e unidade no casamento, através de ensinamentos práticos e transformadores alinhados à Palavra de Deus." },
    { id: 4, image: foto4, text: "Valores fundamentados em princípios bíblicos são essenciais para uma vida financeira equilibrada. Acredito na transparência, fidelidade e mordomia responsável como pilares para que os casais administrem seus recursos com sabedoria, propósito e generosidade, fortalecendo sua relação e impactando futuras gerações." },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (carousel) carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about_content">
        <h3>Sobre a Mentoria</h3>
        <p>
          Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela
          transforma a vida financeira e o casamento de casais cristãos.
        </p>
      </div>

      <div className="about_carousel" ref={carouselRef}>
        {cards.map((card, i) => (
          <div className="about_cards" key={card.id}>
            <img className="about_cards-image" src={card.image} alt={`Mentoria ${i + 1}`} />
            <div className="about_text-card">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about_indicators">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
