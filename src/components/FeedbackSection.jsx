import React, { useState, useEffect } from "react";
import "../styles/FeedbackSection.css";

import casal1 from "../assets/images/feedback/foto-feed-1.png";

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
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal1,
  },
  {
    destaque: "3-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal1,
  },
  {
    destaque: "4-Uma transformação que vai além das finanças!",
    texto:
      "A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.",
    autor: "Carlos e Mariana, São Paulo",
    imagem: casal1,
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
      } else if (largura >= 1200) {
        setCardsVisiveis(4);
      } else if (largura >= 990) {
        setCardsVisiveis(3);
      } else if (largura >= 700) {
        setCardsVisiveis(2);
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
          className={`card ${isAtual ? "grande" : "pequeno"}`}
        >
          {isAtual && (
            <button className="seta seta-esq" onClick={anterior}>❮</button>
          )}

          <div className="depoimento-card">
            <p className="destaque">"{depoimentos[index].destaque}"</p>
            <p className="texto">"{depoimentos[index].texto}"</p>
            <div className="autor">
              <img src={depoimentos[index].imagem} alt="Foto do casal" />
              <p><strong>{depoimentos[index].autor}</strong></p>
            </div>
          </div>

          {isAtual && (
            <button className="seta seta-dir" onClick={proximo}>❯</button>
          )}
        </div>
      );
    }

    return cards;
  };

  return (
    <section className="depoimentos-container" id="depoimentos">
      <h2>O Que Nossos Casais Dizem:</h2>
      <p className="intro">
        Os casais que passaram pela nossa mentoria compartilham histórias de
        transformação, não apenas financeira, mas também de unidade, paz e
        propósito em seus casamentos. Se você está pronto para escrever sua
        própria história de sucesso, entre em contato conosco.
      </p>

      <div className="carrossel">
        {getCardsVisiveis()}
      </div>
    </section>
  );
}

export default FeedbackSection;
