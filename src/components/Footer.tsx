import { SITE_INFO } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000713] pb-8 pt-14 text-slate-400">
      <div className="section-shell">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5"
              aria-label="FORVI, volver al inicio"
            >
              <img
                src="/logo-symbol.png"
                alt=""
                width="32"
                height="36"
                className="h-9 w-8 object-contain"
              />
              <span className="text-2xl font-extrabold tracking-widest text-white">
                FORVI
                <span className="text-forvi-cyan-400">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-200">{SITE_INFO.slogan}</p>
            <p className="mt-3 max-w-xs text-xs leading-6">
              Desarrollo de software e inteligencia artificial aplicada para empresas y pymes en Chile.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { label: 'Instagram', icon: 'Instagram', url: SITE_INFO.socials.instagram },
                { label: 'Facebook', icon: 'Facebook', url: SITE_INFO.socials.facebook }
              ].map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} de FORVI`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white"
                >
                  <IconRenderer name={link.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Navegación del pie de página">
            <h2 className="mb-5 text-xs font-semibold text-white">Explora FORVI</h2>
            <ul className="space-y-3 text-xs">
              {[
                { label: 'Soluciones a medida', id: 'servicios' },
                { label: 'Inteligencia artificial', id: 'ia' },
                { label: 'Cómo trabajamos', id: 'metodologia' },
                { label: 'Sobre FORVI', id: 'nosotros' },
                { label: 'Dimensionar mi proyecto', id: 'diagnostico' },
                { label: 'Preguntas frecuentes', id: 'preguntas' }
              ].map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="inline-block py-1 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="mb-5 text-xs font-semibold text-white">El próximo paso empieza contigo.</h2>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="inline-block py-1 text-lg font-medium text-white hover:text-forvi-cyan-300"
            >
              {SITE_INFO.email}
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm hover:text-white"
            >
              {SITE_INFO.phoneDisplay}
              <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
            </a>
            <p className="mt-5 text-xs">{SITE_INFO.location}</p>
            <a href="#contacto" className="text-link mt-4">
              Cuéntanos tu proyecto <IconRenderer name="ArrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pb-12 pt-7 text-[11px] sm:pb-0">
          <p>© {new Date().getFullYear()} {SITE_INFO.legalName}. Todos los derechos reservados.</p>
          <a
            href="#inicio"
            className="mr-12 flex min-h-11 items-center gap-2 hover:text-white"
          >
            Volver al inicio <IconRenderer name="ArrowUp" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
