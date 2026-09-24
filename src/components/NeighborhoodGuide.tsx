import React, { useState } from 'react';
import { propertiesData } from '../data/properties';
import { MapPin, Utensils, Trees, Compass, Shield, Train } from 'lucide-react';

export const NeighborhoodGuide: React.FC = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<'mooca' | 'tatuape' | 'vilaema'>('mooca');

  const getHighlights = () => {
    switch (selectedNeighborhood) {
      case 'mooca':
        return [
          {
            icon: Utensils,
            title: 'Gastronomia Histórica & Autoral',
            text: 'Mais de um século de culinária italiana genuína: Di Cunto, Pizzaria San Gennaro, Hospedaria e cafés charmosos na Rua Juventus.',
          },
          {
            icon: Shield,
            title: 'Segurança & Atmosfera Familiar',
            text: 'Ruas tranquilas e arborizadas, Clube Atlético Juventus, colégios bilíngues e forte identidade de comunidade nobre.',
          },
          {
            icon: Compass,
            title: 'Acesso Expresso',
            text: 'Conexão direta com a Av. Paes de Barros, Radial Leste, 23 de Maio e a menos de 10 minutos do Centro e da Paulista.',
          },
        ];
      case 'tatuape':
        return [
          {
            icon: Utensils,
            title: 'Boulevard Gastronômico da Itapura',
            text: 'Dezenas de bistrôs estrelados, enotecas, steakhouses nobres e restaurantes cosmopolitas nas ruas Itapura e Coelho Lisboa.',
          },
          {
            icon: Trees,
            title: 'Parque Ceret & Shopping Anália Franco',
            text: 'Ampla área verde para caminhadas e esportes de raquete ao lado de um dos centros de compras mais requintados do país.',
          },
          {
            icon: Compass,
            title: 'Novo Eixo Corporativo da Capital',
            text: 'Modernos complexos multiuso, helipontos e os edifícios residenciais mais altos e valorizados de São Paulo.',
          },
        ];
      case 'vilaema':
        return [
          {
            icon: Trees,
            title: 'Qualidade de Vida & Conexão Verde',
            text: 'Atmosfera serena, praças floridas, ciclovias e proximidade com feiras orgânicas e áreas de lazer ao ar livre.',
          },
          {
            icon: Train,
            title: 'Mobilidade Integrada ao Metrô',
            text: 'A passos da Linha 15-Prata (Estação São Lucas), ligando sem trânsito à Linha 2-Verde (Vila Prudente e Paulista).',
          },
          {
            icon: Compass,
            title: 'Vetor de Maior Valorização',
            text: 'Região com crescimento expressivo, novos empreendimentos sustentáveis e grande potencial de rentabilidade patrimonial.',
          },
        ];
    }
  };

  return (
    <section id="bairros" className="py-20 bg-[#0d0f12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb26c] font-semibold mb-3">
            <span>Guia de Localização</span>
            <span aria-hidden="true">·</span>
            <span>São Paulo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Bairros Icônicos com Alma e Potencial
          </h2>
          <p className="text-[#a0aec0] text-base leading-relaxed">
            Cada região oferece uma experiência de conveniência, cultura e valorização imobiliária distinta na capital paulista.
          </p>
        </div>

        {/* Neighborhood Selector */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedNeighborhood('mooca')}
            className={`py-2.5 px-6 rounded-lg text-xs uppercase tracking-widest font-bold transition-all cursor-pointer border ${
              selectedNeighborhood === 'mooca'
                ? 'bg-[#c97a53] text-white border-[#c97a53] shadow-lg shadow-[#c97a53]/20'
                : 'bg-[#161920] text-[#a0aec0] border-white/10 hover:text-white'
            }`}
          >
            Mooca
          </button>
          <button
            onClick={() => setSelectedNeighborhood('tatuape')}
            className={`py-2.5 px-6 rounded-lg text-xs uppercase tracking-widest font-bold transition-all cursor-pointer border ${
              selectedNeighborhood === 'tatuape'
                ? 'bg-[#dfb26c] text-[#0d0f12] border-[#dfb26c] shadow-lg shadow-[#dfb26c]/20'
                : 'bg-[#161920] text-[#a0aec0] border-white/10 hover:text-white'
            }`}
          >
            Tatuapé
          </button>
          <button
            onClick={() => setSelectedNeighborhood('vilaema')}
            className={`py-2.5 px-6 rounded-lg text-xs uppercase tracking-widest font-bold transition-all cursor-pointer border ${
              selectedNeighborhood === 'vilaema'
                ? 'bg-[#52a97a] text-white border-[#52a97a] shadow-lg shadow-[#52a97a]/20'
                : 'bg-[#161920] text-[#a0aec0] border-white/10 hover:text-white'
            }`}
          >
            Vila Ema
          </button>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getHighlights().map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#161920] border border-white/10 hover:border-white/20 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d0f12] border border-white/10 flex items-center justify-center text-[#dfb26c]">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a0aec0] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
