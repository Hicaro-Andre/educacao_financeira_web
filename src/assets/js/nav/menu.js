//TODO: menu toggle responsivo
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

//TODO: navegação ativa dos links Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const closeBtn = document.getElementById("closeMenu");
    const links = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section[id]");

    // Abre o menu
    menuToggle.addEventListener("click", () => {
      nav.classList.add("open");
    });

    // Fecha o menu e roda o X
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("open");
      closeBtn.classList.add("rotate");
      setTimeout(() => closeBtn.classList.remove("rotate"), 300);
    });

    // Scroll Spy
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });

  
//TODO: navegação ativa dos links Desktop
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