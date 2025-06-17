import React, { useEffect } from "react";
import "../styles/MentoringAbout.css";
import mentoringImage from "../assets/images/hero_about/heroabout-image.png";
import mentoringImageSmall from "../assets/images/hero_about/heroabout-image.png";

const MentoringAbout = () => {
  useEffect(() => {
    const section = document.querySelector('.mentoring-about');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="mentoring-about">
      <div className="overlay-image" />

      {/* Container do texto + botão (esquerda) */}
      <div className="text-content">
        <h1>Sobre a Mentoria</h1>
        <p>
          Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela
          transforma a vida financeira e o casamento de casais cristãos.
        </p>
        <button
          className="plans-button"
          onClick={() => (window.location.href = "/plans")}
          aria-label="Encontre seu plano"
        >
          Conheça nossos planos
        </button>
      </div>

      {/* Container da imagem (direita) */}
      <picture>
        <source media="(min-width: 1200px)" srcSet={mentoringImageSmall} />
        <source media="(min-width: 800px)" srcSet={mentoringImageSmall} />
        <img src={mentoringImageSmall} alt="Sobre a Mentoria" className="mentoring-image" />
        <button
          className="plans-button-mob"
          onClick={() => (window.location.href = "/plans")}
          aria-label="Encontre seu plano"
        >
          Conheça nossos planos
        </button>
      </picture>
    </section>
  );
};

export default MentoringAbout;