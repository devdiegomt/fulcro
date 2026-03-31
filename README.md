# Fulcro — Landing Page

React + TypeScript + Vite. Lista para Vercel.

## Antes de publicar

Edita **`src/config.ts`** — todos los valores que necesitas cambiar están ahí:

```ts
export const config = {
  whatsapp: '573000000000',   // tu número (sin + ni espacios)
  email: 'fulcro.dev@gmail.com',
  instagram: 'fulcrotech',
  city: 'Bogotá, Colombia',
  year: new Date().getFullYear(),
}
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Deploy en Vercel

**Opción 1 — desde GitHub (recomendada)**
1. Sube el proyecto a un repositorio en GitHub
2. En [vercel.com](https://vercel.com), haz clic en "Add New Project"
3. Importa el repositorio
4. Vercel detecta Vite automáticamente — no necesitas configurar nada
5. Haz clic en Deploy

**Opción 2 — desde la CLI**
```bash
npm install -g vercel
vercel
```

**Opción 3 — build manual**
```bash
npm run build
# Sube la carpeta /dist a cualquier hosting estático
```

## Estructura del proyecto

```
src/
├── config.ts              ← valores editables (WhatsApp, email, etc.)
├── index.css              ← todos los estilos + design tokens
├── main.tsx               ← entry point
├── App.tsx                ← composición de secciones
├── hooks/
│   └── useScrollReveal.ts ← animaciones de scroll
└── components/
    ├── Nav.tsx            ← navegación + menú móvil
    ├── Hero.tsx           ← hero principal
    ├── ForWho.tsx         ← industrias objetivo
    ├── Services.tsx       ← 3 niveles de servicio
    ├── Process.tsx        ← cómo funciona
    ├── WhyFulcro.tsx      ← diferenciadores
    ├── CTA.tsx            ← sección de contacto
    └── Footer.tsx         ← pie de página
```

## Dominio personalizado en Vercel

1. Ve a tu proyecto en Vercel → Settings → Domains
2. Agrega tu dominio (ej. `fulcro.dev`)
3. Sigue las instrucciones para apuntar los DNS

---

*ifanidado · Fulcro · 2025*
