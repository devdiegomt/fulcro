import { useScrollReveal } from '../hooks/useScrollReveal';

interface Industry {
  icon: string;
  name: string;
}

const industries: Industry[] = [
  { icon: '✂️',  name: 'Barberías'       },
  { icon: '🚗',  name: 'Lavaderos'       },
  { icon: '🏥',  name: 'Clínicas'        },
  { icon: '💆',  name: 'Spas & Bienestar'},
  { icon: '🍽️', name: 'Restaurantes'    },
  { icon: '🔧',  name: 'Talleres'        },
  { icon: '🚀',  name: 'Startups'        },
  { icon: '🏢',  name: 'Pymes'           },
];

export default function ForWho() {
  const labelRef = useScrollReveal<HTMLSpanElement>();
  const h2Ref    = useScrollReveal<HTMLHeadingElement>(100);
  const subRef   = useScrollReveal<HTMLParagraphElement>(200);
  const gridRef  = useScrollReveal<HTMLDivElement>(300);

  return (
    <section className="section" id="para-quien" style={{ paddingTop: 0 }}>
      <div className="container">
        <span className="label reveal" ref={labelRef}>Para quién es Fulcro</span>
        <h2 className="section-h2 reveal" ref={h2Ref}>
          Negocios de servicios que<br />quieren operar <em>mejor</em>
        </h2>
        <p className="section-sub reveal" ref={subRef}>
          No trabajamos con todo el mundo. Nos especializamos en negocios
          de servicios con procesos manuales que pueden automatizarse y
          clientes que merecen una mejor experiencia digital.
        </p>

        <div className="industries-grid reveal" ref={gridRef}>
          {industries.map(({ icon, name }) => (
            <div key={name} className="industry-card">
              <div className="industry-icon">{icon}</div>
              <div className="industry-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
