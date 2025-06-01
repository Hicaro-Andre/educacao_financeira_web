import React from 'react';
import wppIcon from '../assets/images/hero/WPP.svg';
import '../styles/HeroSection.css'

//* componente filho
function HeroSection(){

  return(
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="hero_title">
          <h1>Educação Financeira Pessoal e Familiar</h1>
        </div>

        <div className="hero__sub-title">
          <p>
            Liberte-se das preocupações financeiras e prospere com princípios
            cristãos que transformam sua vida!
          </p>
        </div>
      </div>

      <button className="btn_hero">
        <img src={wppIcon} alt="WhatsApp" className="icon" />
        Solicitar mais informações
      </button>

      <div className="hero__comments">
        <div className="card-hero">
          <h2>Carlos e Beatriz</h2>
          <p>
            "Graças a mentoria, conseguimos organizar nossas finanças e
            fortalecer nosso casamento"
          </p>
        </div>
        <div className="card-hero">
          <h2>Familia Castro</h2>
          <p>
            "Aprendemos a cuidar do nosso dinheiro com próposito, sem perder de
            vista nossos valores cristãos"
          </p>
        </div>
        <div className="card-hero">
          <h2>Eduardo e Cíntia</h2>
          <p>"Nos surpreendeu de forma positiva"</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;