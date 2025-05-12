//TODO: menu toggle responsivo
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});


//TODO: navegação ativa dos links
  const navLinks = document.querySelectorAll('.nav a');

  //? Clique: marcar link ativo
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  //? ScrollSpy: destacar link baseado na seção visível
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 //? 60% visível
  });

  sections.forEach(section => observer.observe(section));
