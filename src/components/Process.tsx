import { useScrollReveal } from '../hooks/useScrollReveal';

interface Step {
  num: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Diagnóstico',
    description:
      'Antes de escribir una línea de código, entendemos tu negocio. Una llamada de 30 minutos donde tú hablas y nosotros escuchamos. Sin presentaciones, sin demos. Solo preguntas reales.',
  },
  {
    num: '02',
    title: 'Propuesta clara',
    description:
      'En 48 horas recibes una propuesta de una sola página: qué construimos, qué no incluye, cuánto cuesta y en cuánto tiempo lo tienes. Precio fijo, sin ajustes sorpresa.',
  },
  {
    num: '03',
    title: 'Entrega y evolución',
    description:
      'Construimos, entregamos, ajustamos. Si algo no funciona como se acordó, lo resolvemos. El objetivo no es cerrar el proyecto — es que tu negocio funcione mejor.',
  },
];

function ProcessStep({ step, delay }: { step: Step; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div className="process-step reveal" ref={ref}>
      <div className="process-step-num">{step.num}</div>
      <div className="process-step-title">{step.title}</div>
      <p className="process-step-desc">{step.description}</p>
    </div>
  );
}

export default function Process() {
  const labelRef = useScrollReveal<HTMLSpanElement>();
  const h2Ref    = useScrollReveal<HTMLHeadingElement>(100);
  const subRef   = useScrollReveal<HTMLParagraphElement>(200);

  return (
    <section className="section" id="proceso">
      <div className="container">
        <span className="label reveal" ref={labelRef}>Cómo funciona</span>
        <h2 className="section-h2 reveal" ref={h2Ref}>
          Sin sorpresas.<br />Sin <em>vueltas</em> innecesarias.
        </h2>
        <p className="section-sub reveal" ref={subRef}>
          Desde el primer mensaje hasta el último deploy, el proceso es
          claro, predecible y sin letra pequeña.
        </p>

        <div className="process-grid">
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
