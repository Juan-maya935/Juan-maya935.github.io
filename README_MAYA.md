# Portfolio Maya

Portfolio personal basado en el template de César Reyes (caesar-dat-com).
Adaptado para Maya con tema personalizado.

## Setup

```bash
cd portfolio-maya
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx gh-pages -d dist
```

## Personalización

Editar `src/data/profile.ts` con los datos de Maya:
- Nombre, headline, ubicación, bio
- Skills (técnicos y blandos)
- Experiencia laboral
- Proyectos
- Educación
- Certificaciones
- Links (LinkedIn, GitHub, etc.)
- Email de contacto

Editar `src/data/projects.ts` si existe para proyectos específicos.

Editar `index.html` para SEO y metadatos.

## Pendiente

- [ ] Datos personales de Maya
- [ ] Foto de perfil
- [ ] Paleta de colores
- [ ] GitHub username para deploy
- [ ] Verificar secciones que necesita/prescinde