import React from 'react';
import foto1 from '../assets/images/mentoring/foto1.png';
import foto2 from '../assets/images/mentoring/foto2.png';
import foto3 from '../assets/images/mentoring/foto3.png';
import foto4 from '../assets/images/mentoring/foto4.png';

//* componente filho
function AboutSection (){
  const mentoringCards = [
    {
      id: 1,
      image: foto1,
      text: "Minha missão é guiar casais rumo à estabilidade financeira, ajudando-os a administrar seus recursos com sabedoria, intencionalidade e alinhamento aos valores cristãos. Através de uma abordagem prática e embasada, ensino estratégias que promovem liberdade financeira, fortalecem relacionamentos e preparam casais para um futuro próspero e equilibrado."
    },
    {
      id: 2,
      image: foto2,
      text: "Sou Gisele Almeida, especialista em educação financeira para casais cristãos. Acredito que a organização financeira, fundamentada em princípios bíblicos, é uma ferramenta poderosa para transformar não apenas as finanças, mas também a harmonia e o propósito dentro do casamento."
    },
    {
      id: 3,
      image: foto3,
      text: "Ter a Visão de ser uma referência em educação financeira cristã para casais, ajudando milhares de famílias a alcançarem estabilidade financeira, paz e unidade no casamento, através de ensinamentos práticos e transformadores alinhados à Palavra de Deus."
    },
    {
      id: 4,
      image: foto4,
      text: "Valores fundamentados em princípios bíblicos são essenciais para uma vida financeira equilibrada. Acredito na transparência, fidelidade e mordomia responsável como pilares para que os casais administrem seus recursos com sabedoria, propósito e generosidade, fortalecendo sua relação e impactando futuras gerações."
    }
  ];
  return(
   <section className="mentoring" id="mentoring">
      <div className="mentoring__content">
        <h3>Sobre a Mentoria :</h3>
        <p>
          Conheça mais sobre a Mentora, sua Visão, Missão e Valores, e como ela
          transforma a vida financeira e o casamento de casais cristãos.
        </p>
      </div>

      <div className="mentoring__content__cards">
        {mentoringCards.map((card) => (
          <div className="mentoring__cards" key={card.id}>
            <img
              className="image-cards"
              alt={`Mentoria ${card.id}`}
              src={card.image}
            />
            <div className="mentoring__text-card">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection;