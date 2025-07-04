import React, { useEffect, useRef } from 'react';
import '../styles/TipsSection.css';

import livro1 from '../assets/images/dicas/livro1.png';
import livro2 from '../assets/images/dicas/livro2.png';
import livro3 from '../assets/images/dicas/livro3.png';

function TipsSection() {
  const booksRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = booksRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (!mediaQuery.matches) return;

    let currentIndex = 0;

    const scrollToBook = (index) => {
      const scrollLeft = index * container.offsetWidth;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    };

    intervalRef.current = setInterval(() => {
      const totalBooks = container.children.length;
      currentIndex = (currentIndex + 1) % totalBooks;
      scrollToBook(currentIndex);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const books = [
    {
      id: 1,
      image: livro1,
      description:
        'O livro ensina a controlar esses impulsos para alcançar estabilidade e sucesso financeiro.',
    },
    {
      id: 2,
      image: livro2,
      description:
        'O livro revela a conexão entre emoções e decisões financeiras.',
    },
    {
      id: 3,
      image: livro3,
      description:
        'O livro ensina casais a planejar suas finanças e alcançar a prosperidade juntos.',
    },
  ];

  return (
    <section className="tips">
      <div className="tips__content">
        <h3>Conteúdo e Dicas</h3>
        <p>
          Confira minha seleção de livros e e-books recomendados para ajudá-lo
          a transformar suas finanças e fortalecer seu casamento com princípios
          bíblicos. Essas leituras irão guiá-lo rumo à estabilidade financeira e
          à prosperidade com propósito!
        </p>
      </div>

      <div className="tips__books" ref={booksRef}>
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