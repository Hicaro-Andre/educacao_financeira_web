import React, { useEffect, useRef } from 'react';
import '../styles/TipsSection.css';

import livro1 from '../assets/images/dicas/livro1.png';
import livro2 from '../assets/images/dicas/livro2.png';
import livro3 from '../assets/images/dicas/livro3.png';

function TipsSection() {
  const booksRef = useRef(null);

  useEffect(() => {
  const container = booksRef.current;
  if (!container) return;

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (!mediaQuery.matches) return;

  let scrollAmount = 0;
  const scrollStep = 280 + 16;

  const delay = setTimeout(() => {
    const interval = setInterval(() => {
      scrollAmount += scrollStep;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 3000);

    // Cleanup
    return () => clearInterval(interval);
  }, 500); // Espera 500ms antes de começar o auto scroll

  return () => clearTimeout(delay);
}, []);

  const books = [
    {
      id: 1,
      image: livro1,
      description: "O livro ensina a controlar esses impulsos para alcançar estabilidade e sucesso financeiro."
    },
    {
      id: 2,
      image: livro2,
      description: "O livro revela a conexão entre emoções e decisões financeiras."
    },
    {
      id: 3,
      image: livro3,
      description: "O livro ensina casais a planejar suas finanças e alcançar a prosperidade juntos."
    }
  ];

  return (
    <section className="dicas">
      <div className="dicas__content">
        <h3>Conteúdo e Dicas</h3>
        <p>
          Confira minha seleção de livros e e-books recomendados para ajudá-lo a
          transformar suas finanças e fortalecer seu casamento com princípios
          bíblicos. Essas leituras irão guiá-lo rumo à estabilidade financeira e
          à prosperidade com propósito!
        </p>
      </div>

      <div className="dicas__books" ref={booksRef}>
        {books.map((book) => (
          <div className="books" key={book.id}>
            <img
              className="books__images"
              alt={`Capa do livro ${book.id}`}
              src={book.image}
            />
            <div className="books__text">{book.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TipsSection;