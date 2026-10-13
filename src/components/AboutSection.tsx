import { FOUNDER_CREDENTIALS } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function AboutSection() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-title"
      className="section-spacing border-y border-white/10 bg-[#031020]"
    >
      <div className="section-shell about-panel">
        <div>
          <p className="eyebrow">04 / LA MIRADA FORVI</p>
          <h2
            id="about-title"
            className="mt-5 text-3xl font-semibold leading-[1.18] tracking-[-.045em] sm:text-4xl lg:text-[44px]"
          >
            Entendemos de código.
            <br />
            <span className="text-forvi-blue-300">Y de negocios.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-slate-300">
            La mejor tecnología empieza por entender cómo funciona tu empresa. En FORVI unimos
            visión empresarial, desarrollo de software e inteligencia artificial para resolver
            necesidades concretas.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Trabajamos con empresas y pymes que buscan dar su próximo paso: ordenar una operación,
            conectar sus herramientas o explorar lo que sus datos pueden hacer por ellas.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
            <div>
              <p className="text-sm font-medium text-white">Una solución con sentido</p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                La tecnología se elige según tu necesidad.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Un alcance a tu escala</p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Priorizamos lo que aporta valor primero.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="brand-art" aria-hidden="true">
            <img
              src="/logo-symbol.png"
              alt=""
              loading="lazy"
              width="170"
              height="190"
              className="relative z-10 h-44 w-40 object-contain drop-shadow-[0_20px_35px_rgba(2,122,241,.20)]"
            />
            <span className="absolute bottom-5 left-6 font-mono text-[9px] tracking-widest text-slate-500">
              FORVI / SOFTWARE A TU MEDIDA.
            </span>
            <span className="absolute right-6 top-5 font-mono text-[9px] text-slate-500">
              SANTIAGO, CHILE
            </span>
          </div>
          <div className="mt-6">
            <p className="text-[10px] font-medium uppercase tracking-[.16em] text-slate-500">
              Dirección y respaldo profesional
            </p>
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{FOUNDER_CREDENTIALS.name}</h3>
                <p className="mt-1.5 text-xs leading-6 text-slate-400">{FOUNDER_CREDENTIALS.role}</p>
              </div>
              <a
                href={FOUNDER_CREDENTIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver trayectoria de Guillermo Peralta en LinkedIn"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-slate-300 hover:border-forvi-blue-400 hover:text-white"
              >
                <IconRenderer name="Linkedin" className="h-4 w-4" />
              </a>
            </div>
            <ul className="mt-4 space-y-2">
              {FOUNDER_CREDENTIALS.credentials.map(credential => (
                <li
                  key={credential}
                  className="flex items-start gap-2 text-xs leading-6 text-slate-400"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-forvi-blue-400" />
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
