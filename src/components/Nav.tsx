import { useState, useEffect } from 'react';

const LogoMark = () => (
  <div className="nav-logo-mark">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fulcro">
      <polygon points="4,4 46,4 50,88" fill="#1D9E75" />
      <polygon points="54,4 96,4 50,88" fill="#27C492" />
      <rect x="36" y="92" width="28" height="5" rx="2.5" fill="#1D9E75" />
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
