import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PlansSection.css";
import arrowLeft from "../assets/images/plans/arrow-esq.svg";
import arrowRight from "../assets/images/plans/arrow-dir.svg";

const plans = [
  {
    title: "Plano Essencial",
    price: "Gratuito",
    description: "Ideal para quem está começando",
    duration: "1 sessão de 1 hora",
    items: [
      "Exercício prático para identificar desafios financeiros do casal",
      "Conceitos básicos",
    ],
  },
  {
    title: "Plano Básico",
    price: "R$ 450",
    description: "Ideal para casais que querem mais controle",
    duration: "3 sessões de 1 hora",
    items: [
      "Como alinhar a visão financeira do casal",
      "Planejamento financeiro",
      "Como sair das dívidas e evitar novas",
      "Definição de metas",
    ],
  },
  {
    title: "Plano Intermediário",
    price: "R$ 600",
    type: "ou 2x sem juros",
    description:
      "Ideal para casais que querem sair da instabilidade financeira",
    duration: "5 sessões de 1 hora",
    items: [
      "Tudo do plano anterior +",
      "Acompanhamento por WhatsApp",
      "Como construir uma reserva de emergência",
      "Dicas de investimentos",
      "Planejamento financeiro para objetivos de curto, médio e longo prazo",
    ],
  },
  {
    title: "Plano Avançado",
    price: "R$ 1000",
    type: "ou 4x sem juros",
    description: "Ideal para casais que desejam viver a verdadeira liberdade",
    duration: "8 sessões de 1 hora + acompanhamento",
    items: [
      "Tudo dos planos anteriores +",
      "Diagnóstico financeiro",
      "Planejamento para aposentadoria e herança",
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
    navigate("/agenda", { state: { selectedPlan: plan } });
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const getPlanClass = (index) => {
    if (plans[index].title.includes("Básico")) return "plans_card-1";
    if (plans[index].title.includes("Avançado")) return "plans_card-3";
    return "";
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
            <img src={arrowLeft} alt="Voltar" />
          </button>
        )}

        <div className="plans_cards-wrapper">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plans_card ${
                isMobile && index !== current ? "hidden" : ""
              } ${getPlanClass(index)}`}
            >
              <h2>{plan.title}</h2>
              <p className="price">{plan.price}</p>
              {plan.type && <p className="type">{plan.type}</p>}
              <p className="desc">{plan.description}</p>
              <p className="duration">{plan.duration}</p>
              <ul>
                {plan.items.map((item, i) => (
                  <li key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M17.1666 5L7.99992 14.1667L3.83325 10"
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
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                    <path
                      d="M5.177 1.5V4.5M9.854 1.5V4.5M11.608 3H3.423C2.777 3 2.254 3.672 2.254 4.5V15C2.254 15.828 2.777 16.5 3.423 16.5H11.608C12.254 16.5 12.777 15.828 12.777 15V4.5C12.777 3.672 12.254 3 11.608 3ZM2.254 7.5H12.777"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
            <img src={arrowRight} alt="Avançar" />
          </button>
        )}
      </div>
    </section>
  );
}

export default PlansSection;
