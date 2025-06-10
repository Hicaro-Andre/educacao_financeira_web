import React from 'react';
import '../styles/HeroAbout.css';
import img1 from '../assets/images/hero_about/hero-about1.png';
import img2 from '../assets/images/hero_about/hero-about2.png';
import img3 from '../assets/images/hero_about/hero-about3.png';
import fundoimg from '../assets/images/hero_about/heroabout-image.png';



const HeroAbout = () => {
  return (
    <section class="mentoria">
  <div class="mentoria-texto">
    <h2>Por que falar de Educação Financeira?</h2>
    <p>
      A desorganização financeira afeta diretamente o bem-estar emocional e os relacionamentos. Veja alguns dados:
    </p>
  </div>

  <div class="imagem-completa-container">
    <img src={fundoimg} alt="Estatísticas sobre educação financeira" class="imagem-completa" />
  </div>
</section>
  );
};

export default HeroAbout;
