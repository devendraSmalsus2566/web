
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'trilo-i1-industrial',
    name: 'Trilo-Industrial X-Pro',
    category: 'Industrial',
    price: '$8,499',
    features: ['Fully Enclosed', 'Dual Extrusion', 'PEEK Support'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate industrial workbench solution for large scale components.',
    isAuthentic: true
  },
  {
    id: 'trilo-f3-pro',
    name: 'Trilo-MK4 Desktop',
    category: 'Desktop',
    price: '$1,299',
    features: ['Input Shaping', 'Auto-Leveling', 'Open Source'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'High-speed desktop printing with precision and ease.',
    isAuthentic: true
  },
  {
    id: 'trilo-wire-kit-pro',
    name: 'Trilo-Silicone Wiring Kit',
    category: 'Wires',
    price: '$45',
    features: ['Heat Resistant (200°C)', 'High Flexibility', 'Tin-Plated Copper'],
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
    description: 'Professional grade internal wiring kit for high-temp 3D printer builds.',
    isAuthentic: true
  },
  {
    id: 'trilo-ribbon-cable',
    name: 'Flat Ribbon Cable (34-Pin)',
    category: 'Wires',
    price: '$12',
    features: ['EMI Shielding', 'Gold-Plated Pins', '2-Meter Length'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    description: 'Standard connection cable for display panels and motherboard signals.',
    isAuthentic: true
  },
  {
    id: 'trilo-nozzle-steel',
    name: 'Hardened Steel Nozzle Kit',
    category: 'Parts',
    price: '$85',
    features: ['Abrasion Resistant', 'High Thermal Conductivity', 'Non-Stick Coating'],
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800',
    description: 'Essential for industrial carbon fiber and glass-filled composite materials.',
    isAuthentic: true
  },
  {
    id: 'trilo-glass-bed',
    name: 'Tempered Glass Build Plate',
    category: 'Parts',
    price: '$35',
    features: ['High Adhesion', 'Easy Removal', 'Uniform Heating'],
    image: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=800',
    description: 'Genuine replacement build surface for Trilo-MK4 series.',
    isAuthentic: true
  },
  {
    id: 'trilo-motor-harness',
    name: 'Stepper Motor Extension Kit',
    category: 'Wires',
    price: '$15',
    features: ['JST-XH Connectors', 'Stress-Relief Braiding', 'Shielded'],
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=800',
    description: 'Anti-interference wiring for precise motor control.',
    isAuthentic: true
  },
  {
    id: 'trilo-v3-resin',
    name: 'S5 Ultra Resin Station',
    category: 'Resin',
    price: '$2,199',
    features: ['12K Detail', 'Air Purification', 'Fast Curing'],
    image: 'https://images.unsplash.com/photo-1631284531818-472097746147?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-high resolution resin printer for dental and jewelry sectors.',
    isAuthentic: true
  }
];
