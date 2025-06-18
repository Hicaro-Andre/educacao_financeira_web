import React, { useState, useEffect } from "react";
import "../styles/FeedbackSection.css";

import casal1 from "../assets/images/feedback/foto-feed-1.png";
import casal2 from "../assets/images/feedback/vite.svg"

const depoimentos = [
  {
    destaque: "1-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal1,
  },
  {
    destaque: "2-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "São PAulo",
    imagem: casal2,
  },
  {
    destaque: "3-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Flamengo",
    imagem: casal1,
  },
  {
    destaque: "4-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal2,
  },
  {
    destaque: "5-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal1,
  },
  {
    destaque: "6-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal1,
  },
];

function FeedbackSection() {
  const [atual, setAtual] = useState(0);
  const [cardsVisiveis, setCardsVisiveis] = useState(1);

  useEffect(() => {
    const atualizarCards = () => {
      const largura = window.innerWidth;
      if (largura >= 1400) {
        setCardsVisiveis(5);
      } else if (largura >= 768) {
        setCardsVisiveis(3);
      } else {
        setCardsVisiveis(1);
      }
    };

    atualizarCards();
    window.addEventListener("resize", atualizarCards);
    return () => window.removeEventListener("resize", atualizarCards);
  }, []);

  const proximo = () => {
    setAtual((prev) => (prev + 1) % depoimentos.length);
  };

  const anterior = () => {
    setAtual((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  const getCardsVisiveis = () => {
    const cards = [];
    const metade = Math.floor(cardsVisiveis / 2);

    for (let i = -metade; i <= metade; i++) {
      if (cards.length >= cardsVisiveis) break;

      const index = (atual + i + depoimentos.length) % depoimentos.length;
      const isAtual = i === 0 || cardsVisiveis === 1;

      cards.push(
        <div
          key={index}
          className={`cardfeed ${isAtual ? "grande" : "pequeno"}`}
        >
          {isAtual && (
            <button className="arrow arrow-esq" onClick={anterior}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="32"
                viewBox="0 0 21 32"
                fill="none"
              >
                <g filter="url(#filter0_d_430_359)">
                  <path
                    d="M14.8901 2.00002L5.99988 12.0156L14.8901 22.0312"
                    stroke="url(#paint0_linear_430_359)"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_430_359"
                    x="0.5"
                    y="0.5"
                    width="19.8901"
                    height="31.0312"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_430_359"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_430_359"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_430_359"
                    x1="14.6514"
                    y1="16.7854"
                    x2="3.8876"
                    y2="12.1365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7D6000" stop-opacity="0.71" />
                    <stop
                      offset="0.195"
                      stop-color="#D2B556"
                      stop-opacity="0.69"
                    />
                    <stop
                      offset="0.355"
                      stop-color="#9E7A04"
                      stop-opacity="0.63"
                    />
                    <stop
                      offset="0.525"
                      stop-color="#DEC369"
                      stop-opacity="0.8"
                    />
                    <stop
                      offset="0.7"
                      stop-color="#977400"
                      stop-opacity="0.69"
                    />
                    <stop
                      offset="0.855"
                      stop-color="#D5B859"
                      stop-opacity="0.89"
                    />
                    <stop offset="1" stop-color="#846501" stop-opacity="0.94" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          )}

          <div className="feedback_depoimento-card">
            <p className="feedback_destaque">"{depoimentos[index].destaque}"</p>
            <p className="feedback_texto">"{depoimentos[index].texto}"</p>
            <div className="feedback_autor">
              <p>
                <strong>{depoimentos[index].autor}</strong>
              </p>
              <img src={depoimentos[index].imagem} alt="Foto do casal" />
            </div>
          </div>

          {isAtual && (
            <button className="arrow arrow-dir" onClick={proximo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="32"
                viewBox="0 0 21 32"
                fill="none"
              >
                <g filter="url(#filter0_d_430_360)">
                  <path
                    d="M6 2.00002L14.8903 12.0156L6 22.0312"
                    stroke="url(#paint0_linear_430_360)"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_430_360"
                    x="0.5"
                    y="0.5"
                    width="19.8901"
                    height="31.0312"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_430_360"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_430_360"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_430_360"
                    x1="6.23875"
                    y1="16.7854"
                    x2="17.0025"
                    y2="12.1365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7D6000" stop-opacity="0.71" />
                    <stop
                      offset="0.195"
                      stop-color="#D2B556"
                      stop-opacity="0.69"
                    />
                    <stop
                      offset="0.355"
                      stop-color="#9E7A04"
                      stop-opacity="0.63"
                    />
                    <stop
                      offset="0.525"
                      stop-color="#DEC369"
                      stop-opacity="0.8"
                    />
                    <stop
                      offset="0.7"
                      stop-color="#977400"
                      stop-opacity="0.69"
                    />
                    <stop
                      offset="0.855"
                      stop-color="#D5B859"
                      stop-opacity="0.89"
                    />
                    <stop offset="1" stop-color="#846501" stop-opacity="0.94" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          )}
        </div>
      );
    }

    return cards;
  };

  return (
    <section className="feedback_container" id="feedback">
      <h2>O Que Nossos Casais Dizem:</h2>
      <p className="feedback-subtitle">
        Os casais que passaram pela nossa mentoria compartilham histórias de
        transformação, não apenas financeira, mas também de unidade, paz e
        propósito em seus casamentos. Se você está pronto para escrever sua
        própria história de sucesso, entre em contato conosco.
      </p>

      <div className="feed_carrossel">{getCardsVisiveis()}</div>
    </section>
  );
}

export default FeedbackSection;
