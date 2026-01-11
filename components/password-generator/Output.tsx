'use client';

import { useState } from 'react';
import { Copy, RefreshCw, Check, Shield, AlertTriangle } from 'lucide-react';
import { PasswordStrength } from '@/lib/password';

interface OutputProps {
  password: string;
  strength: PasswordStrength;
  onRegenerate: () => void;
}

export default function Output({ password, strength, onRegenerate }: OutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const strengthConfig = {
    weak: {
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      label: 'Weak',
      icon: AlertTriangle,
    },
    medium: {
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      border: 'border-amber-200 dark:border-amber-800',
      label: 'Medium',
      icon: Shield,
    },
    strong: {
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      label: 'Strong',
      icon: Shield,
    },
  };

  const config = strengthConfig[strength];
  const StrengthIcon = config.icon;

  return (
    <div className="space-y-4">
      {/* Password Display */}
      <div className="relative">
        <div className="card bg-gray-50 dark:bg-gray-800 p-6">
          <div className="font-mono text-2xl text-center break-all text-gray-900 dark:text-white leading-relaxed">
            {password || '••••••••••••'}
          </div>
        </div>
      </div>

      {/* Strength Indicator */}
      {password && (
        <div className={`card ${config.bg} border ${config.border} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
          <div className="flex items-center gap-3">
            <StrengthIcon className={`w-5 h-5 ${config.color}`} />
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Password Strength
              </div>
              <div className={`text-lg font-bold ${config.color}`}>
                {config.label}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleCopy}
          disabled={!password}
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
              Copy
            </>
          )}
        </button>

        <button
          onClick={onRegenerate}
          className="btn-secondary flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Regenerate
        </button>
      </div>
    </div>
  );
}
