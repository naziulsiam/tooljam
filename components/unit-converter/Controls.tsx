'use client';

import { UnitCategory, UNITS, getCategoryName } from '@/lib/unitConverter';
import { ArrowRightLeft } from 'lucide-react';

interface ControlsProps {
  category: UnitCategory;
  value: string;
  fromUnit: string;
  toUnit: string;
  onCategoryChange: (category: UnitCategory) => void;
  onValueChange: (value: string) => void;
  onFromUnitChange: (unit: string) => void;
  onToUnitChange: (unit: string) => void;
  onSwap: () => void;
}

export default function Controls({
  category,
  value,
  fromUnit,
  toUnit,
  onCategoryChange,
  onValueChange,
  onFromUnitChange,
  onToUnitChange,
  onSwap,
}: ControlsProps) {
  const categories: UnitCategory[] = ['length', 'weight', 'temperature'];

  return (
    <div className="space-y-6">
      {/* Category Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Category
        </label>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                category === cat
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              {getCategoryName(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Value Input */}
      <div>
        <label
          htmlFor="value"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Value
        </label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder="Enter value"
          className="w-full px-4 py-3 text-lg font-semibold"
          step="any"
        />
      </div>

      {/* Unit Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
        <div>
          <label
            htmlFor="fromUnit"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            From
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => onFromUnitChange(e.target.value)}
            className="w-full"
          >
            {UNITS[category].map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onSwap}
          className="p-3 bg-primary-50 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-gray-600 rounded-xl transition-colors duration-200 mb-[2px]"
          aria-label="Swap units"
        >
          <ArrowRightLeft className="w-5 h-5 text-primary-700 dark:text-primary-300" />
        </button>

        <div>
          <label
            htmlFor="toUnit"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            To
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => onToUnitChange(e.target.value)}
            className="w-full"
          >
            {UNITS[category].map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
