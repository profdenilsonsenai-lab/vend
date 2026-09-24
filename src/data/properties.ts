import { Property } from '../types/property';
import moocaImg from '../assets/images/development_mooca_facade_1790208889831.jpg';
import tatuapeImg from '../assets/images/development_tatuape_tower_1790208899350.jpg';
import vilaEmaImg from '../assets/images/development_vilaema_biophilic_1790208909571.jpg';

export const propertiesData: Property[] = [
  {
    id: 'mooca',
    neighborhood: 'Mooca',
    tagline: 'Tradição & Sofisticação',
    concept: 'Mooca Heritage Design',
    description:
      'A perfeita harmonia entre a tradição boêmia da Mooca e o design industrial chic. Tijolos aparentes, concreto contemporâneo e a exclusividade que a sua família merece.',
    extendedDescription:
      'Inspirado nos lofts de Tribeca e nos palacetes históricos da Mooca tradicional, este empreendimento redefine o morar na Zona Leste. Fachada autoral em tijolo de demolição artesanal e caixilharia preta de piso ao teto, proporcionando privacidade ímpar com apenas duas unidades por andar.',
    accentColor: '#c97a53',
    accentBg: 'rgba(201, 122, 83, 0.12)',
    buttonClass: 'bg-[#c97a53] hover:bg-[#b3663f] text-white',
    ctaText: 'Quero Conhecer o Lançamento Mooca',
    image: moocaImg,
    address: 'Região Nobre da Mooca · Próximo ao Juventus',
    typologies: '142m² a 218m²',
    suitesInfo: '3 e 4 Suítes com closet senhor e senhora',
    parkingInfo: '2 a 3 vagas determinadas + depósito privativo',
    priceEstimate: 'A partir de R$ 1.680.000',
    status: 'Pré-Lançamento Exclusivo',
    completionDate: 'Novembro de 2027',
    floorPlans: [
      {
        title: 'Apartamento Tipo · 142m²',
        area: '142m²',
        bedrooms: '3 quartos',
        suites: '3 suítes plenas',
        parking: '2 vagas demarcadas',
        highlights: [
          'Varanda gourmet com churrasqueira a carvão embutida',
          'Elevador privativo com biometria facial',
          'Suíte master com bancada dupla e cuba esculpida',
          'Cozinha com ventilação e iluminação direta',
        ],
      },
      {
        title: 'Garden Duplex · 218m²',
        area: '218m²',
        bedrooms: '4 quartos',
        suites: '4 suítes',
        parking: '3 vagas demarcadas + hobby box',
        highlights: [
          'Pátio ajardinado privativo com piscina com hidro',
          'Pé-direito duplo de 5,80m no living principal',
          'Espaço adega climatizada para até 180 rótulos',
          'Entrada de serviço completamente independente',
        ],
      },
    ],
    amenities: [
      { name: 'Adega Climatizada e Wine Lounge Privativo', category: 'exclusive' },
      { name: 'Piscina Coberta Aquecida com Raia de 25m', category: 'wellness' },
      { name: 'Espaço Gastronômico com Forno de Pizza à Lenha', category: 'leisure' },
      { name: 'Academia assinada por consultoria esportiva', category: 'wellness' },
      { name: 'Spa com Sauna Seca e Sala de Massagem', category: 'wellness' },
      { name: 'Pet Place com área de agility e banho', category: 'convenience' },
      { name: 'Espaço Delivery com lockers refrigerados', category: 'convenience' },
      { name: 'Gerador full atendendo 100% das unidades', category: 'convenience' },
    ],
    neighborhoodHighlights: [
      {
        title: 'Gastronomia Secular',
        description: 'A poucos passos das pizzarias e cantinas mais premiadas da capital paulista (San Gennaro, Di Cunto, Hospedaria).',
      },
      {
        title: 'Tradição Familiar & Segurança',
        description: 'Bairro com forte identidade comunitária, ruas arborizadas, clubes tradicionais e excelência em colégios bilíngues.',
      },
      {
        title: 'Mobilidade Estratégica',
        description: 'Acesso rápido à Avenida Radial Leste, Marginal Tietê, Av. Paes de Barros e a 10 minutos da Av. Paulista.',
      },
    ],
  },
  {
    id: 'tatuape',
    neighborhood: 'Tatuapé',
    tagline: 'Poder & Elevação',
    concept: 'Tatuapé High Skyline',
    description:
      'Sua vida no topo. Uma torre imponente com arquitetura minimalista de altíssimo padrão, vistas panorâmicas deslumbrantes e o skyline mais cobiçado da Zona Leste.',
    extendedDescription:
      'Um marco escultural na silhueta de São Paulo. Com mais de 140 metros de altura e vidros de alta performance térmica e acústica importados, o projeto eleva o conceito de morar no Tatuapé com heliponto homologado, sky lounge panorâmico no 38º andar e serviços de hospitalidade boutique.',
    accentColor: '#dfb26c',
    accentBg: 'rgba(223, 178, 108, 0.12)',
    buttonClass: 'bg-[#dfb26c] hover:bg-[#cc9e56] text-[#0d0f12]',
    ctaText: 'Garantir Minha Unidade no Tatuapé',
    image: tatuapeImg,
    address: 'Altos do Tatuapé · Próximo ao Parque Ceret e Shopping Anália Franco',
    typologies: '185m² a 380m²',
    suitesInfo: '4 Suítes com master de 42m² e varanda privativa',
    parkingInfo: '3 a 4 vagas + ponto de recarga elétrica individual',
    priceEstimate: 'A partir de R$ 2.450.000',
    status: 'Condições Especiais de Lançamento',
    completionDate: 'Agosto de 2027',
    floorPlans: [
      {
        title: 'Apartamento Prestige · 185m²',
        area: '185m²',
        bedrooms: '4 dormitórios',
        suites: '4 suítes',
        parking: '3 vagas livres',
        highlights: [
          'Living integrado com vão livre sem pilares de 11 metros',
          'Varanda 180° com vista permanente para o skyline',
          'Suíte master com sala de banho e hidromassagem',
          'Tratamento acústico nas lajes e caixilhos',
        ],
      },
      {
        title: 'Penthouse Duplex Sky Residence · 380m²',
        area: '380m²',
        bedrooms: '4 suítes master',
        suites: '4 suítes com walk-in closet',
        parking: '4 vagas + box privativo no subsolo',
        highlights: [
          'Piscina suspensa privativa com borda infinita de vidro',
          'Terraço panorâmico com lareira ecológica ao ar livre',
          'Pé-direito duplo de 6,20m e mezanino para home office executivo',
          'Elevador privativo com acesso direto aos dois pavimentos',
        ],
      },
    ],
    amenities: [
      { name: 'Sky Lounge no 38º andar com vista 360° de SP', category: 'exclusive' },
      { name: 'Piscina de Borda Infinita com Deck Molhado', category: 'wellness' },
      { name: 'Heliponto executivo homologado para moradores', category: 'exclusive' },
      { name: 'Quadra de Tênis de Saibro Oficial coberta', category: 'leisure' },
      { name: 'Quadra de Beach Tennis climatizada', category: 'leisure' },
      { name: 'Concierge 24h e Valet Parking para visitantes', category: 'convenience' },
      { name: 'Business Lounge com 4 salas de videoconferência', category: 'convenience' },
      { name: 'Studio Pilates e Sala de Yoga privativos', category: 'wellness' },
    ],
    neighborhoodHighlights: [
      {
        title: 'Polo Gastronômico e Corporativo',
        description: 'Cercado pelos melhores restaurantes e cafés da Rua Itapura e Azevedo Soares, além do eixo financeiro da região.',
      },
      {
        title: 'Lazer e Esportes Nobres',
        description: 'A 3 minutos do Parque Esportivo dos Trabalhadores (Ceret) e do prestigiado Shopping Anália Franco.',
      },
      {
        title: 'Infraestrutura Hospitalar e Escolar de Ponta',
        description: 'Proximidade imediata ao Hospital São Luiz Anália Franco, Hospital Vitória e colégios de alto padrão.',
      },
    ],
  },
  {
    id: 'vilaema',
    neighborhood: 'Vila Ema',
    tagline: 'Bem-estar & Conexão',
    concept: 'Vila Ema Biophilic Sanctuary',
    description:
      'O refúgio urbano perfeito. Arquitetura orgânica totalmente integrada à natureza, jardins suspensos e a mobilidade inteligente que a sua rotina dinâmica exige.',
    extendedDescription:
      'Projetado para quem valoriza a serenidade sem abrir mão do dinamismo metropolitano. Uma torre verde com jardins verticais irrigados com água de reuso pluvial, brises térmicos de madeira certificada e espaços pensados para o bem-estar holístico.',
    accentColor: '#52a97a',
    accentBg: 'rgba(82, 169, 122, 0.12)',
    buttonClass: 'bg-[#52a97a] hover:bg-[#418f64] text-white',
    ctaText: 'Descobrir o Estilo de Vida Vila Ema',
    image: vilaEmaImg,
    address: 'Vila Ema Nobre · A 400m da Estação São Lucas (Linha 15-Prata)',
    typologies: '115m² a 168m²',
    suitesInfo: '3 Suítes com ventilação natural cruzada',
    parkingInfo: '2 vagas determinadas + bicicletário equipado',
    priceEstimate: 'A partir de R$ 1.290.000',
    status: 'Abertura de Reservas Prioritárias',
    completionDate: 'Março de 2028',
    floorPlans: [
      {
        title: 'Residência Botânica · 115m²',
        area: '115m²',
        bedrooms: '3 dormitórios',
        suites: '3 suítes',
        parking: '2 vagas demarcadas',
        highlights: [
          'Varanda biofílica com jardineira automatizada privativa',
          'Conceito aberto integrando cozinha, sala de jantar e varanda',
          'Janelas amplas do piso ao teto com atenuação sonora',
          'Infraestrutura para automação residencial total e Alexa',
        ],
      },
      {
        title: 'Cobertura Duplex Ema Nature · 168m²',
        area: '168m²',
        bedrooms: '3 ou 4 dormitórios',
        suites: '3 suítes plenas',
        parking: '2 vagas + ponto elétrico',
        highlights: [
          'Solarium privativo na cobertura com spa aquecido',
          'Espaço gourmet ao ar livre com pergolado em madeira teca',
          'Suíte master com closet walk-through e vista para o verde',
          'Captação de energia solar fotovoltaica para áreas privativas',
        ],
      },
    ],
    amenities: [
      { name: 'Bosque Privativo Preservado com 1.200m²', category: 'wellness' },
      { name: 'Piscina Natural Biológica com Filtragem por Plantas', category: 'wellness' },
      { name: 'Horta Orgânica Comunitária e Pomar Urbano', category: 'wellness' },
      { name: 'Espaço Coworking Verde integrado ao jardim', category: 'convenience' },
      { name: 'Fitness Center completo com área externa de calistenia', category: 'wellness' },
      { name: 'Oficina para Bikes com estação de calibragem e ferramentas', category: 'convenience' },
      { name: 'Salão de Festas Gourmet com deck externo', category: 'leisure' },
      { name: 'Certificação de Sustentabilidade AQUA-HQE', category: 'exclusive' },
    ],
    neighborhoodHighlights: [
      {
        title: 'Mobilidade Inteligente',
        description: 'Localização privilegiada a passos da Linha Prata do Metrô, conectando rapidamente à Linha Verde (Paulista).',
      },
      {
        title: 'Bairro Verde & Conforto',
        description: 'Região tranquila com atmosfera residencial arborizada, feiras orgânicas e ritmo de vida equilibrado.',
      },
      {
        title: 'Forte Vetor de Valorização',
        description: 'Bairro com o metro quadrado em franca valorização e alta demanda por empreendimentos de alto padrão.',
      },
    ],
  },
];
