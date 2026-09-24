import React, { useState } from 'react';
import { Property } from '../types/property';
import {
  X,
  Check,
  Building2,
  Maximize2,
  Calendar,
  MapPin,
  ExternalLink,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenBooking: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'plantas' | 'lazer' | 'bairro'>('geral');
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  if (!property) return null;

  const currentPlan = property.floorPlans[selectedPlanIndex] || property.floorPlans[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#161920] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d0f12]">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: property.accentColor }}
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-[#a0aec0]">
                {property.concept}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                {property.neighborhood}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="p-2 rounded-lg text-[#a0aec0] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Hero */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full bg-[#0d0f12] overflow-hidden">
          <img
            src={property.image}
            alt={property.neighborhood}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161920] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
            <span className="flex items-center gap-1 text-white/80">
              <MapPin className="w-4 h-4 text-[#dfb26c]" />
              {property.address}
            </span>
            <span className="font-mono bg-[#0d0f12]/80 px-3 py-1 rounded border border-white/10 tabular-nums">
              Entrega: {property.completionDate}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#12141a] px-6 overflow-x-auto text-xs font-medium uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('geral')}
            className={`py-3.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'geral'
                ? 'text-white border-[#dfb26c]'
                : 'text-[#a0aec0] border-transparent hover:text-white'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('plantas')}
            className={`py-3.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'plantas'
                ? 'text-white border-[#dfb26c]'
                : 'text-[#a0aec0] border-transparent hover:text-white'
            }`}
          >
            Tipologias & Plantas ({property.floorPlans.length})
          </button>
          <button
            onClick={() => setActiveTab('lazer')}
            className={`py-3.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'lazer'
                ? 'text-white border-[#dfb26c]'
                : 'text-[#a0aec0] border-transparent hover:text-white'
            }`}
          >
            Lazer & Diferenciais
          </button>
          <button
            onClick={() => setActiveTab('bairro')}
            className={`py-3.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'bairro'
                ? 'text-white border-[#dfb26c]'
                : 'text-[#a0aec0] border-transparent hover:text-white'
            }`}
          >
            Localização Privilegiada
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[55vh] overflow-y-auto">
          {activeTab === 'geral' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-2">
                  Conceito Arquitetônico
                </h4>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                  {property.extendedDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-[#0d0f12] border border-white/5">
                  <span className="text-xs text-[#a0aec0] block">Previsão de Preço</span>
                  <span className="text-lg font-bold text-white font-mono mt-1 block">
                    {property.priceEstimate}
                  </span>
                  <span className="text-[11px] text-white/50 mt-1 block">
                    Condições especiais de entrada parcelada durante as obras
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#0d0f12] border border-white/5">
                  <span className="text-xs text-[#a0aec0] block">Status do Empreendimento</span>
                  <span className="text-lg font-bold text-[#dfb26c] mt-1 block">
                    {property.status}
                  </span>
                  <span className="text-[11px] text-white/50 mt-1 block">
                    Unidades limitadas no lote de lançamento
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#dfb26c]" />
                  <span className="text-xs text-white/80">
                    Garantia construtiva de alto padrão · Patrimônio de Afetação registrado
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'plantas' && (
            <div className="space-y-6">
              {/* Floor Plan selector */}
              <div className="flex gap-2 p-1 bg-[#0d0f12] rounded-lg w-fit">
                {property.floorPlans.map((plan, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPlanIndex(idx)}
                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      selectedPlanIndex === idx
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-[#a0aec0] hover:text-white'
                    }`}
                  >
                    {plan.title}
                  </button>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-[#0d0f12] border border-white/5 space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#dfb26c] font-semibold">
                      Planta Humanizada
                    </span>
                    <h4 className="text-xl font-bold text-white font-serif">{currentPlan.title}</h4>
                  </div>
                  <span className="font-mono text-xl font-bold text-white">{currentPlan.area}</span>
                </div>

                <div className="grid grid-cols-3 gap-3 py-2 text-xs">
                  <div>
                    <span className="text-[#a0aec0] block">Dormitórios</span>
                    <span className="text-white font-semibold">{currentPlan.bedrooms}</span>
                  </div>
                  <div>
                    <span className="text-[#a0aec0] block">Suítes</span>
                    <span className="text-white font-semibold">{currentPlan.suites}</span>
                  </div>
                  <div>
                    <span className="text-[#a0aec0] block">Vagas</span>
                    <span className="text-white font-semibold">{currentPlan.parking}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-xs uppercase text-[#a0aec0] font-semibold block mb-3">
                    Destaques desta tipologia:
                  </span>
                  <ul className="space-y-2">
                    {currentPlan.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <Check className="w-4 h-4 text-[#dfb26c] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lazer' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#a0aec0]">
                Áreas comuns entregues equipadas, climatizadas e decoradas com mobiliário de designers consagrados.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {property.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#0d0f12] border border-white/5 flex items-center gap-3 text-xs sm:text-sm text-white/90"
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 bg-[#dfb26c]" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bairro' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0d0f12] border border-white/5 mb-4">
                <span className="text-xs text-[#a0aec0] block mb-1">Endereço Privilegiado</span>
                <span className="text-white font-semibold">{property.address}</span>
              </div>

              <div className="space-y-3">
                {property.neighborhoodHighlights.map((hl, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h5 className="text-sm font-semibold text-white mb-1">{hl.title}</h5>
                    <p className="text-xs sm:text-sm text-[#a0aec0] leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#0d0f12] flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="https://forms.gle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#a0aec0] hover:text-white transition-colors"
          >
            <span>Formulário Oficial de Interesse</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(property);
              }}
              className={`w-full sm:w-auto py-3 px-6 rounded-lg font-bold text-xs uppercase tracking-widest transition-all cursor-pointer ${property.buttonClass}`}
            >
              {property.ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
