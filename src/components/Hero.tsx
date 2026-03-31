import { useScrollReveal } from '../hooks/useScrollReveal';
import { waLink } from '../config';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.546 4.082 1.5 5.8L0 24l6.335-1.65A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.214-3.729.977.994-3.63-.235-.374A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

const stats = [
  { num: '3',    label: 'semanas de entrega promedio' },
  { num: '100%', label: 'precio acordado antes de empezar' },
  { num: '0',    label: 'jerga técnica en las conversaciones' },
] as const;

export default function Hero() {
  const tagRef    = useScrollReveal<HTMLDivElement>();
  const h1Ref     = useScrollReveal<HTMLHeadingElement>(100);
  const subRef    = useScrollReveal<HTMLParagraphElement>(200);
  const ctaRef    = useScrollReveal<HTMLDivElement>(300);
  const statsRef  = useScrollReveal<HTMLDivElement>(400);

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="container">

        <div className="reveal hero-tag" ref={tagRef}>
          <div className="hero-tag-dot" />
          <span>Abierto a nuevos clientes · Colombia</span>
        </div>

        <h1 className="reveal hero-h1" ref={h1Ref}>
          La tecnología que<br />hace crecer tu <em>negocio</em>
        </h1>

        <p className="reveal hero-sub" ref={subRef}>
          Construimos páginas web, automatizaciones y soluciones a medida
          para negocios de servicios. Sin rodeos, sin jerga técnica,
          con resultados que se miden en pesos o en horas ahorradas.
        </p>

        <div className="reveal hero-ctas" ref={ctaRef}>
          <a
            href={waLink('Hola, quiero conocer los servicios de Fulcro')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <WhatsAppIcon />
            Hablar por WhatsApp
          </a>
          <a href="#servicios" className="btn btn-ghost btn-lg">
            Ver servicios
          </a>
        </div>

        <div className="reveal hero-stats" ref={statsRef}>
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
