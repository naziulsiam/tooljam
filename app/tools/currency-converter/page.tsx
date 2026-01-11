'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, DollarSign, RefreshCw, ArrowRightLeft, AlertCircle } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';
import { convertCurrency, formatCurrency } from '@/lib/currency';
import { POPULAR_CURRENCIES } from '@/lib/constants';
import AdSlot from '@/components/AdSlot';

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState<number | null>(null);

  const { data, loading, error, refetch } = useCurrency(fromCurrency);

  useEffect(() => {
    if (data && amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount)) {
        const converted = convertCurrency(
          numAmount,
          data.rates[fromCurrency] || 1,
          data.rates[toCurrency] || 1
        );
        setResult(converted);
      }
    }
  }, [amount, fromCurrency, toCurrency, data]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const lastUpdated = data
    ? new Date(data.timestamp).toLocaleString()
    : 'N/A';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-4 border border-primary-100 dark:border-gray-700">
          <DollarSign className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Currency Converter
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Live Currency Converter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Convert currencies with real-time exchange rates
        </p>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      <div className="card mb-6">
        {loading && !data ? (
          <div className="text-center py-12">
            <RefreshCw className="w-12 h-12 text-primary-400 mx-auto mb-4 animate-spin" />
            <p className="text-gray-600 dark:text-gray-400">
              Loading exchange rates...
            </p>
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 dark:text-red-400 font-semibold mb-2">
                    Configuration Error
                  </p>
                  <p className="text-red-600 dark:text-red-300 text-sm mb-3">
                    {error}
                  </p>
                  {error.includes('API configuration') && (
                    <div className="text-sm text-red-600 dark:text-red-300 space-y-2">
                      <p className="font-semibold">Quick Fix:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Get a free API key from <a href="https://www.exchangerate-api.com/" target="_blank" rel="noopener noreferrer" className="underline">exchangerate-api.com</a></li>
                        <li>Create a <code className="bg-red-100 dark:bg-red-900/50 px-1 rounded">.env.local</code> file in your project root</li>
                        <li>Add: <code className="bg-red-100 dark:bg-red-900/50 px-1 rounded">NEXT_PUBLIC_CURRENCY_API_KEY=your_key</code></li>
                        <li>Restart the development server</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
              <button onClick={refetch} className="btn-primary w-full">
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
                placeholder="Enter amount"
                className="w-full px-4 py-3 text-2xl font-semibold"
              />
            </div>

            {/* Currency Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
              <div>
                <label
                  htmlFor="fromCurrency"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  From
                </label>
                <select
                  id="fromCurrency"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {POPULAR_CURRENCIES.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSwap}
                className="p-3 bg-primary-50 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-gray-600 rounded-xl transition-colors duration-200 mb-[2px]"
                aria-label="Swap currencies"
              >
                <ArrowRightLeft className="w-5 h-5 text-primary-700 dark:text-primary-300" />
              </button>

              <div>
                <label
                  htmlFor="toCurrency"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  To
                </label>
                <select
                  id="toCurrency"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {POPULAR_CURRENCIES.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            {result !== null && (
              <div className="card bg-primary-500 text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Converted Amount</div>
                  <div className="text-4xl font-bold mb-1">
                    {formatCurrency(result, toCurrency)}
                  </div>
                  <div className="text-sm opacity-80">
                    {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
                  </div>
                </div>
              </div>
            )}

            {/* Exchange Rate Info */}
            {data && (
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  1 {fromCurrency} = {data.rates[toCurrency]?.toFixed(4)}{' '}
                  {toCurrency}
                </div>
                <button
                  onClick={refetch}
                  className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            )}

            {/* Last Updated */}
            <div className="text-xs text-center text-gray-500 dark:text-gray-500">
              Last updated: {lastUpdated}
            </div>
          </div>
        )}
      </div>

      {/* Info Card */}
      <div className="card bg-primary-50 dark:bg-gray-800/50 border-primary-100 dark:border-gray-700 mb-8">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          💡 About Exchange Rates
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Exchange rates are updated regularly and sourced from reliable financial
          data providers. Rates shown are for informational purposes and may differ
          slightly from rates offered by banks or exchange services.
        </p>
      </div>

      {/* Ad Slot - Bottom */}
      <AdSlot format="horizontal" />
    </div>
  );
}
