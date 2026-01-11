import { Tool } from '@/types';

export const TOOLS: Tool[] = [
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'Calculate your exact age with multiple modes: birth to today, custom dates, or date ranges.',
    icon: 'Calendar',
    href: '/tools/age-calculator',
    color: 'from-primary-400 to-primary-600',
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    description: 'Convert currencies in real-time with live exchange rates from around the world.',
    icon: 'DollarSign',
    href: '/tools/currency-converter',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    description: 'Create strong, secure passwords instantly with customizable length and character types.',
    icon: 'Lock',
    href: '/tools/password-generator',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    id: 'word-counter',
    title: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs with estimated reading time.',
    icon: 'FileText',
    href: '/tools/word-counter',
    color: 'from-green-400 to-emerald-600',
  },
  {
    id: 'unit-converter',
    title: 'Unit Converter',
    description: 'Convert length, weight, and temperature units easily and accurately.',
    icon: 'Ruler',
    href: '/tools/unit-converter',
    color: 'from-purple-400 to-violet-600',
  },
];

export const POPULAR_CURRENCIES = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'INR', name: 'Indian Rupee' },
];

export const FOOTER_LINKS = {
  tools: [
    { label: 'Age Calculator', href: '/tools/age-calculator' },
    { label: 'Currency Converter', href: '/tools/currency-converter' },
    { label: 'Password Generator', href: '/tools/password-generator' },
    { label: 'Word Counter', href: '/tools/word-counter' },
    { label: 'Unit Converter', href: '/tools/unit-converter' },
  ],
  legal: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
