import React from 'react';
import '../styles/MentoringAbout.css';
import mentoringImage from '../assets/images/hero_about/heroabout-image.png'; // ajuste o caminho conforme sua estrutura de pastas

const MentoringAbout = () => {
  return (
    <section className="mentoring-about">
      <div className="overlay-image" />
      <h3>Sobre a Mentoria</h3>
      <img src={mentoringImage} alt="Sobre a Mentoria" />
      <button className="plans-button">
        Conheça nossos planos
      </button>
    </section>
  );
};

export default MentoringAbout;
