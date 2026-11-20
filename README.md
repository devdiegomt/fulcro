# Fulcro

El sitio de Fulcro: la marca, sus productos (Qlarity, Margen), el desarrollo a la
medida, Aprende (ifanidado) y las páginas legales que revisa ePayco.

Astro, sitio estático. Cada página es su propio HTML: carga rápido, Google la
indexa y cada producto tiene su URL para compartir.

## Lo que se edita

**Todo está en `src/config.ts`**: datos del titular (nombre y NIT del RUT),
contacto, URL del panel de Qlarity, precios de Qlarity y de los servicios,
enlaces de Margen y de Aprende.

- Lo que dice `COMPLETAR` se avisa en cada build y aparece resaltado en las
  páginas legales. Llénalo antes de pedir la revisión de ePayco.
- **Al comprar el dominio**: cambia `sitio.url` en `src/config.ts` y la línea
  `Sitemap:` de `public/robots.txt`, conecta el dominio en Vercel (Settings →
  Domains) y vuelve a desplegar.

## Páginas

| Ruta | Qué es |
|---|---|
| `/` | Fulcro: productos, a la medida, Aprende, cómo trabajo |
| `/qlarity` | Página de venta de Qlarity, con planes y preguntas |
| `/margen` | Página de Margen, con Google Play y la web |
| `/servicios` | Desarrollo a la medida, con precios de partida |
| `/aprende` | ifanidado: lecturas, Instagram, YouTube |
| `/contacto` | WhatsApp, correo, Instagram y quién responde |
| `/terminos`, `/privacidad`, `/reembolsos` | Lo legal (Ley 1480 y Ley 1581) |

Cada producto conserva su identidad: Qlarity en oscuro con latón y Archivo;
Margen en papel con Newsreader y el subrayado amarillo. Para sumar un producto
nuevo: una página en `src/pages/`, una tarjeta en `index.astro` y un enlace en
`Nav.astro` y `Footer.astro`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # revisa tipos y genera dist/
```

Vercel detecta Astro solo. Si el proyecto quedó configurado como Vite, también
funciona: el comando es `npm run build` y la salida, `dist`.

## Imágenes

- Capturas de Qlarity (`src/assets/qlarity-*.png`): tomadas del panel con los
  datos de demostración. Astro las convierte a WebP en varios tamaños.
- Imágenes para compartir en redes (`public/og/*.png`, 1200×630).
