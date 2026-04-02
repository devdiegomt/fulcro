import { useState, useEffect } from 'react';

const LogoMark = () => (
  <div className="nav-logo-mark">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L14 13H2L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8" cy="13" r="1.5" fill="white"/>
    </svg>
  </div>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <LogoMark />
          Fulcro
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#para-quien" onClick={closeMenu}>Para quién</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#proceso" onClick={closeMenu}>Proceso</a></li>
          <li>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '14px', color: 'white' }}
            >
              Hablar con nosotros
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
