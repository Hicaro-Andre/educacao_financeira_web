import React, { useEffect, useRef } from "react";
import "../styles/Introduction.css";
import teste from "../assets/images/intro/Frame 66.png";

const Introduction = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = introRef.current.querySelectorAll(".fade-in-up");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro" ref={introRef}>
      <div className="intro__container fade-in-up">
        <div className="intro__content fade-in-up">
          <div className="intro__texto fade-in-up">
            <h2 className="intro__titulo">Introdução</h2>
            <p className="intro__descricao">
              Olá! Eu sou Gisele Almeida, mentora de finanças especializada em
              ajudar casais cristãos a construírem uma vida financeira saudável e
              alinhada com os valores de fé, amor e propósito. Juntos, vamos
              transformar a forma como vocês lidam com o dinheiro, promovendo paz,
              prosperidade e união no lar.
            </p>
            <button
              className="intro__btn"
              onClick={() => (window.location.href = "/about")}
              aria-label="Saiba mais sobre Gisele Almeida"
            >
              Saiba mais
            </button>
          </div>

          <div className="intro__video fade-in-up">
            <img
              src={teste}
              alt="Miniatura do vídeo"
              className="intro__video-thumbnail"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
