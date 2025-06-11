import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    price: "R$ 600",
    type: "ou 2x sem juros",
    description:
      "Ideal para casais que querem sair da instabilidade financeira e construir um futuro próspero.",
    duration: "5 sessões de 1 hora",
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
    price: "R$ 1000",
    type: "ou 4x sem juros",
    description:
      "Ideal para casais que desejam viver a verdadeira liberdade financeira sem abrir mão dos princípios bíblicos.",
    duration: "8 sessões de 1 hora + acompanhamento",
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAgendar = (plan) => {
    navigate("/agenda", {
      state: { selectedPlan: plan },
    });
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

      {isMobile && (
        <div className="plans_indicator-container">
          {plans.map((_, idx) => (
            <div
              key={idx}
              className={`plans_indicator ${idx === current ? "active" : ""}`}
            />
          ))}
        </div>
      )}

      <div className="plans_carousel-wrapper">
        {isMobile && (
          <button className="plans_nav-btn left-plans" onClick={prevSlide}>
            ←
          </button>
        )}

        <div className="plans_cards-wrapper">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plans_card ${
                isMobile && index !== current ? "hidden" : ""
              } plans_card-${index}`}
            >
              <h2>{plan.title}</h2>
              <p className="price">{plan.price}</p>
              {plan.type && <p className="type">{plan.type}</p>}
              <p className="desc">{plan.description}</p>
              <p className="duration">{plan.duration}</p>
              <ul>
                {plan.items.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
              <button
                className="plans_cta-btn"
                onClick={() => handleAgendar(plan)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                  >
                    <path
                      d="M5.177 1.50006V4.50006"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.85425 1.50006V4.50006"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6081 3.00006H3.42318C2.77741 3.00006 2.25391 3.67163 2.25391 4.50006V15.0001C2.25391 15.8285 2.77741 16.5001 3.42318 16.5001H11.6081C12.2538 16.5001 12.7773 15.8285 12.7773 15.0001V4.50006C12.7773 3.67163 12.2538 3.00006 11.6081 3.00006Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25391 7.50006H12.7773"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>
                    Agendar
                    <br />
                    Sessão
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {isMobile && (
          <button className="plans_nav-btn right-plans" onClick={nextSlide}>
            →
          </button>
        )}
      </div>
    </section>
  );
}

export default PlansSection;
