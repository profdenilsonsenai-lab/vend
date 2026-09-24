export type NeighborhoodId = 'mooca' | 'tatuape' | 'vilaema';

export interface Amenity {
  name: string;
  category: 'wellness' | 'exclusive' | 'leisure' | 'convenience';
}

export interface FloorPlan {
  title: string;
  area: string;
  bedrooms: string;
  suites: string;
  parking: string;
  highlights: string[];
}

export interface Property {
  id: NeighborhoodId;
  neighborhood: string;
  tagline: string;
  concept: string;
  description: string;
  extendedDescription: string;
  accentColor: string;
  accentBg: string;
  buttonClass: string;
  ctaText: string;
  image: string;
  address: string;
  typologies: string;
  suitesInfo: string;
  parkingInfo: string;
  priceEstimate: string;
  status: string;
  completionDate: string;
  floorPlans: FloorPlan[];
  amenities: Amenity[];
  neighborhoodHighlights: {
    title: string;
    description: string;
  }[];
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  propertyId: NeighborhoodId | 'all';
  interestType: 'investir' | 'morar';
  preferredContact: 'whatsapp' | 'telefone' | 'email';
  message?: string;
}
