import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/navbar/logo.svg';
import '../styles/NavBar.css';

function NavBar() {
  const mobileMenuRef = useRef(null);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('open');
    }
  };

  const closeMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.remove('open');
    }
  };

  // useEffect(() => {
  //   const sections = document.querySelectorAll('section[id]');
  //   const observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setActiveLink(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.6,
  //     }
  //   );

  //   sections.forEach(section => observer.observe(section));
  //   return () => sections.forEach(section => observer.unobserve(section));
  // }, []);

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'plans', label: 'Planos' },
    { id: 'about', label: 'Sobre' },
    { id: 'principles', label: 'Princípios' },
    { id: 'depoimentos', label: 'Depoimentos' },
  ];

  return (
    <header>
      <div className="menu__nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="nav" ref={mobileMenuRef} id="mobileMenu">
          <svg
            className="nav-close"
            id="closeMenu"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            onClick={closeMenu}
          >
            <path
              d="M2 17L9.5 9.5M9.5 9.5L17 2M9.5 9.5L2 2M9.5 9.5L17 17"
              stroke="#1C4140"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`menu-link ${activeLink === item.id ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/blog"
                className="menu-link"
                onClick={closeMenu}
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="menu-toggle" aria-label="Abrir menu" onClick={toggleMenu}>☰</button>
    </header>
  );
}

export default NavBar;
