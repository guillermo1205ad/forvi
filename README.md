# FORVI — Sitio Web Corporativo

> **Software a tu medida. Inteligencia para tu negocio.**  
> Sitio oficial: [www.forvi.cl](https://www.forvi.cl)

---

## 📌 Identidad de la Empresa

**FORVI** es una empresa chilena especializada en desarrollo de software a medida e inteligencia artificial aplicada para empresas y pymes. Su propuesta de valor combina conocimientos de dirección estratégica de negocios e ingeniería de software de alto nivel para desarrollar soluciones eficientes, escalables y adaptadas al presupuesto y necesidades reales de cada organización.

### Respaldo Profesional
FORVI cuenta con la dirección y respaldo profesional de **Guillermo Peralta**:
* Ingeniero Comercial.
* Licenciado en Ciencias de la Administración de Empresas.
* Magíster en Ciencias Empresariales con especialización en Emprendimiento.
* Candidato a Doctor en Computación de la Pontificia Universidad Católica de Chile.
* Especialista en inteligencia artificial multimodal.
* Perfil: [linkedin.com/in/guillermo-peralta](https://www.linkedin.com/in/guillermo-peralta)

---

## 🚀 Arquitectura Tecnológica

* **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Tooling:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
* **Iconografía:** [Lucide React](https://lucide.dev/) (con tree-shaking optimizado)
* **Alojamiento:** [GitHub Pages](https://pages.github.com/) con dominio personalizado `www.forvi.cl`
* **CI/CD:** [GitHub Actions](.github/workflows/deploy.yml)

---

## 📂 Estructura del Proyecto

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD automatizado para GitHub Pages
├── public/
│   ├── CNAME                 # Dominio www.forvi.cl
│   ├── favicon.ico
│   ├── favicon.png
│   ├── logo-symbol.png       # Isotipo 3D oficial FORVI
│   ├── logo-forvi.png        # Logotipo oficial completo
│   ├── logo-horizontal.png   # Lockup horizontal
│   ├── og-image.png          # OpenGraph card para redes sociales
│   ├── robots.txt            # Directivas de indexación SEO
│   └── sitemap.xml           # Mapa del sitio para buscadores
├── src/
│   ├── assets/               # Recursos multimedia
│   ├── components/
│   │   ├── AboutSection.tsx        # Sección Nosotros & Respaldo profesional
│   │   ├── AiSection.tsx           # Capacidades avanzadas de IA & Simulador
│   │   ├── ContactSection.tsx      # Formulario funcional & Canales oficiales
│   │   ├── FloatingWhatsApp.tsx    # Botón flotante WhatsApp 24/7
│   │   ├── Footer.tsx              # Pie de página corporativo
│   │   ├── Hero.tsx                # Portada principal & Matriz tecnológica
│   │   ├── IconRenderer.tsx        # Renderizado eficiente de iconos
│   │   ├── MethodologySection.tsx  # Metodología de 4 etapas
│   │   ├── Navbar.tsx              # Navegación responsive
│   │   ├── ProjectCalculator.tsx   # Estimador interactivo de alcance
│   │   └── ServicesSection.tsx     # Desarrollo de software a medida
│   ├── data/
│   │   └── siteData.ts             # Datos estructurados del sitio
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html                # Metadatos SEO, Open Graph y JSON-LD Schema
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 💻 Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar compilación local
npm run preview
```

---

## 📞 Información Oficial de Contacto

* **Dominio:** [www.forvi.cl](https://www.forvi.cl)
* **Correo:** [contacto@forvi.cl](mailto:contacto@forvi.cl)
* **WhatsApp:** [+56 9 3577 9373](https://wa.me/56935779373)
* **Instagram:** [@forvi.cl](https://www.instagram.com/forvi.cl/)
* **Facebook:** [@forvi.cl](https://www.facebook.com/forvi.cl/)
* **Ubicación:** Santiago, Chile
