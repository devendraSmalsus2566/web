
export interface Product {
  id: string;
  name: string;
  category: 'Desktop' | 'Industrial' | 'Resin' | 'Parts' | 'Wires';
  price: string;
  features: string[];
  image: string;
  description: string;
  isAuthentic?: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum PrinterCategory {
  DESKTOP = 'Desktop',
  INDUSTRIAL = 'Industrial',
  RESIN = 'Resin',
  PARTS = 'Parts',
  WIRES = 'Wires'
}
