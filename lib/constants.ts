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
  { code: 'BDT', name: 'Bangladeshi Taka' },
];

export const FOOTER_LINKS = {
  tools: [
    { label: 'Age Calculator', href: '/tools/age-calculator' },
    { label: 'Currency Converter', href: '/tools/currency-converter' },
  ],
  legal: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
