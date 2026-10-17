import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import type { HERO_EXAMPLES } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

type Playback = 'ready' | 'playing' | 'paused' | 'complete';
type ResearchExample = (typeof HERO_EXAMPLES)[number];

const DURATION_MS = 6300;
const MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function ResearchFlowMotion({ example }: { example: ResearchExample }) {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOTION_QUERY).matches,
  );
  const [playback, setPlayback] = useState<Playback>('ready');
  const [phase, setPhase] = useState(0);
  const [replay, setReplay] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const elapsedRef = useRef(0);
  const phaseRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia(MOTION_QUERY);
    const updatePreference = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
      setPlayback('ready');
      setPhase(0);
      phaseRef.current = 0;
      elapsedRef.current = 0;
      startedRef.current = false;
      setReplay(previous => previous + 1);
    };
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || startedRef.current) return;
    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setPlayback('playing');
    };
    if (!('IntersectionObserver' in window)) {
      start();
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        start();
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || playback !== 'playing') return;
    let frameId = 0;
    let previousTime = performance.now();
    const advance = (time: number) => {
      elapsedRef.current = Math.min(elapsedRef.current + time - previousTime, DURATION_MS);
      previousTime = time;
      const nextPhase = Math.min(2, Math.floor(elapsedRef.current / (DURATION_MS / 3)));
      if (phaseRef.current !== nextPhase) {
        phaseRef.current = nextPhase;
        setPhase(nextPhase);
      }
      if (elapsedRef.current >= DURATION_MS) {
        setPlayback('complete');
        return;
      }
      frameId = window.requestAnimationFrame(advance);
    };
    frameId = window.requestAnimationFrame(advance);
    return () => window.cancelAnimationFrame(frameId);
  }, [playback, reducedMotion, replay]);

  const handlePlayback = () => {
    if (reducedMotion) return;
    startedRef.current = true;
    if (playback === 'playing') {
      setPlayback('paused');
      return;
    }
    if (playback === 'complete') {
      elapsedRef.current = 0;
      phaseRef.current = 0;
      setPhase(0);
      setReplay(previous => previous + 1);
    }
    setPlayback('playing');
  };

  const buttonLabel = playback === 'playing'
    ? 'Pausar'
    : playback === 'paused'
      ? 'Reanudar'
      : playback === 'complete'
        ? 'Repetir'
        : 'Reproducir';
  const PlaybackIcon = playback === 'playing' ? Pause : playback === 'complete' ? RotateCcw : Play;

  return (
    <div ref={containerRef} className="research-motion">
      <div className="research-motion-toolbar">
        <p className="research-motion-caption">
          Recorrido ilustrativo
          <span>
            {reducedMotion
              ? 'Vista estática · movimiento reducido'
              : `Paso 0${phase + 1}/03 · ${phase === 0 ? 'Fuentes' : phase === 1 ? 'Métodos' : 'Resultados'}`
            }
          </span>
        </p>
        {!reducedMotion && (
          <div className="research-motion-actions">
            <div className="research-motion-steps" aria-hidden="true">
              <span className={`step-dot ${phase === 0 ? 'active' : ''}`}>01</span>
              <span className="step-sep">→</span>
              <span className={`step-dot ${phase === 1 ? 'active' : ''}`}>02</span>
              <span className="step-sep">→</span>
              <span className={`step-dot ${phase === 2 ? 'active' : ''}`}>03</span>
            </div>
            <button
              type="button"
              className="research-motion-control"
              onClick={handlePlayback}
              aria-label={`${buttonLabel} el recorrido ilustrativo`}
              aria-controls="research-flow-diagram"
            >
              <PlaybackIcon aria-hidden="true" size={13} />
              {buttonLabel}
            </button>
          </div>
        )}
      </div>

      <div
        key={replay}
        id="research-flow-diagram"
        className="research-flow"
        data-phase={phase}
        data-playback={playback}
        data-static={reducedMotion}
        style={{ '--research-motion-duration': `${DURATION_MS}ms` } as React.CSSProperties}
      >
        <div className="flow-source research-stage research-stage-source">
          <span className="flow-icon">
            <IconRenderer name={example.icon} className="h-5 w-5" />
          </span>
          <div className="research-stage-content">
            <p className="research-phase-label">01 / Revisar fuentes</p>
            <p className="text-sm font-medium text-white">{example.source}</p>
            <p className="mt-1 text-xs text-slate-400">{example.sourceDetail}</p>
          </div>
        </div>
        <div className="flow-connector research-connector research-connector-first" aria-hidden="true">
          <span />
        </div>
        <div className="flow-engine research-stage research-stage-method">
          <img src="/logo-symbol.png" alt="" width="36" height="42" />
          <div className="research-stage-content">
            <p className="research-phase-label">02 / Elegir métodos</p>
            <p className="text-sm font-semibold text-white">{example.core}</p>
            <p className="mt-1.5 text-[11px] text-blue-200/75">{example.detail}</p>
          </div>
        </div>
        <div className="flow-connector research-connector research-connector-second" aria-hidden="true">
          <span />
        </div>
        <div className="flow-output research-stage research-stage-results">
          <p className="research-phase-label">03 / Explicar resultados</p>
          {example.outputs.map(output => (
            <div key={output} className="flex items-center gap-2.5">
              <IconRenderer name="Check" className="h-3.5 w-3.5 shrink-0 text-forvi-cyan-300" />
              <span>{output}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
