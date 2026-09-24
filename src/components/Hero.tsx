import React from 'react';
import { ArrowDown, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import heroImg from '../assets/images/hero_sp_luxury_skyline_1790208879395.jpg';

interface HeroProps {
  onSelectProperty: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProperty, onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* High-fidelity architectural image backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Skyline de São Paulo e arquitetura de alto padrão"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f12]/90 via-[#0d0f12]/80 to-[#0d0f12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(223,178,108,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb26c] font-semibold mb-6">
          <span>Coleção Residencial Exclusiva</span>
          <span aria-hidden="true">·</span>
          <span>São Paulo</span>
          <span aria-hidden="true">·</span>
          <span>2026/2027</span>
        </div>

        {/* Primary headline directly from user's brief */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl mx-auto text-balance">
          O Próximo Capítulo da Sua História Começa Aqui.
        </h1>

        {/* Secondary description directly from user's brief */}
        <p className="text-lg sm:text-xl text-[#a0aec0] max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Três bairros icônicos de São Paulo. Três conceitos exclusivos de viver bem. Escolha o seu destino de alto padrão e garanta condições especiais.
        </p>

        {/* Quick neighborhood switchers & action */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <button
            onClick={() => onSelectProperty('mooca')}
            className="group px-5 py-3 rounded-lg bg-[#161920]/90 hover:bg-[#161920] border border-[#c97a53]/40 hover:border-[#c97a53] text-left transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
          >
            <span className="block text-[11px] uppercase tracking-wider text-[#c97a53] font-semibold">01 · Tradição</span>
            <span className="text-sm font-semibold text-white group-hover:text-[#c97a53] transition-colors">Mooca</span>
          </button>

          <button
            onClick={() => onSelectProperty('tatuape')}
            className="group px-5 py-3 rounded-lg bg-[#161920]/90 hover:bg-[#161920] border border-[#dfb26c]/40 hover:border-[#dfb26c] text-left transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
          >
            <span className="block text-[11px] uppercase tracking-wider text-[#dfb26c] font-semibold">02 · Elevação</span>
            <span className="text-sm font-semibold text-white group-hover:text-[#dfb26c] transition-colors">Tatuapé</span>
          </button>

          <button
            onClick={() => onSelectProperty('vilaema')}
            className="group px-5 py-3 rounded-lg bg-[#161920]/90 hover:bg-[#161920] border border-[#52a97a]/40 hover:border-[#52a97a] text-left transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
          >
            <span className="block text-[11px] uppercase tracking-wider text-[#52a97a] font-semibold">03 · Natureza</span>
            <span className="text-sm font-semibold text-white group-hover:text-[#52a97a] transition-colors">Vila Ema</span>
          </button>
        </div>

        {/* Rigorous proof indicators */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
          <div>
            <span className="block font-mono text-2xl font-bold text-white tabular-nums">3</span>
            <span className="text-xs text-[#a0aec0]">Lançamentos em zonas nobres</span>
          </div>
          <div>
            <span className="block font-mono text-2xl font-bold text-white tabular-nums">115m² a 380m²</span>
            <span className="text-xs text-[#a0aec0]">Plantas flexíveis & penthouses</span>
          </div>
          <div>
            <span className="block font-mono text-2xl font-bold text-white tabular-nums">100%</span>
            <span className="text-xs text-[#a0aec0]">Vagas demarcadas e livres</span>
          </div>
          <div>
            <span className="block font-mono text-2xl font-bold text-white tabular-nums">VIP</span>
            <span className="text-xs text-[#a0aec0]">Tabela direta de pré-lançamento</span>
          </div>
        </div>

        {/* Scroll affordance */}
        <div className="mt-12 flex justify-center">
          <a
            href="#lancamentos"
            aria-label="Rolar até os lançamentos"
            className="text-[#a0aec0] hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
