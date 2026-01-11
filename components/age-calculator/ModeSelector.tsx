'use client';

import { CalculationMode } from '@/types';
import { Calendar, CalendarRange, Cake } from 'lucide-react';

interface ModeSelectorProps {
  selectedMode: CalculationMode;
  onModeChange: (mode: CalculationMode) => void;
}

const modes = [
  {
    id: 'birth-to-today' as CalculationMode,
    label: 'Birth to Today',
    icon: Cake,
    description: 'Calculate your current age',
  },
  {
    id: 'birth-to-custom' as CalculationMode,
    label: 'Birth to Custom Date',
    icon: Calendar,
    description: 'Age at a specific date',
  },
  {
    id: 'range' as CalculationMode,
    label: 'Date Range',
    icon: CalendarRange,
    description: 'Between any two dates',
  },
];

export default function ModeSelector({
  selectedMode,
  onModeChange,
}: ModeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        Calculation Mode
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isSelected = selectedMode === mode.id;

          return (
            <button
              key={mode.id}
              onClick={() => onModeChange(mode.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                isSelected
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-soft-lg scale-[1.02]'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    isSelected
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div
                    className={`font-semibold mb-1 ${
                      isSelected
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {mode.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {mode.description}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
