import React from 'react';
import { Building2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0c0e] border-t border-white/10 py-16 text-[#a0aec0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase block">
              SP Alto Padrão
            </span>
            <p className="text-sm text-[#a0aec0] max-w-sm leading-relaxed">
              Curadoria de empreendimentos residenciais de altíssimo padrão em São Paulo. Mooca, Tatuapé e Vila Ema com exclusividade, arquitetura autoral e condições únicas de pré-lançamento.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#dfb26c]" />
              <span>Intermediação imobiliária credenciada CRECI-SP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Lançamentos
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#card-mooca" className="hover:text-white transition-colors">
                  Mooca · Tradição & Sofisticação
                </a>
              </li>
              <li>
                <a href="#card-tatuape" className="hover:text-white transition-colors">
                  Tatuapé · Poder & Elevação
                </a>
              </li>
              <li>
                <a href="#card-vilaema" className="hover:text-white transition-colors">
                  Vila Ema · Bem-estar & Conexão
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Pré-Lançamento
                </a>
              </li>
            </ul>
          </div>

          {/* Plantão & Form link */}
          <div className="space-y-3 text-xs">
            <span className="text-white font-semibold uppercase tracking-wider block">
              Canais Oficiais
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://forms.gle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-[#dfb26c]"
                >
                  Formulário Google Forms Oficial
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Agendar Visita ao Stand de Vendas
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-white transition-colors">
                  Quadro Comparativo de Plantas
                </a>
              </li>
              <li>
                <span className="text-white/40 block mt-2">São Paulo - SP · Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>
            © {new Date().getFullYear()} SP Alto Padrão. Todas as imagens e ilustrações artísticas são perspectivas preliminares.
          </p>
          <div className="flex items-center gap-6">
            <span>Privacidade & LGPD</span>
            <span>Memorial de Incorporação</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
