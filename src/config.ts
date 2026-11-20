// ─── Todo lo que se edita del sitio está aquí ───────────────────────────────
//
// Al comprar el dominio: cambia `sitio.url` y vuelve a desplegar. Los enlaces,
// el sitemap, las etiquetas para Google y las páginas legales lo toman de acá.
//
// Lo que dice «COMPLETAR» se avisa en cada `npm run build` y se ve tal cual
// en las páginas legales: llénalo antes de pedirle a ePayco que revise.

export const sitio = {
  url: 'https://fulcrotech.vercel.app',
  nombre: 'Fulcro',
  lema: 'Un punto de apoyo para tu negocio',
  descripcion:
    'Fulcro hace software en Colombia: productos propios como Qlarity y Margen, videojuegos como Acidito, desarrollo a la medida, automatizaciones y clases de programación.',
};

/** Quien responde legalmente: la persona natural del RUT. */
export const titular = {
  nombre: 'Diego Alejandro Mayorga Torres',
  documento: '1007718065-8',
  tipo: 'persona natural',
  ciudad: 'Zipaquirá, Cundinamarca, Colombia',
};

export const contacto = {
  whatsapp: '573000180855', // formato internacional, sin + ni espacios
  email: 'fulcro.dev@gmail.com',
  instagram: 'fulcrotech',
};

export const qlarity = {
  // URL del panel (la de Vercel). Vacía: los botones de «Probar» llevan a
  // WhatsApp en lugar de al registro.
  app: 'https://qlarity.vercel.app',
  planes: [
    {
      nombre: 'Estudio',
      precio: 149000,
      para: 'Un lavadero o estudio de detailing con su equipo.',
      incluye: [
        'Hasta 4 operarios y 4 bahías',
        'Turnos sin límite',
        'Página de reservas con tu enlace',
        'Tablero, agenda, clientes y caja',
        'Fotos de recepción y reclamos',
        'Sellos, tiquetera y encuestas',
        'Reportes',
      ],
    },
    {
      nombre: 'Estudio Pro',
      precio: 249000,
      para: 'Cuando creces o necesitas facturar y escribir por WhatsApp.',
      destacado: true,
      incluye: [
        'Todo lo de Estudio',
        'Operarios, bahías y servicios sin límite',
        'Facturación electrónica',
        'Mensajes por WhatsApp',
      ],
    },
  ],
  diasPrueba: 14,
  descuentoFundador: '30% el primer año para los primeros lavaderos',
};

export const margen = {
  web: 'https://margennotas.com',
  play: 'https://play.google.com/store/apps/details?id=com.ifanidado.margen',
  privacidad: 'https://margennotas.com/privacidad.html',
};

export const acidito = {
  // Donde se juega. Vacío: los botones de «Jugar» dicen «Pronto» y llevan a
  // Instagram para enterarse cuando salga.
  jugar: 'https://babyacid.vercel.app',
  niveles: 51,
  temporadas: 2,
};

export const aprende = {
  marca: 'ifanidado',
  instagram: 'ifanidado',
  // La página de Vercel con las lecturas paso a paso. Vacía: no se muestra.
  lecturas: 'https://ifanidado.vercel.app',
  // El canal, cuando exista. Vacío: aparece como «pronto».
  youtube: '',
};

/** Desarrollo a la medida. Precios de partida en pesos: revísalos. */
export const servicios = [
  {
    nombre: 'Tu negocio en internet',
    para: 'Para quien no tiene página o tiene una que ya no lo representa.',
    precio: 'Desde $1.600.000',
    nota: 'Pago único · 2 a 3 semanas',
    incluye: [
      'Página de 1 a 5 secciones, hecha para el celular',
      'Dominio y hosting configurados',
      'Botón de WhatsApp y formulario',
      'Perfil de Google y SEO básico',
    ],
  },
  {
    nombre: 'Automatizar lo que repites',
    para: 'Para quien pierde horas confirmando citas, respondiendo lo mismo o pasando datos a mano.',
    precio: 'Desde $3.600.000',
    nota: 'Proyecto + mantenimiento opcional',
    destacado: true,
    incluye: [
      'Reservas en línea con recordatorios',
      'Respuestas y avisos por WhatsApp',
      'Reportes que se arman solos',
      'Conexión entre las herramientas que ya usas',
    ],
  },
  {
    nombre: 'Un sistema a tu medida',
    para: 'Para quien necesita algo que no existe o que ningún programa hace como su negocio lo necesita.',
    precio: 'Desde $10.000.000',
    nota: 'Por etapas · con mantenimiento mensual',
    incluye: [
      'Diagnóstico y diseño antes de escribir código',
      'Usuarios, permisos y varias sedes',
      'Pagos e integraciones',
      'Puesto en producción, con soporte',
    ],
  },
];

// ─── Ayudas ─────────────────────────────────────────────────────────────────

export const pesos = (n: number) => '$' + n.toLocaleString('es-CO');

export function waLink(mensaje: string): string {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** A dónde lleva «Probar Qlarity»: el registro si hay panel, si no WhatsApp. */
export function qlarityProbar(): string {
  return qlarity.app
    ? `${qlarity.app.replace(/\/$/, '')}/signup`
    : waLink('Hola, quiero probar Qlarity en mi lavadero');
}

export function pendientes(): string[] {
  const faltan: string[] = [];
  if (titular.nombre.startsWith('COMPLETAR')) faltan.push('titular.nombre');
  if (titular.documento.startsWith('COMPLETAR')) faltan.push('titular.documento');
  if (!qlarity.app) faltan.push('qlarity.app (los botones de Qlarity van a WhatsApp)');
  if (!acidito.jugar) faltan.push('acidito.jugar (el botón de Acidito dice «Pronto»)');
  return faltan;
}
