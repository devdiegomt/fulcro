import { useScrollReveal } from '../hooks/useScrollReveal';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: '🎯',
    title: 'Hablamos de negocio, no de tecnología',
    description:
      'No te explicamos qué stack usamos ni qué framework elegimos. Te decimos cuántas citas más vas a recibir, cuántas horas vas a ahorrar, qué problema concreto desaparece.',
  },
  {
    icon: '📋',
    title: 'Precio claro desde el principio',
    description:
      'El precio que acordamos es el precio que pagas. Sin "horas adicionales", sin "cambios de alcance" que no se discutieron. Si algo cambia, te avisamos antes de hacerlo.',
  },
  {
    icon: '⚡',
    title: 'Entregamos en semanas, no en meses',
    description:
      'Una landing page no debería tomar 3 meses. Un bot de WhatsApp tampoco. Trabajamos con plazos reales, comunicación directa y sin cuellos de botella de aprobaciones internas.',
  },
  {
    icon: '🤝',
    title: 'Un aliado, no un proveedor',
    description:
      'Cuando terminamos un proyecto, no desaparecemos. Estamos disponibles para evolucionar la solución, resolver dudas y ayudarte a pensar el siguiente paso. Eso es lo que hace un aliado real.',
  },
];

function WhyCard({ reason, delay }: { reason: Reason; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div className="why-card reveal" ref={ref}>
      <div className="why-icon">{reason.icon}</div>
      <div className="why-title">{reason.title}</div>
      <p className="why-desc">{reason.description}</p>
    </div>
  );
}

export default function WhyFulcro() {
  const labelRef = useScrollReveal<HTMLSpanElement>();
  const h2Ref    = useScrollReveal<HTMLHeadingElement>(100);
  const subRef   = useScrollReveal<HTMLParagraphElement>(200);

  return (
    <section className="section section-dark" id="por-que">
      <div className="container">
        <span className="label reveal" ref={labelRef}>Por qué Fulcro</span>
        <h2 className="section-h2 reveal" ref={h2Ref}>
          No somos la agencia grande.<br />Tampoco el <em>freelancer suelto</em>.
        </h2>
        <p className="section-sub reveal" ref={subRef}>
          Somos el punto intermedio que la mayoría de negocios necesita pero no
          encuentra: expertos reales, sin los costos ni la burocracia de una agencia.
        </p>

        <div className="why-grid">
          {reasons.map((reason, i) => (
            <WhyCard key={reason.title} reason={reason} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
