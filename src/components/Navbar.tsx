import { useEffect, useRef, useState } from 'react';
import { IconRenderer } from './IconRenderer';
import { SITE_INFO } from '../data/siteData';

const links = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Entregables', id: 'entregables' },
  { label: 'Cómo trabajamos', id: 'metodologia' },
  { label: 'Sobre FORVI', id: 'nosotros' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const [scrollProgress, setScrollProgress] = useState(0);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    );
    document
      .querySelectorAll('main section[id]')
      .forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header
      ref={header}
      className="site-header"
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          aria-label="FORVI, inicio"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 rounded-sm"
        >
          <img
            src="/logo-symbol.png"
            alt=""
            width="40"
            height="44"
            className="h-11 w-10 object-contain"
          />
          <span className="text-[26px] font-extrabold tracking-[.09em] text-white">
            FORVI<span className="text-forvi-cyan-400">.</span>
          </span>
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'location' : undefined}
              className={`nav-link ${active === link.id ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="button-primary nav-cta"
          >
            Cotizar <IconRenderer name="ArrowUpRight" />
          </a>
          <button
            ref={toggle}
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 lg:hidden"
          >
            <IconRenderer name={open ? 'X' : 'Menu'} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Navegación móvil"
        hidden={!open}
        className="mobile-menu lg:!hidden"
      >
        <div className="section-shell flex flex-col py-4">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === link.id ? 'location' : undefined}
              className="flex items-center justify-between border-b border-white/10 py-4 text-slate-200"
            >
              {link.label}
              <IconRenderer name="ArrowUpRight" className="h-4 w-4 text-slate-400" />
            </a>
          ))}
          <a
            href="#preguntas"
            onClick={() => setOpen(false)}
            className="py-4 text-slate-200"
          >
            Preguntas frecuentes
          </a>
          <a
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="py-3 text-forvi-cyan-300"
          >
            Escribir por WhatsApp ↗
          </a>
        </div>
      </nav>
      <div className="scroll-progress-track" aria-hidden="true">
        <div
          className="scroll-progress-indicator"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
