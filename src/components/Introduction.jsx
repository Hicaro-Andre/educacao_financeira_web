import React from 'react';
import '../styles/Introduction.css';


const Introduction = () => {
  return (
    <section className="introducao">
      <div className="texto">
        <h2>Introdução</h2>
        <p>
          Olá! Eu sou Gisele Almeida, mentora de finanças especializada em ajudar
          casais cristãos a construírem uma vida financeira saudável e alinhada com os valores
          de fé, amor e propósito. Juntos, vamos transformar a forma como vocês lidam com o dinheiro,
          promovendo paz, prosperidade e união no lar.
        </p>
        <button className="btn">Saiba mais</button>
      </div>

      {/* <div className="video">
        <img src={imagemVideo} alt="Miniatura do vídeo" />
        <div className="icone-play">
          <FaPlay />
        </div>
      </div> */}
    </section>
  );
};

export default Introduction;
