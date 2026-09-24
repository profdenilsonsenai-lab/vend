import React, { useState } from 'react';
import { NeighborhoodId } from '../types/property';
import { Send, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck, Phone } from 'lucide-react';

interface LeadFormProps {
  initialProperty?: NeighborhoodId | 'all';
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialProperty = 'all', onSuccess }) => {
  const [propertyId, setPropertyId] = useState<NeighborhoodId | 'all'>(initialProperty);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestType, setInterestType] = useState<'morar' | 'investir'>('morar');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'telefone' | 'email'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Por favor, informe seu nome completo.';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Informe um e-mail válido.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Informe seu telefone ou WhatsApp.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 2500);
    }
  };

  const openWhatsAppDirect = () => {
    const targetName =
      propertyId === 'mooca'
        ? 'Lançamento Mooca'
        : propertyId === 'tatuape'
        ? 'Lançamento Tatuapé'
        : propertyId === 'vilaema'
        ? 'Lançamento Vila Ema'
        : 'Lançamentos de Alto Padrão SP';

    const msg = encodeURIComponent(
      `Olá! Gostaria de receber o memorial descritivo e a tabela de pré-lançamento do ${targetName}.`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#0d0f12] border-t border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#161920] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold accent corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#dfb26c]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb26c] font-semibold mb-3">
              <span>Atendimento Privativo</span>
              <span aria-hidden="true">·</span>
              <span>Plantão Exclusivo</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Garanta Condições Especiais de Lançamento
            </h2>
            <p className="text-sm sm:text-base text-[#a0aec0]">
              Cadastre-se para receber o book digital completo, plantas em alta resolução e acesso antecipado à tabela de abertura.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 px-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-[#52a97a]/20 border border-[#52a97a] rounded-full flex items-center justify-center mx-auto text-[#52a97a]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-sm text-[#a0aec0] max-w-md mx-auto leading-relaxed">
                Um consultor especialista sênior entrará em contato via {preferredContact.toUpperCase()} com os materiais do empreendimento escolhido.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#dfb26c] hover:underline cursor-pointer"
                >
                  Fazer nova consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              {/* Development selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-2">
                  Empreendimento de Interesse
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setPropertyId('mooca')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      propertyId === 'mooca'
                        ? 'bg-[#c97a53]/20 border-[#c97a53] text-white'
                        : 'bg-[#0d0f12] text-[#a0aec0] border-white/5 hover:border-white/20'
                    }`}
                  >
                    Mooca
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyId('tatuape')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      propertyId === 'tatuape'
                        ? 'bg-[#dfb26c]/20 border-[#dfb26c] text-white'
                        : 'bg-[#0d0f12] text-[#a0aec0] border-white/5 hover:border-white/20'
                    }`}
                  >
                    Tatuapé
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyId('vilaema')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      propertyId === 'vilaema'
                        ? 'bg-[#52a97a]/20 border-[#52a97a] text-white'
                        : 'bg-[#0d0f12] text-[#a0aec0] border-white/5 hover:border-white/20'
                    }`}
                  >
                    Vila Ema
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyId('all')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      propertyId === 'all'
                        ? 'bg-white/10 border-white/40 text-white'
                        : 'bg-[#0d0f12] text-[#a0aec0] border-white/5 hover:border-white/20'
                    }`}
                  >
                    Todos os 3
                  </button>
                </div>
              </div>

              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-[#0d0f12] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#dfb26c] transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-1.5">
                    WhatsApp ou Celular
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 bg-[#0d0f12] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#dfb26c] transition-colors"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email and Objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-1.5">
                    E-mail Pessoal ou Corporativo
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-[#0d0f12] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#dfb26c] transition-colors"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a0aec0] font-semibold mb-1.5">
                    Objetivo Principal
                  </label>
                  <div className="grid grid-cols-2 gap-2 h-[46px]">
                    <button
                      type="button"
                      onClick={() => setInterestType('morar')}
                      className={`rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        interestType === 'morar'
                          ? 'bg-white/15 border-white/30 text-white font-bold'
                          : 'bg-[#0d0f12] text-[#a0aec0] border-white/5'
                      }`}
                    >
                      Moradia Própria
                    </button>
                    <button
                      type="button"
                      onClick={() => setInterestType('investir')}
                      className={`rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        interestType === 'investir'
                          ? 'bg-white/15 border-white/30 text-white font-bold'
                          : 'bg-[#0d0f12] text-[#a0aec0] border-white/5'
                      }`}
                    >
                      Investimento
                    </button>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#dfb26c] to-[#e8c385] text-[#0d0f12] font-bold text-sm uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-[#dfb26c]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Atendimento e Material Completo</span>
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-[#a0aec0]">
                  <button
                    type="button"
                    onClick={openWhatsAppDirect}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#52a97a]" />
                    <span>Prefere WhatsApp? Iniciar conversa imediata</span>
                  </button>

                  <a
                    href="https://forms.gle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>Formulário Google Forms Externo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2 text-center text-[11px] text-white/40 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#dfb26c]" />
                <span>Seus dados são protegidos pela LGPD. Não enviamos spam.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
