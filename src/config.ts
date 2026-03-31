// ─── Configuración de Fulcro ──────────────────────────────
// Edita estos valores antes de publicar

export const config = {
  // CAMBIAR: tu número de WhatsApp en formato internacional (sin + ni espacios)
  whatsapp: '573223772019',

  // CAMBIAR: tu email de contacto
  email: 'fulcro.dev@gmail.com',

  // CAMBIAR: tu handle de Instagram (sin @)
  instagram: 'fulcrotech',

  // Datos de la empresa
  city: 'Zipaquirá, Colombia',
  year: new Date().getFullYear(),
} as const;

// Genera el link de WhatsApp con mensaje predefinido
export function waLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${config.whatsapp}?text=${encoded}`;
}
