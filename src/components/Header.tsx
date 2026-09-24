import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (preferredProperty?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0f12]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-[#0d0f12]/60 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase text-white hover:text-[#dfb26c] transition-colors whitespace-nowrap"
        >
          SP Alto Padrão
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a0aec0]">
          <a
            href="#lancamentos"
            className="hover:text-white transition-colors"
          >
            Empreendimentos
          </a>
          <a
            href="#comparativo"
            className="hover:text-white transition-colors"
          >
            Comparativo
          </a>
          <a
            href="#simulador"
            className="hover:text-white transition-colors"
          >
            Simulador
          </a>
          <a
            href="#bairros"
            className="hover:text-white transition-colors"
          >
            Bairros Nobres
          </a>
          <a
            href="#contato"
            className="hover:text-white transition-colors"
          >
            Atendimento VIP
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#0d0f12] bg-gradient-to-r from-[#dfb26c] to-[#e8c385] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#dfb26c]/15 whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Falar com Especialista</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="md:hidden p-2 text-white/80 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfb26c]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drop */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161920] border-b border-white/10 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm text-[#a0aec0]">
            <a
              href="#lancamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Empreendimentos
            </a>
            <a
              href="#comparativo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Comparativo
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Simulador de Condições
            </a>
            <a
              href="#bairros"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Bairros Nobres
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 transition-colors"
            >
              Atendimento VIP
            </a>
          </nav>
          <div className="pt-2 border-t border-white/5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#0d0f12] bg-[#dfb26c] rounded-md text-center cursor-pointer"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
