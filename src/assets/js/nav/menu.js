//TODO: MENU RESPONSIVO
const toggleBtn = document.querySelector('.menu-toggle');
const closeBtn = document.getElementById('closeMenu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('section[id]');

//TODO: Abrir o menu
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

//TODO: Fechar o menu
//! trecho a observar
closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
  closeBtn.classList.add('rotate');
  setTimeout(() => closeBtn.classList.remove('rotate'), 300);
});

//TODO: Fechar o menu ao clicar nos links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

//TODO: CLIQUE MANUAL - Destacar link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

//TODO: SCROLLSPY COMPRECISO
function updateActiveLinkOnScroll() {
  let currentSectionId = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    //TODO: Considera a seção como ativa se o topo está acima do meio da tela
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  if (currentSectionId) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  requestAnimationFrame(updateActiveLinkOnScroll);
}

//TODO: Iniciar loop de atualização do ScrollSpy
requestAnimationFrame(updateActiveLinkOnScroll);
