import { CurrencyData } from '@/types';

// Environment variables for API configuration
const API_URL = process.env.NEXT_PUBLIC_CURRENCY_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;

/**
 * Validate API configuration
 */
function validateApiConfig(): void {
  if (!API_URL || !API_KEY) {
    throw new Error(
      'Currency API configuration missing. Please set NEXT_PUBLIC_CURRENCY_API_URL and NEXT_PUBLIC_CURRENCY_API_KEY in your .env.local file.'
    );
  }

  if (API_KEY === 'your_api_key_here' || API_KEY === 'demo-key') {
    throw new Error(
      'Please replace the placeholder API key with your actual key from https://www.exchangerate-api.com/'
    );
  }
}

/**
 * Fetch latest exchange rates
 */
export async function fetchExchangeRates(
  baseCurrency: string = 'USD'
): Promise<CurrencyData> {
  try {
    validateApiConfig();

    const response = await fetch(
      `${API_URL}/${API_KEY}/latest/${baseCurrency}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }

    const data = await response.json();

    if (data.result === 'error') {
      throw new Error(data['error-type'] || 'API Error');
    }

    return {
      base: data.base_code,
      rates: data.conversion_rates,
      timestamp: data.time_last_update_unix * 1000,
    };
  } catch (error) {
    console.error('Currency API Error:', error);
    
    // Provide helpful error messages
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Unable to fetch exchange rates. Please check your API configuration.');
  }
}

/**
 * Convert currency amount
 */
export function convertCurrency(
  amount: number,
  fromRate: number,
  toRate: number
): number {
  return (amount / fromRate) * toRate;
}

/**
 * Format currency value
 */
export function formatCurrency(
  amount: number,
  currencyCode: string,
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
