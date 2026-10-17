import { SITE_INFO } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export function FloatingWhatsApp() {
  return (
    <a
      href={SITE_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar con FORVI por WhatsApp"
      className="floating-whatsapp-btn group fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0c2841] text-white shadow-lg shadow-black/30 sm:bottom-6 sm:right-6"
    >
      <span className="floating-whatsapp-beacon" aria-hidden="true" />
      <span className="floating-whatsapp-status" aria-hidden="true" />
      <IconRenderer name="MessageSquare" className="h-5 w-5" />
      <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-lg border border-white/15 bg-[#071a32] px-3 py-2 text-xs group-hover:block group-focus-visible:block">
        Conversemos por WhatsApp
      </span>
    </a>
  );
}
