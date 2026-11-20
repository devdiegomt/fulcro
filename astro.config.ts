import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitio, pendientes } from './src/config';

// Lo que falta por llenar en src/config.ts se avisa en cada build: las páginas
// legales lo muestran tal cual, y ePayco las revisa.
for (const p of pendientes()) console.warn(`⚠️  Falta en src/config.ts: ${p}`);

export default defineConfig({
  site: sitio.url,
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: { format: 'file' },
  integrations: [sitemap()],
});
