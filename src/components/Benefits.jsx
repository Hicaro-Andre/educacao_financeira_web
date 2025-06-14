import React, { useEffect, useRef } from 'react';
import '../styles/Benefits.css';

const Benefits = () => {
  const positiveRef = useRef(null);
  const negativeRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (positiveRef.current) observer.observe(positiveRef.current);
    if (negativeRef.current) observer.observe(negativeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="benefits">
      <h3>É Para Você? Descubra Aqui</h3>

      <div className="benefits-grid">
        <div className="benefits-list positive" ref={positiveRef}>
          <div className="section-header">
            <h2>É Para você se...</h2>
          </div>
          <ul>
            <li>Deseja aprender a lidar com o dinheiro de forma bíblica e consciente</li>
            <li>Quer construir unidade financeira no casamento</li>
            <li>Está disposto(a) a aplicar princípios práticos e espirituais</li>
            <li>Busca equilíbrio entre fé, propósito e prosperidade</li>
            <li>Quer sair das dívidas, organizar suas finanças e viver com liberdade</li>
          </ul>
        </div>

        <div className="benefits-list negative" ref={negativeRef}>
          <div className="section-header negative-header">
            <h2>Não é para você se...</h2>
          </div>
          <ul>
            <li>Não está aberto a mudanças nos hábitos financeiros</li>
            <li>Prefere manter decisões financeiras individuais sem diálogo</li>
            <li>Não acredita na conexão entre fé e finanças</li>
            <li>Busca apenas soluções mágicas sem esforço pessoal</li>
            <li>Não está disposto a seguir um plano financeiro</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
