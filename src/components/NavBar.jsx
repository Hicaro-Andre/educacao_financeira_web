import logo from '../assets/images/navbar/logo.svg';

//* componente filho
function NavBar (){

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
  };

  const closeMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
  };
  
  return(
     <header>
      <div className="menu__nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="nav" id="mobileMenu">
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
            <li><a href="#hero" className="menu-link" onClick={closeMenu}>Home</a></li>
            <li>
              <a href="/agenda" className="menu-link" onClick={closeMenu}>Planos</a>
            </li>
            <li><a href="#mentoring" className="menu-link" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#principles" className="menu-link" onClick={closeMenu}>Princípios</a></li>
            <li><a href="#depoimentos" className="menu-link" onClick={closeMenu}>Depoimentos</a></li>
            <li><a href="/blog" className="menu-link" onClick={closeMenu}>Blog</a></li>
          </ul>
        </nav>
      </div>
      <button className="menu-toggle" aria-label="Abrir menu" onClick={toggleMenu}>☰</button>
    </header>
  )
}

export default NavBar;