import React from 'react';
import "../styles/PrinciplesSection.css"
import giseliImage from '../assets/images/principles/foto-giseli.png';

//* componente filho
function PrinciplesSection (){

   const principles = [
    {
      title: "Administração Responsável",
      description: "Ensinamos a gestão consciente dos recursos como mordomia dada por Deus."
    },
    {
      title: "Generosidade",
      description: "Cultivamos o hábito de compartilhar como expressão de gratidão e fé."
    },
    {
      title: "Planejamento com Propósito",
      description: "Guiamos na criação de metas financeiras alinhadas com valores cristãos."
    }
  ];

  return(
    <section className="principles" id="principles">
      <div className="principles__title">
        <h3>Nossos Princípios Financeiros Cristãos:</h3>
      </div>

      <div className="principles__sub-title">
        <div className="principles__carrossel" id="principles__carrossel">
          <div className="principles__carrossel__track">
            {principles.map((principle, index) => (
              <div className="principles__content-card" key={index}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="principles__content">
        <div className="principles__card">
          <div className="principles__perfil">
            <img
              className="perfil-foto"
              alt="Giseli Almeida"
              src={giseliImage}
            />
            <p>Giseli Almeida</p>
          </div>

          <div className="principles__container">
            <div className="principles__diferencial">
              <div className="principles__diferencial-container">
                <span id="diferencial">Nosso diferencial</span>
                <p>
                  está em integrar princípios bíblicos à educação financeira,
                  proporcionando uma abordagem única que fortalece tanto a vida
                  financeira quanto o relacionamento do casal.

                  <span id="oferecemos">Oferecemos:</span>
                </p>
              </div>
            </div>

            <div className="principles__topicos">
              <div className="principles__diferencial-container">
                <ul>
                  <li className="foco-na-unidade">
                    Abordagem personalizada, adaptada às necessidades do casal.
                  </li>
                  <li className="foco-na-unidade">
                    Foco na unidade do casamento, ajudando a tomar decisões
                    financeiras juntos.
                  </li>
                  <li>
                    Legado duradouro, criando um futuro próspero e alinhado com
                    os valores cristãos.
                  </li>
                </ul>
              </div>
            </div>

            <div className="principles__metodologia">
              <p>
                A nossa metodologia transforma não apenas as finanças, mas
                também fortalece o casamento, promovendo um crescimento
                espiritual e familiar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrinciplesSection;