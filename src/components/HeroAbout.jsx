import React from 'react';
import '../styles/HeroAbout.css';
import img1 from '../assets/images/hero_about/hero-about1.png';
import img2 from '../assets/images/hero_about/hero-about2.png';
import img3 from '../assets/images/hero_about/hero-about3.png';

const HeroAbout = () => {
  return (
    <section className="hero-section">
      <div className="titulo-parent">
        <div className="titulo">
          <h2 className="sobre-a-mentoria">Sobre a Mentoria</h2>
          <p className="conhea-mais-sobre">
            Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela transforma a vida financeira e o casamento de casais cristãos.
          </p>
          <div className="botao">
            <strong className="conhea-nossos-planos">Conheça nossos planos</strong>
          </div>
        </div>

        <div className="caixa">
          <div className="bloco">
            <img className="foto-2-icon" src={img2} alt="Foto 2" />
            <div className="texto-4">
              <p className="dvidas-e-desorganizao">
                Dívidas e desorganização financeira geram ansiedade, culpa, estresse e afastamento do propósito de vida.
              </p>
            </div>
          </div>

          <div className="bloco">
            <img className="foto-principal-icon" src={img1} alt="Foto Principal" />
            <div className="texto-3">
              <div className="mais-de-70-container">
                <p className="mais-de">Mais de</p>
                <p className="p">70%</p>
              </div>
              <p className="dos-casais-afirmam">
                dos casais afirmam que o dinheiro é uma das principais causas de brigas no relacionamento.
              </p>
            </div>
          </div>

          <div className="bloco">
            <img className="foto-1-icon" src={img3} alt="Foto 1" />
            <div className="texto-1">
              <p className="apenas-1-em">
                Apenas 1 em cada 5 famílias no Brasil faz algum tipo de planejamento financeiro mensal.
              </p>
            </div>
          </div>

          <div className="texto-2">
            <p className="menos-de-10">Menos de 10%</p>
            <p className="dos-brasileiros-afirmam">
              dos brasileiros afirmam ter recebido educação financeira formal na infância ou adolescência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
