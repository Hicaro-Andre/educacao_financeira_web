import React, { useState } from 'react';
import "../styles/FeedbackSection.css"

import casal1 from "../assets/images/feedback/foto-feed-1.png"

const depoimentos = [
  {
    destaque: '1-Uma transformação que vai além das finanças!',
    texto: 'A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.',
    autor: 'Carlos e Mariana, São Paulo',
    imagem: casal1, // substitua pela imagem real
  },
   {
    destaque: '2-Uma transformação que vai além das finanças!',
    texto: 'A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.',
    autor: 'Carlos e Mariana, São Paulo',
    imagem: casal1, // substitua pela imagem real
  },
   {
    destaque: '3-Uma transformação que vai além das finanças!',
    texto: 'A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.',
    autor: 'Carlos e Mariana, São Paulo',
   imagem: casal1,// substitua pela imagem real
  },
   {
    destaque: '4-Uma transformação que vai além das finanças!',
    texto: 'A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.',
    autor: 'Carlos e Mariana, São Paulo',
    imagem: casal1, // substitua pela imagem real
  },
   {
    destaque: '5-Uma transformação que vai além das finanças!',
    texto: 'A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.',
    autor: 'Carlos e Mariana, São Paulo',
    imagem: casal1, // substitua pela imagem real
  },
   {
    destaque: '6-Uma transformação que vai além das finanças!',
    texto: 'A mentoria da Gisele não apenas nos ajudou a organizar nossas finanças, mas também trouxe uma nova perspectiva sobre como gerenciar o dinheiro dentro do nosso casamento.',
    autor: 'Carlos e Mariana, São Paulo',
    imagem: casal1, // substitua pela imagem real
  },
];


function FeedbackSection (){

  const [atual, setAtual] = useState(0);

  const proximo = () => {
    setAtual((prev) => (prev + 1) % depoimentos.length);
  };

  const anterior = () => {
    setAtual((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return(
    <section className="depoimentos-container">
      <h2>O Que Nossos Casais Dizem:</h2>
      <p className="intro">
        Os casais que passaram pela nossa mentoria compartilham histórias de transformação, não apenas financeira, mas também de unidade, paz e propósito em seus casamentos.
        Se você está pronto para escrever sua própria história de sucesso, entre em contato conosco.
      </p>

      <div className="depoimento-card">
        <button className="seta seta-esq" onClick={anterior}>❮</button>

        <div className="conteudo">
          <p className="destaque">"{depoimentos[atual].destaque}"</p>
          <p className="texto">"{depoimentos[atual].texto}"</p>
          <div className="autor">
            <img src={depoimentos[atual].imagem} alt="Foto do casal" />
            <p><strong>{depoimentos[atual].autor}</strong></p>
          </div>
        </div>

        <button className="seta seta-dir" onClick={proximo}>❯</button>
      </div>
    </section>
  )
}

export default FeedbackSection;