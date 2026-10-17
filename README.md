# FORVI — Análisis de datos y metodología de investigación

Transformamos datos en conocimiento.

Sitio oficial: [www.forvi.cl](https://www.forvi.cl). Proyecto existente en React 18, TypeScript, Vite 6 y Tailwind CSS. Publicación estática en GitHub Pages con el dominio propio conservado.

## Desarrollo

Node.js 22.6 o superior (las pruebas usan el soporte de TypeScript de Node).

```bash
npm ci
npm run dev
npm test
npm run build
npm run preview
```

El build comprueba TypeScript y genera `dist/`. Ejecutar pruebas y build antes de preparar una publicación. Compilar localmente no publica el sitio.

## Contenido y componentes

- `src/data/siteData.ts`: contactos oficiales, propuesta de valor, credenciales, preguntas frecuentes y recorridos ilustrativos de análisis.
- `src/components/Hero.tsx`: portada con ejemplos cuantitativo, cualitativo y multimodal; no ejecuta modelos ni analiza datos del visitante.
- `src/components/ResearchFlowMotion.tsx` y `research-motion.css`: recorrido ilustrativo de fuentes, métodos y resultados en 6,3 segundos, con pausa, reanudación y repetición. Sin bucle ni dependencias añadidas. La preferencia de movimiento reducido activa una vista estática.
- `src/components/ServicesSection.tsx`: los cuatro servicios y sus capacidades, sujetos a pertinencia metodológica.
- `src/components/DeliverablesSection.tsx`: informe, resultados, interpretación, supuestos, limitaciones y sesión explicativa, según cada propuesta.
- `src/components/MethodologySection.tsx`: evaluación, acuerdo, análisis y entrega; una ronda de ajustes dentro del alcance.
- `src/components/AboutSection.tsx`: enfoque institucional de FORVI y principios de consultoría técnica.
- `src/components/ContactSection.tsx`: nombre, correo, objetivo, tipo de datos y plazo deseado. Sin archivos adjuntos, datos sensibles ni campos comerciales innecesarios.
- `src/lib/contactSubmission.ts`: envío directo desde el navegador a Web3Forms. Solo confirma el envío con HTTP correcto y `success: true`; no abre la aplicación de correo ni redirige al visitante.
- `src/index.css`: identidad visual, responsive, foco visible y movimiento reducido.
- `src/assets/og-investigacion.svg`: fuente editable de la nueva composición social; usa el símbolo original sin alterarlo. El PNG final se sirve desde `public/og-investigacion.png`.

Se conservan los símbolos y favicon oficiales. Las piezas con el eslogan anterior se retiraron. El nombre y símbolo se componen en la interfaz sin un eslogan dentro del logo. No se importaron piezas finales externas de la nueva propuesta.

## Verificación

Las pruebas unitarias usan respuestas simuladas y no envían consultas reales. Revisar antes de publicar:

1. Build y pruebas automatizadas.
2. Escritorio y móvil sin desbordamiento horizontal, menú y foco por teclado.
3. Selectores de portada y servicios, controles del recorrido animado, preguntas frecuentes y navegación por anclas.
4. Validación del formulario, espera durante el envío, bloqueo de duplicados, errores sin pérdida de texto, confirmación real y enlaces de contacto directo.
5. Enlaces oficiales, metadatos, datos estructurados, imágenes y ausencia de mensajes comerciales anteriores.

## Envío de consultas

El formulario usa el servicio gratuito de Web3Forms para enviar a `contacto@forvi.cl`. El destinatario se configura y verifica en la cuenta de Web3Forms: escribir un campo `recipient` en el JSON no cambia el buzón de destino. La clave pública del formulario se usa en el frontend; no incorporar contraseñas de correo ni credenciales SMTP.

La petición usa JSON desde el navegador, como requiere el proveedor, con el correo del visitante en `email` para poder responderle. El formulario no admite archivos adjuntos. Mientras envía, deshabilita los campos y evita envíos duplicados. Un tiempo de espera de 15 segundos cancela la petición; los errores conservan el texto y permiten reintentar. La confirmación incluye el resumen de la consulta y permite iniciar otra.

**Verificado el 15 de octubre de 2026:** el titular autorizó activar el servicio gratuito y aceptó sus términos. Se verificó `contacto@forvi.cl` mediante el código recibido en ese buzón, se creó «FORVI — Consultas de investigación» para `https://www.forvi.cl/` y se sustituyó la clave provisional rechazada por la clave pública del formulario creado. El panel del proveedor muestra `contacto@forvi.cl` como único destinatario. Una prueba desde la vista previa del sitio, con datos ficticios, recibió confirmación y quedó registrada en el panel; se comprobó también el foco en la confirmación. El titular confirmó la recepción del correo de prueba y aprobó publicar esta versión. Pruebas unitarias: 18/18; build correcto; revisión de escritorio y móvil sin desbordamiento horizontal, validación y conservación de datos ante rechazo.

Referencias del proveedor: [API](https://docs.web3forms.com/getting-started/api-reference), [diagnóstico](https://docs.web3forms.com/getting-started/troubleshooting) y [plan gratuito](https://web3forms.com/pricing) (250 consultas mensuales al configurar esta versión).

Las anclas `#inicio`, `#servicios`, `#ia`, `#metodologia`, `#nosotros`, `#preguntas` y `#contacto` siguen disponibles. `#ia` abre el servicio multimodal. Los enlaces anteriores `#diagnostico` y `#calculadora` llevan al contacto. No existen rutas adicionales que redirigir.

## Publicación existente

**Solicitar aprobación de la versión revisada antes de cualquier despliegue público.** No cambiar DNS, correo, credenciales ni protecciones del repositorio.

La publicación vigente usa el contenido estático de la rama `gh-pages`, con `CNAME` y `.nojekyll`. El workflow de `main` permanece como configuración técnica existente, pero su despliegue por artefactos está bloqueado por la regla del entorno `github-pages`, que permite solamente la rama `gh-pages`. No depender de un push a `main` para publicar.

Tras aprobación:

1. Ejecutar pruebas/build sobre la versión aprobada y revisar `dist/`.
2. Actualizar referencias remotas y preparar una checkout separada basada en `origin/gh-pages`.
3. Sincronizar el contenido de `dist/` con esa checkout, excluyendo su archivo `.git`; conservar `CNAME` con `www.forvi.cl` y añadir `.nojekyll`.
4. Revisar diferencias, registrar el commit de origen y hacer commit de los artefactos.
5. Publicar el commit en `gh-pages` usando el acceso Git existente y esperar éxito de Pages.
6. Verificar redirección de `forvi.cl` a `www.forvi.cl`, HTTPS, HTML/assets publicados y una visita funcional. No declarar publicado antes de estas comprobaciones.

## Contactos oficiales

- [contacto@forvi.cl](mailto:contacto@forvi.cl)
- WhatsApp: [+56 9 3577 9373](https://wa.me/56935779373)
- Instagram y Facebook: [@forvi.cl](https://www.instagram.com/forvi.cl/) / [@forvi.cl](https://www.facebook.com/forvi.cl/)
- [Guillermo Peralta](https://www.linkedin.com/in/guillermo-peralta)

No agregar clientes, testimonios, cifras de éxito, precios, plazos ni certificaciones sin respaldo. La propuesta es colaboración técnica transparente y debe respetar las reglas de la institución del cliente.
