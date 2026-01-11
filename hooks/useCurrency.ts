'use client';

import { useState, useEffect, useCallback } from 'react';
import { CurrencyData } from '@/types';
import { fetchExchangeRates } from '@/lib/currency';

interface UseCurrencyResult {
  data: CurrencyData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useCurrency(baseCurrency: string = 'USD'): UseCurrencyResult {
  const [data, setData] = useState<CurrencyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const rates = await fetchExchangeRates(baseCurrency);
      setData(rates);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
