import React from 'react';
import { Property } from '../types/property';
import { Eye, ArrowUpRight, BedDouble, Car, Maximize2, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onOpenDetails: (property: Property) => void;
  onSelectCta: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onOpenDetails,
  onSelectCta,
}) => {
  const getShadowClass = () => {
    switch (property.id) {
      case 'mooca':
        return 'hover:shadow-[0_20px_45px_rgba(201,122,83,0.20)] hover:border-[#c97a53]/40';
      case 'tatuape':
        return 'hover:shadow-[0_20px_45px_rgba(223,178,108,0.20)] hover:border-[#dfb26c]/40';
      case 'vilaema':
        return 'hover:shadow-[0_20px_45px_rgba(82,169,122,0.20)] hover:border-[#52a97a]/40';
      default:
        return 'hover:shadow-2xl hover:border-white/20';
    }
  };

  const getTagColor = () => {
    switch (property.id) {
      case 'mooca':
        return 'text-[#c97a53]';
      case 'tatuape':
        return 'text-[#dfb26c]';
      case 'vilaema':
        return 'text-[#52a97a]';
      default:
        return 'text-white';
    }
  };

  return (
    <article
      id={`card-${property.id}`}
      className={`group flex flex-col justify-between bg-[#161920] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${getShadowClass()}`}
    >
      {/* Visual Header with Real Architectural Render */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0d0f12]">
        <img
          src={property.image}
          alt={`Fachada arquitetônica ${property.neighborhood}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161920] via-[#161920]/30 to-transparent" />

        {/* Status Indicator */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full bg-[#0d0f12]/80 backdrop-blur-md text-white/90 border border-white/10">
            {property.status}
          </span>
        </div>

        {/* Quick View Trigger */}
        <button
          onClick={() => onOpenDetails(property)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0d0f12]/80 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/90 border border-white/10 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
          title="Ver plantas e memorial descritivo"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Price estimate pill-less */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
          <span className="flex items-center gap-1 text-[#a0aec0]">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[200px]">{property.address}</span>
          </span>
          <span className="font-mono font-semibold tabular-nums text-white bg-[#0d0f12]/70 px-2 py-0.5 rounded">
            {property.priceEstimate}
          </span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Tag strictly matching user's spec */}
          <div className="mb-4">
            <span
              className={`inline-block text-[11px] uppercase tracking-[2px] font-bold px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 ${getTagColor()}`}
            >
              {property.tagline}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            {property.neighborhood}
          </h2>

          {/* Paragraph directly from user brief */}
          <p className="text-[#a0aec0] text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {property.description}
          </p>

          {/* Key Architectural Metrics */}
          <div className="grid grid-cols-3 gap-2 py-4 mb-6 border-y border-white/10 text-xs text-[#a0aec0]">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-white/50 tracking-wider">Área Privativa</span>
              <span className="font-mono text-white font-medium tabular-nums mt-0.5">{property.typologies}</span>
            </div>
            <div className="flex flex-col border-x border-white/10 px-2">
              <span className="text-[10px] uppercase text-white/50 tracking-wider">Configuração</span>
              <span className="text-white font-medium truncate mt-0.5">3 a 4 Suítes</span>
            </div>
            <div className="flex flex-col pl-2">
              <span className="text-[10px] uppercase text-white/50 tracking-wider">Vagas</span>
              <span className="text-white font-medium mt-0.5">2 a 4 Vagas</span>
            </div>
          </div>
        </div>

        {/* Actions Cluster */}
        <div className="space-y-3 pt-2">
          {/* Primary CTA from user's brief with exact styling */}
          <button
            onClick={() => onSelectCta(property)}
            className={`w-full text-center py-4 px-6 rounded-lg font-bold text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] ${property.buttonClass}`}
          >
            {property.ctaText}
          </button>

          {/* Secondary Details Trigger */}
          <button
            onClick={() => onOpenDetails(property)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs text-[#a0aec0] hover:text-white transition-colors cursor-pointer group/btn"
          >
            <span>Ver Memorial, Lazer & Plantas</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
