import React from 'react';
import '../styles/Benefits.css';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="section-header">
        <h2>Para você se...</h2>
      </div>

      <div className="benefits-list positive">
        <ul>
          <li>Deseja aprender a lidar com o dinheiro de forma bíblica e consciente</li>
          <li>Quer construir unidade financeira no casamento</li>
          <li>Está disposto(a) a aplicar princípios práticos e espirituais</li>
          <li>Busca equilíbrio entre fé, propósito e prosperidade</li>
          <li>Quer sair das dívidas, organizar suas finanças e viver com liberdade</li>
        </ul>
      </div>

      <div className="section-header negative-header">
        <h2>Não é para você se...</h2>
      </div>

      <div className="benefits-list negative">
        <ul>
          <li>Não está aberto a mudanças nos hábitos financeiros</li>
          <li>Prefere manter decisões financeiras individuais sem diálogo</li>
          <li>Não acredita na conexão entre fé e finanças</li>
          <li>Busca apenas soluções mágicas sem esforço pessoal</li>
          <li>Não está disposto a seguir um plano financeiro</li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;