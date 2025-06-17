import React from "react";
import "../styles/PrinciplesSection.css";
import giseliImage from "../assets/images/principles/foto-giseli.png";

function PrinciplesSection() {
  const principles = [
    {
      title: "Administração Responsável",
      description:
        "Acreditamos que os recursos são uma responsabilidade dada por Deus. Nossa abordagem foca na mordomia fiel, ajudando casais a gerenciar suas finanças com sabedoria e alinhados aos princípios cristãos, promovendo unidade no casamento.",
    },
    {
      title: "Planejamento com Propósito",
      description:
        "Nosso planejamento vai além das finanças tradicionais, ajudando casais a alcançar uma prosperidade equilibrada alinhada aos valores cristãos, evitando o endividamento e buscando um futuro sustentável.",
    },
    {
      title: "Generosidade",
      description:
        "Ensinamos que a generosidade é uma expressão de fé e gratidão, que fortalece o relacionamento e cria um legado duradouro. Ao invés de apenas focar no acúmulo de bens, mostramos como a generosidade traz prosperidade tanto material quanto espiritual.",
    },
  ];

  return (
    <section className="principles show" id="principles">
      <div className="principles__title">
        <h3>Nossos Princípios Financeiros Cristãos</h3>
      </div>

      <div className="principles__cards">
        {principles.map((principle, index) => (
          <div className="principles__card-item" key={index}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="principles__content">
        <div className="principles__perfil">
          <img className="perfil-foto" alt="Giseli Almeida" src={giseliImage} />
          <p>Giseli Almeida</p>
        </div>

        <div className="principles__container">
          <div className="principles__diferencial">
            {/* <span id="diferencial">Nosso diferencial</span>
            <p>
              está em integrar princípios bíblicos à educação financeira,
              proporcionando uma abordagem única que fortalece tanto a vida
              financeira quanto o relacionamento do casal.
            </p> */}
            <p id="oferecemos">Oferecemos</p>
          </div>

          <ul className="principles__lista">
            <li>Abordagem personalizada, adaptada às necessidades do casal.</li>
            <li>
              Foco na unidade do casamento, ajudando a tomar decisões financeiras juntos.
            </li>
            <li>Legado duradouro, criando um futuro próspero e alinhado com os valores cristãos.</li>
          </ul>

          <div className="principles__metodologia">
            <p>
              A nossa metodologia transforma não apenas as finanças, mas também fortalece o casamento,
              promovendo um crescimento espiritual e familiar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrinciplesSection;