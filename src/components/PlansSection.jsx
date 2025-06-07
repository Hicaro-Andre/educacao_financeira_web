import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/PlansSection.css";

const plans = [
  {
    title: "Plano Essencial",
    price: "Gratuito",
    description:
      "Ideal para quem está começando e quer dar o primeiro passo sem compromisso.",
    duration: "1 sessão de 1 hora",
    items: [
      "Exercício prático para identificar desafios financeiros do casal",
      "Conceitos básicos",
    ],
  },
  {
    title: "Plano Básico",
    price: "R$ 450",
    description:
      "Ideal para casais que querem mais controle sobre suas finanças e um plano de ação prático.",
    duration: "3 sessões de 1 hora",
    items: [
      "Como alinhar a visão financeira do casal com princípios cristãos",
      "Planejamento financeiro simples e prático",
      "Como sair das dívidas e evitar novos endividamentos",
      "Definição de metas financeiras realistas",
      "Planilha de controle financeiro personalizada",
    ],
  },
  {
    title: "Plano Intermediário",
    price: "R$ 600 ",
    type: "ou 2x sem juros",
    description:
      "Ideal para casais que querem sair da instabilidade financeira e construir um futuro próspero.",
    duration: "Duração: 5 sessão de 1 hora",
    items: [
      "Tudo do plano anterior +",
      "Acompanhamento por WhatsApp durante o período da mentoria",
      "Como construir uma reserva de emergência eficaz",
      "Introdução a investimentos para casais cristãos",
      "Planejamento financeiro para objetivos de curto, médio e longo prazo",
      "Como ensinar princípios financeiros cristãos aos filhos",
    ],
  },
  {
    title: "Plano Avançado",
    price: "R$ 1000 ",
    type: "ou 4x sem juros",
    description:
      "Ideal para casais que desejam viver a verdadeira liberdade financeira sem abrir mão dos princípios bíblicos.",
    duration: "Duração: 8 sessão de 1 hora + (acompanhamento)",
    items: [
      "Tudo dos planos anterior +",
      "Diagnóstico financeiro completo do casal",
      "Planejamento para aposentadoria e herança financeira",
      "Estratégias avançadas de investimentos",
      "Como empreender ou gerar novas fontes de renda juntos",
      "Sessão exclusiva sobre doação e generosidade cristã",
      "Acompanhamento individualizado por 3 meses após a mentoria",
    ],
  },
];

function PlansSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate("/agenda", {
      state: { selectedPlan: plans[current] },
    });
  };
   const handleScheduleClick = () => {
    navigate("/agenda");
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section className="plans_container" id="plans">
      <h1>Mentorias e Planos</h1>
      <p className="plans_subtitle">
        Transforme a realidade financeira do seu casamento com nossas mentorias
        personalizadas.
      </p>

      <div className="plans_indicator-container">
        {plans.map((_, idx) => (
          <div
            key={idx}
            className={`plans_indicator ${idx === current ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="plans_carousel-wrapper">
        <button className="plans_nav-btn left-plans" onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
          >
            <path
              d="M14 2.51074L2 12.0348L14 21.5588"
              stroke="#1C4140"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={`plans_card plans_card-${current}`}>
          <h2>{plans[current].title}</h2>
          <p className="price">{plans[current].price}</p>
          <p className="type">{plans[current].type}</p>
          <p className="desc">{plans[current].description}</p>
          <p className="duration">Duração: {plans[current].duration}</p>
          <ul>
            {plans[current].items.map((item, i) => (
              <li key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
                >
                  <path
                    d="M17.1667 5L7.99999 14.1667L3.83333 10"
                    stroke="#22C55E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <button className="plans_cta-btn" onClick={handleAgendar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.031"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                className="plans_cta-icon"
              >
                {" "}
                <path
                  d="M5.17709 1.5V4.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M9.85416 1.5V4.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M11.6081 3H3.42318C2.77741 3 2.25391 3.67157 2.25391 4.5V15C2.25391 15.8284 2.77741 16.5 3.42318 16.5H11.6081C12.2538 16.5 12.7773 15.8284 12.7773 15V4.5C12.7773 3.67157 12.2538 3 11.6081 3Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M2.25391 7.5H12.7773"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>
            <span className="plans_cta-text" onClick={handleScheduleClick}>
              Agendar
              <br />
              Sessão
            </span>
          </button>
        </div>

        <button className="plans_nav-btn right-plans" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
          >
            <path
              d="M2 2.51074L14 12.0348L2 21.5588"
              stroke="#1C4140"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default PlansSection;
