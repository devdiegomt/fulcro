import { useScrollReveal } from '../hooks/useScrollReveal';
import { waLink } from '../config';

interface ServiceTier {
  tier: string;
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  featured?: boolean;
  waMessage: string;
}

const services: ServiceTier[] = [
  {
    tier: 'Nivel 01',
    name: 'Presencia',
    description: 'Para negocios que necesitan existir en digital o que tienen una web que ya no los representa.',
    price: 'Desde $400 USD',
    priceNote: 'pago único · entrega en 2–3 semanas',
    features: [
      'Landing page profesional (1–5 secciones)',
      'Dominio + hosting configurado',
      'Formulario de contacto y botón WhatsApp',
      'Google Business + SEO básico',
      'Diseño responsive para celular',
    ],
    waMessage: 'Hola, me interesa el servicio de Presencia de Fulcro',
  },
  {
    tier: 'Nivel 02',
    name: 'Operaciones',
    description: 'Para negocios que pierden tiempo en procesos manuales: confirmar citas, responder WhatsApps, gestionar agendas.',
    price: 'Desde $900 USD',
    priceNote: 'proyecto + retainer opcional',
    features: [
      'Todo lo del nivel Presencia',
      'Sistema de citas / reservas online',
      'Bot de WhatsApp automatizado',
      'Recordatorios automáticos a clientes',
      'Flujos de automatización configurados',
      'Panel de administración básico',
    ],
    featured: true,
    waMessage: 'Hola, me interesa el servicio de Operaciones de Fulcro',
  },
  {
    tier: 'Nivel 03',
    name: 'Escala',
    description: 'Para startups o negocios que necesitan una solución propia que no encuentran en el mercado.',
    price: 'Desde $2.500 USD',
    priceNote: 'proyecto + mantenimiento mensual',
    features: [
      'Diagnóstico y arquitectura técnica',
      'Desarrollo de plataforma SaaS',
      'Autenticación y múltiples cuentas',
      'Integraciones (pagos, APIs externas)',
      'Despliegue en producción',
      'Soporte y evolución continua',
    ],
    waMessage: 'Hola, me interesa el servicio de Escala de Fulcro',
  },
];

function ServiceCard({ service, delay }: { service: ServiceTier; delay: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>(delay);

  return (
    <div
      ref={cardRef}
      className={`service-card reveal${service.featured ? ' service-card--featured' : ''}`}
    >
      {service.featured && (
        <div className="service-featured-badge">Más solicitado</div>
      )}
      <div className="service-tier">{service.tier}</div>
      <div className="service-name">{service.name}</div>
      <div className="service-desc">{service.description}</div>
      <div className="service-price">{service.price}</div>
      <div className="service-price-note">{service.priceNote}</div>
      <ul className="service-list">
        {service.features.map(f => (
          <li key={f}>
            <span className="service-list-dot" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={waLink(service.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-full${service.featured ? ' btn-primary' : ' btn-ghost'}`}
      >
        Me interesa este nivel
      </a>
    </div>
  );
}

export default function Services() {
  const labelRef = useScrollReveal<HTMLSpanElement>();
  const h2Ref    = useScrollReveal<HTMLHeadingElement>(100);
  const subRef   = useScrollReveal<HTMLParagraphElement>(200);

  return (
    <section className="section section-dark" id="servicios">
      <div className="container">
        <span className="label reveal" ref={labelRef}>Servicios</span>
        <h2 className="section-h2 reveal" ref={h2Ref}>
          Tres formas de <em>trabajar</em><br />con Fulcro
        </h2>
        <p className="section-sub reveal" ref={subRef}>
          Cada negocio está en un punto diferente. Elegimos el nivel correcto
          y construimos desde ahí, sin cobrar lo que no necesitas.
        </p>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
