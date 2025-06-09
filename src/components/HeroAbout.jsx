import React from 'react';
import '../styles/HeroAbout.css';
import img1 from '../assets/images/hero_about/hero-about1.png';
import img2 from '../assets/images/hero_about/hero-about2.png';
import img3 from '../assets/images/hero_about/hero-about3.png';

const HeroAbout = () => {
  return (
    <section className="mentoria">
      <div className="mentoria-texto">
        <h2>Sobre a Mentoria</h2>
        <p>
          Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela transforma a vida financeira e o casamento de casais cristãos.
        </p>
      </div>

      <div className="mentoria-cards">
        <div className="card destaque">
          <img src={img1} alt="Casal sorrindo" />
          <div className="balao balao-top">
            Dívidas e desorganização financeira geram ansiedade, culpa, estresse e afastamento do propósito de vida.
          </div>
          <div className="balao balao-top-right">
            Apenas 1 em cada 5 famílias no Brasil faz algum tipo de planejamento financeiro mensal.
          </div>
        </div>

        <div className="card">
          <img src={img2} alt="Casal em casa" />
          <div className="balao balao-bottom-left">
            <strong>Mais de 70%</strong> dos casais afirmam que o dinheiro é uma das principais causas de brigas no relacionamento.
          </div>
        </div>

        <div className="card">
          <img src={img3} alt="Família ao pôr do sol" />
          <div className="balao balao-bottom">
            <strong>Menos de 10%</strong> dos brasileiros afirmam ter recebido educação financeira formal na infância ou adolescência.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
