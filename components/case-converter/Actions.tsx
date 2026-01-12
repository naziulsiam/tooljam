'use client';

import { useState } from 'react';
import {
  ArrowUp,
  ArrowDown,
  Heading,
  AlignLeft,
  Shuffle,
  RefreshCw,
  Copy,
  Check,
  Trash2,
} from 'lucide-react';
import { CaseType, getCaseTypeName } from '@/lib/caseConverter';

interface ActionsProps {
  onConvert: (caseType: CaseType) => void;
  onClear: () => void;
  onCopy: () => void;
  hasText: boolean;
}

export default function Actions({
  onConvert,
  onClear,
  onCopy,
  hasText,
}: ActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const caseTypes: Array<{ type: CaseType; icon: any }> = [
    { type: 'uppercase', icon: ArrowUp },
    { type: 'lowercase', icon: ArrowDown },
    { type: 'titlecase', icon: Heading },
    { type: 'sentencecase', icon: AlignLeft },
    { type: 'alternating', icon: Shuffle },
    { type: 'inverse', icon: RefreshCw },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Convert To
      </h3>

      {/* Conversion Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {caseTypes.map(({ type, icon: Icon }) => (
          <button
            key={type}
            onClick={() => onConvert(type)}
            disabled={!hasText}
            className="h-[88px] w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-soft transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-2"
          >
            <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {getCaseTypeName(type)}
            </span>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleCopy}
          disabled={!hasText}
          className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              Copy Text
            </>
          )}
        </button>

        <button
          onClick={onClear}
          disabled={!hasText}
          className="btn-secondary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 className="w-5 h-5" />
          Clear
        </button>
      </div>
    </div>
  );
}

