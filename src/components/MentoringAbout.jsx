import React from 'react';
import '../styles/MentoringAbout.css';
import mentoringImage from '../assets/images/hero_about/heroabout-image.png'; // ajuste o caminho conforme sua estrutura de pastas
import mentoringImageSmall from "../assets/images/hero_about/heroabout-image.png"
const MentoringAbout = () => {
 return (
    <section className="mentoring-about">
      <div className="overlay-image" />
      
      {/* Container do texto + botão (esquerda) */}
      <div className="text-content">
        <h3>Sobre a Mentoria</h3>
        <p>
          Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela transforma a vida financeira e o casamento de casais cristãos.
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
        <img src={mentoringImageSmall} alt="Sobre a Mentoria" />
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
