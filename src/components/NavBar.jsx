import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/navbar/logo.svg';
import logowhite from "../assets/images/navbar/logo-white.png"
import '../styles/NavBar.css';

function NavBar() {
  const mobileMenuRef = useRef(null);
  const location = useLocation();

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

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Sobre' },
    { path: '/plans', label: 'Planos' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header>
      <div className="menu__nav">
        <div className="overlay-image" />
        <div className="logo">
          <img src={logowhite} alt="Logo" />
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
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button className="menu-toggle" aria-label="Abrir menu" onClick={toggleMenu}>☰</button>
    </header>
  );
}

export default NavBar;