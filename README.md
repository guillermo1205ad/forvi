# FORVI — Sitio corporativo

Software a tu medida. Inteligencia para tu negocio.

Sitio oficial: [www.forvi.cl](https://www.forvi.cl). React 18, TypeScript, Vite 6 y Tailwind CSS. Despliegue estático mediante GitHub Actions y GitHub Pages.

## Desarrollo

Node.js 22.6 o superior (las pruebas usan el soporte de TypeScript de Node).

```bash
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`npm run build` comprueba TypeScript y genera `dist/`. Antes de cualquier commit, ejecutar las pruebas y la compilación. El flujo de despliegue también ejecuta ambos pasos con Node 22.

## Contenido y componentes

- `src/data/siteData.ts`: datos oficiales, servicios, ejemplos, preguntas frecuentes y opciones del diagnóstico/formulario.
- `src/components/Hero.tsx`: portada con tres flujos ilustrativos de software, automatización e IA.
- `src/components/ServicesSection.tsx`: selector de cinco soluciones y capacidades.
- `src/components/AiSection.tsx`: cinco ejemplos de IA con pestañas accesibles. Son contenido de muestra; no se ejecutan modelos.
- `src/components/ProjectCalculator.tsx`: diagnóstico de alcance y resumen para WhatsApp o formulario. Los plazos son referencias iniciales, no cotizaciones.
- `src/components/ContactSection.tsx`: formulario con validación, honeypot, estado de envío y recuperación ante errores.
- `src/lib/contactSubmission.ts`: integración existente con Web3Forms; solo acepta confirmación HTTP correcta y `success: true`.
- `src/lib/projectInquiry.ts`: incorpora el diagnóstico sin borrar el mensaje escrito por el visitante ni duplicar el resumen anterior.
- `src/components/IconRenderer.tsx`: registro explícito de iconos para conservar tree-shaking.
- `src/index.css`: sistema visual, estilos responsive, foco y movimiento reducido.

## Verificación

Las pruebas usan respuestas simuladas y no envían consultas reales. Cubren la confirmación del proveedor, errores HTTP, JSON inválido, errores de red, cancelación y conservación del mensaje al trasladar el diagnóstico.

Revisión manual recomendada antes de publicar:

1. Navegación a 320, 390, 768, 1024 y 1440 px, sin desplazamiento horizontal del documento.
2. Menú móvil/tablet, cierre con Escape y navegación a las secciones.
3. Pestañas de IA mediante flechas, Home y End; servicios y ejemplos de portada.
4. Diagnóstico, cambios de opciones, enlaces a WhatsApp y traspaso al formulario.
5. Validación de campos, foco en el primer error y enlaces de contacto.

La recepción real de correo depende de la cuenta y configuración existentes de Web3Forms. Las pruebas locales no verifican la entrega en la bandeja de entrada. No modificar su clave pública sin revisar la configuración del proveedor.

## Publicación

Un push a `main` activa `.github/workflows/deploy.yml` y publica `dist/` en GitHub Pages. El flujo actual usa artefactos de Pages, no un push a `gh-pages`. `public/CNAME` conserva `www.forvi.cl`.

El rediseño se desarrolla en `codex/forvi-professional-redesign`. No se publica por ejecutar la compilación local.

## Datos oficiales

- Correo: [contacto@forvi.cl](mailto:contacto@forvi.cl)
- WhatsApp: [+56 9 3577 9373](https://wa.me/56935779373)
- Instagram: [@forvi.cl](https://www.instagram.com/forvi.cl/)
- Facebook: [@forvi.cl](https://www.facebook.com/forvi.cl/)
- Dirección y respaldo profesional: [Guillermo Peralta](https://www.linkedin.com/in/guillermo-peralta)
- Ubicación: Santiago, Chile.

Conservar las credenciales y activos oficiales. No agregar clientes, testimonios, métricas ni condiciones comerciales sin respaldo.
