'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ResultProps {
  value: string;
  fromValue: string;
  fromUnit: string;
  toUnit: string;
}

export default function Result({ value, fromValue, fromUnit, toUnit }: ResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const hasValue = fromValue.trim() !== '' && !isNaN(parseFloat(fromValue));

  return (
    <div className="space-y-4">
      {/* Result Display */}
      <div className="card bg-primary-500 text-white shadow-soft-xl">
        <div className="text-center">
          <div className="text-sm opacity-90 mb-2">Result</div>
          <div className="text-4xl font-bold mb-3 break-all">
            {hasValue ? value : '0'}
          </div>
          <div className="text-lg opacity-90">
            {toUnit}
          </div>
        </div>
      </div>

      {/* Conversion Formula */}
      {hasValue && (
        <div className="card bg-gray-50 dark:bg-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="text-center text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{fromValue}</span> {fromUnit}
            <span className="mx-2">=</span>
            <span className="font-semibold">{value}</span> {toUnit}
          </div>
        </div>
      )}

      {/* Copy Button */}
      {hasValue && (
        <button
          onClick={handleCopy}
          className="btn-secondary w-full flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              Copy Result
            </>
          )}
        </button>
      )}
    </div>
  );
}
