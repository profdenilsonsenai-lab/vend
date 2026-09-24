/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { propertiesData } from './data/properties';
import { Property, NeighborhoodId } from './types/property';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyCard } from './components/PropertyCard';
import { PropertyModal } from './components/PropertyModal';
import { Comparator } from './components/Comparator';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { NeighborhoodGuide } from './components/NeighborhoodGuide';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<Property | null>(null);
  const [leadFormProperty, setLeadFormProperty] = useState<NeighborhoodId | 'all'>('all');

  const handleSelectPropertyFromHero = (id: string) => {
    const el = document.getElementById(`card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleOpenConsultation = (preferredId?: string) => {
    if (preferredId) {
      setLeadFormProperty(preferredId as NeighborhoodId);
    }
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCtaClick = (property: Property) => {
    setLeadFormProperty(property.id);
    // Also opens modal or scrolls to lead form
    setSelectedPropertyForModal(property);
  };

  const handleSimulationBooking = (details: { propertyName: string; plan: string; price: number }) => {
    handleOpenConsultation(
      details.propertyName.toLowerCase().includes('mooca')
        ? 'mooca'
        : details.propertyName.toLowerCase().includes('tatuapé') || details.propertyName.toLowerCase().includes('tatuape')
        ? 'tatuape'
        : 'vilaema'
    );
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f4f5f7] flex flex-col font-sans selection:bg-[#dfb26c]/30 selection:text-white">
      {/* Top Bar */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero
        onSelectProperty={handleSelectPropertyFromHero}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Grid: The 3 Icon Developments */}
      <main id="lancamentos" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb26c] font-semibold mb-3">
              <span>Portfólio Exclusivo</span>
              <span aria-hidden="true">·</span>
              <span>Zona Leste & Centro Expandido</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Lançamentos Imobiliários de Alto Padrão
            </h2>
            <p className="text-[#a0aec0] text-base sm:text-lg leading-relaxed">
              Três conceitos residenciais singulares, concebidos por escritórios de arquitetura renomados para proporcionar exclusividade e qualidade de vida.
            </p>
          </div>

          {/* Cards Grid preserving user structure and colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {propertiesData.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onOpenDetails={(prop) => setSelectedPropertyForModal(prop)}
                onSelectCta={handleCtaClick}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Side-by-side Comparative Analysis */}
      <Comparator
        onSelectProperty={(prop) => setSelectedPropertyForModal(prop)}
      />

      {/* Pre-launch Financial & Flow Simulator */}
      <InvestmentSimulator
        onOpenBookingWithSimulation={handleSimulationBooking}
      />

      {/* Neighborhood and Culture Guide */}
      <NeighborhoodGuide />

      {/* Lead Capture and VIP Contact */}
      <LeadForm initialProperty={leadFormProperty} />

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Modal */}
      <PropertyModal
        property={selectedPropertyForModal}
        onClose={() => setSelectedPropertyForModal(null)}
        onOpenBooking={(prop) => {
          setSelectedPropertyForModal(null);
          handleOpenConsultation(prop.id);
        }}
      />

      {/* Floating Concierge Action */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20lan%C3%A7amentos%20de%20alto%20padr%C3%A3o%20em%20SP."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atendimento via WhatsApp"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#52a97a] hover:bg-[#418f64] text-white rounded-full shadow-2xl shadow-[#52a97a]/40 hover:scale-105 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider"
        >
          <MessageSquare className="w-4 h-4 fill-white text-transparent" />
          <span className="hidden sm:inline">WhatsApp Plantão</span>
        </a>
      </div>
    </div>
  );
}
