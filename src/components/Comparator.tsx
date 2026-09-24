import React from 'react';
import { propertiesData } from '../data/properties';
import { Property } from '../types/property';
import { Check, ArrowRight } from 'lucide-react';

interface ComparatorProps {
  onSelectProperty: (property: Property) => void;
}

export const Comparator: React.FC<ComparatorProps> = ({ onSelectProperty }) => {
  return (
    <section id="comparativo" className="py-20 bg-[#0d0f12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb26c] font-semibold mb-3">
            <span>Análise Comparativa</span>
            <span aria-hidden="true">·</span>
            <span>Edições Limitadas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Três Visões Exclusivas do Viver Bem
          </h2>
          <p className="text-[#a0aec0] text-base leading-relaxed">
            Compare o perfil arquitetônico, metragens e vocação de cada lançamento para escolher a residência que traduz seu estilo de vida.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] grid grid-cols-4 gap-4 bg-[#161920] rounded-2xl p-6 border border-white/10">
            {/* Feature Column Header */}
            <div className="flex flex-col justify-between py-4 pr-4 border-r border-white/10">
              <div className="space-y-1">
                <span className="text-xs uppercase text-[#a0aec0] tracking-widest block font-medium">
                  Visão Geral
                </span>
                <span className="font-serif text-lg font-bold text-white block">
                  Critérios de Escolha
                </span>
              </div>
              <div className="space-y-6 text-xs text-[#a0aec0] font-medium pt-8">
                <div className="py-2 border-b border-white/5">Conceito & Estilo</div>
                <div className="py-2 border-b border-white/5">Área Privativa</div>
                <div className="py-2 border-b border-white/5">Dormitórios / Suítes</div>
                <div className="py-2 border-b border-white/5">Vagas de Garagem</div>
                <div className="py-2 border-b border-white/5">Diferencial Icônico</div>
                <div className="py-2 border-b border-white/5">Previsão de Entrega</div>
                <div className="py-2">Tabela de Entrada</div>
              </div>
              <div className="h-10" />
            </div>

            {/* Properties Columns */}
            {propertiesData.map((prop) => (
              <div
                key={prop.id}
                className="flex flex-col justify-between p-4 rounded-xl bg-[#0d0f12]/60 border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="mb-4">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider block mb-1"
                    style={{ color: prop.accentColor }}
                  >
                    {prop.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">{prop.neighborhood}</h3>
                </div>

                <div className="space-y-6 text-xs text-white/90 pt-8">
                  <div className="py-2 border-b border-white/5 font-medium truncate">
                    {prop.id === 'mooca' && 'Industrial Chic & Tijolo Aparente'}
                    {prop.id === 'tatuape' && 'Torre Minimalista & Vidro'}
                    {prop.id === 'vilaema' && 'Biofílica & Jardins Suspensos'}
                  </div>
                  <div className="py-2 border-b border-white/5 font-mono tabular-nums font-semibold text-white">
                    {prop.typologies}
                  </div>
                  <div className="py-2 border-b border-white/5">
                    {prop.suitesInfo}
                  </div>
                  <div className="py-2 border-b border-white/5 font-medium">
                    {prop.parkingInfo}
                  </div>
                  <div className="py-2 border-b border-white/5 text-[#dfb26c]">
                    {prop.id === 'mooca' && 'Adega Privativa + Varanda Integrada'}
                    {prop.id === 'tatuape' && 'Sky Lounge 38º + Heliponto'}
                    {prop.id === 'vilaema' && 'Jardins Suspensos + Bosque Privativo'}
                  </div>
                  <div className="py-2 border-b border-white/5 font-mono text-[#a0aec0]">
                    {prop.completionDate}
                  </div>
                  <div className="py-2 font-mono font-bold text-white">
                    {prop.priceEstimate}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onSelectProperty(prop)}
                    className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${prop.buttonClass}`}
                  >
                    <span>Ver Unidade</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
