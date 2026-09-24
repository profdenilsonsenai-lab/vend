import React, { useState } from 'react';
import { propertiesData } from '../data/properties';
import { Calculator, FileText, CheckCircle2, MessageCircle } from 'lucide-react';

interface SimulatorProps {
  onOpenBookingWithSimulation: (details: { propertyName: string; plan: string; price: number }) => void;
}

export const InvestmentSimulator: React.FC<SimulatorProps> = ({
  onOpenBookingWithSimulation,
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<'mooca' | 'tatuape' | 'vilaema'>('tatuape');
  const [unitTypeIndex, setUnitTypeIndex] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);

  const currentProperty = propertiesData.find((p) => p.id === selectedPropertyId)!;
  const currentPlan = currentProperty.floorPlans[unitTypeIndex] || currentProperty.floorPlans[0];

  // Base numerical value estimate for calculation
  const getBasePrice = () => {
    if (selectedPropertyId === 'mooca') {
      return unitTypeIndex === 0 ? 1680000 : 2580000;
    }
    if (selectedPropertyId === 'tatuape') {
      return unitTypeIndex === 0 ? 2450000 : 5100000;
    }
    // vilaema
    return unitTypeIndex === 0 ? 1290000 : 1890000;
  };

  const basePrice = getBasePrice();
  const downPayment = basePrice * (downPaymentPercent / 100);
  const constructionPeriodMonths = 36;
  const constructionFlowPercent = 35; // 35% total during construction
  const remainingConstruction = Math.max(0, basePrice * (constructionFlowPercent / 100) - downPayment);
  const monthlyParcel = remainingConstruction / constructionPeriodMonths;
  const deliveryFinancing = basePrice * ((100 - constructionFlowPercent) / 100);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 bg-[#161920]/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb26c] font-semibold mb-3">
            <span>Planejamento Financeiro</span>
            <span aria-hidden="true">·</span>
            <span>Fluxo de Pré-Lançamento</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Simulador de Condições Especiais
          </h2>
          <p className="text-[#a0aec0] text-base leading-relaxed">
            Consulte a estimativa de fluxo de pagamento personalizado durante o período de obras, com entrada facilitada direto com a incorporadora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#161920] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Neighborhood Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-2">
                1. Escolha o Lançamento
              </label>
              <div className="grid grid-cols-3 gap-2">
                {propertiesData.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPropertyId(p.id);
                      setUnitTypeIndex(0);
                    }}
                    className={`py-3 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedPropertyId === p.id
                        ? 'bg-white/10 text-white border-[#dfb26c]'
                        : 'bg-[#0d0f12] text-[#a0aec0] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="block">{p.neighborhood}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Typology Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-2">
                2. Selecione a Metragem
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentProperty.floorPlans.map((plan, idx) => (
                  <button
                    key={idx}
                    onClick={() => setUnitTypeIndex(idx)}
                    className={`p-3.5 rounded-lg text-left border transition-all cursor-pointer ${
                      unitTypeIndex === idx
                        ? 'bg-[#0d0f12] border-[#dfb26c] shadow-sm'
                        : 'bg-[#0d0f12]/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <span className="block text-sm font-semibold text-white">{plan.title}</span>
                    <span className="block text-xs text-[#a0aec0] mt-0.5">{plan.suites} · {plan.parking}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Down Payment Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-[#a0aec0] font-semibold">
                  3. Sinal / Entrada Sugerida
                </span>
                <span className="font-mono font-bold text-white text-sm tabular-nums">
                  {downPaymentPercent}% ({formatCurrency(downPayment)})
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={40}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#0d0f12] rounded-lg appearance-none cursor-pointer accent-[#dfb26c]"
              />
              <div className="flex justify-between text-[11px] text-[#a0aec0]">
                <span>10% (Mínimo de Pré-Lançamento)</span>
                <span>25%</span>
                <span>40%</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0d0f12] border border-white/5 text-xs text-[#a0aec0] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#dfb26c]" />
                <span>Condição especial de pré-lançamento direto com a construtora</span>
              </div>
              <p className="pl-6 text-[11px] leading-relaxed">
                Correção pelo INCC durante a construção. Possibilidade de personalização de plantas e acabamentos no período de obras.
              </p>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-[#0d0f12] rounded-xl border border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#dfb26c] font-semibold block mb-1">
                Estimativa Consolidada
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                {currentProperty.neighborhood} · {currentPlan.area}
              </h3>

              <div className="space-y-3.5 text-xs border-b border-white/10 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-[#a0aec0]">Valor Referência:</span>
                  <span className="font-mono text-base font-bold text-white tabular-nums">
                    {formatCurrency(basePrice)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#a0aec0]">Ato de Entrada ({downPaymentPercent}%):</span>
                  <span className="font-mono font-medium text-white tabular-nums">
                    {formatCurrency(downPayment)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#a0aec0]">36x Mensais nas Obras:</span>
                  <span className="font-mono font-medium text-[#dfb26c] tabular-nums">
                    {formatCurrency(monthlyParcel)} / mês
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#a0aec0]">Saldo Chaves / Financiamento:</span>
                  <span className="font-mono font-medium text-white tabular-nums">
                    {formatCurrency(deliveryFinancing)}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <button
                onClick={() =>
                  onOpenBookingWithSimulation({
                    propertyName: currentProperty.neighborhood,
                    plan: currentPlan.title,
                    price: basePrice,
                  })
                }
                className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-[#dfb26c] to-[#e8c385] text-[#0d0f12] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-lg shadow-[#dfb26c]/20"
              >
                Solicitar Proposta Formal Desta Simulação
              </button>

              <a
                href="https://forms.gle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs text-[#a0aec0] hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Preencher Formulário de Cadastro Direto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
