import { config } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">
          © {config.year} Fulcro · {config.city}
        </span>
        <nav className="footer-links">
          <a
            href={`https://instagram.com/${config.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href={`mailto:${config.email}`}>Email</a>
          <a href="#servicios">Servicios</a>
        </nav>
      </div>
    </footer>
  );
}
