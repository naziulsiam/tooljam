'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';
import { parseHexInput, formatRgbString, hexToRgb } from '@/lib/color';

interface ValuesProps {
  color: string;
  onColorChange: (color: string) => void;
  onReset: () => void;
}

export default function Values({ color, onColorChange, onReset }: ValuesProps) {
  const [hexInput, setHexInput] = useState(color);
  const [copiedHex, setCopiedHex] = useState(false);
  const [copiedRgb, setCopiedRgb] = useState(false);
  const [hexError, setHexError] = useState(false);

  // Sync hex input with color prop
  useEffect(() => {
    setHexInput(color);
    setHexError(false);
  }, [color]);

  const rgb = hexToRgb(color);
  const rgbString = rgb ? formatRgbString(rgb) : '0, 0, 0';

  const handleHexChange = (value: string) => {
    setHexInput(value);
    setHexError(false);
  };

  const handleHexBlur = () => {
    const parsed = parseHexInput(hexInput);
    if (parsed) {
      onColorChange(parsed);
      setHexError(false);
    } else {
      setHexError(true);
      // Reset to current color after a brief moment
      setTimeout(() => {
        setHexInput(color);
        setHexError(false);
      }, 1500);
    }
  };

  const handleHexKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleHexBlur();
    }
  };

  const handleCopyHex = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (error) {
      console.error('Failed to copy HEX:', error);
    }
  };

  const handleCopyRgb = async () => {
    try {
      await navigator.clipboard.writeText(rgbString);
      setCopiedRgb(true);
      setTimeout(() => setCopiedRgb(false), 2000);
    } catch (error) {
      console.error('Failed to copy RGB:', error);
    }
  };

  return (
    <div className="space-y-4">
      {/* HEX Value */}
      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="hex-input"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            HEX Color
          </label>
          <button
            onClick={handleCopyHex}
            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-1 transition-colors duration-200"
          >
            {copiedHex ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        </div>
        <input
          type="text"
          id="hex-input"
          value={hexInput}
          onChange={(e) => handleHexChange(e.target.value)}
          onBlur={handleHexBlur}
          onKeyDown={handleHexKeyDown}
          placeholder="#000000"
          className={`w-full px-4 py-3 rounded-xl border-2 font-mono text-lg ${
            hexError
              ? 'border-red-500 dark:border-red-500'
              : 'border-gray-200 dark:border-gray-700'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
        />
        {hexError && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-2">
            Invalid HEX format. Use format: #RRGGBB
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          You can edit this value directly
        </p>
      </div>

      {/* RGB Value */}
      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            RGB Color
          </label>
          <button
            onClick={handleCopyRgb}
            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-1 transition-colors duration-200"
          >
            {copiedRgb ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 font-mono text-lg text-gray-900 dark:text-gray-100">
          {rgbString}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          Red, Green, Blue values (0-255)
        </p>
      </div>

      {/* Color Info Cards */}
      {rgb && (
        <div className="grid grid-cols-3 gap-3">
          <div className="card bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800 text-center">
            <div className="text-xs text-red-600 dark:text-red-400 font-semibold mb-1">
              Red
            </div>
            <div className="text-2xl font-bold text-red-700 dark:text-red-300">
              {rgb.r}
            </div>
          </div>
          <div className="card bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800 text-center">
            <div className="text-xs text-green-600 dark:text-green-400 font-semibold mb-1">
              Green
            </div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              {rgb.g}
            </div>
          </div>
          <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 text-center">
            <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
              Blue
            </div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {rgb.b}
            </div>
          </div>
        </div>
      )}

      {/* Reset Button */}
      <button onClick={onReset} className="btn-secondary w-full flex items-center justify-center gap-2">
        <RotateCcw className="w-5 h-5" />
        Reset to Default
      </button>
    </div>
  );
}
