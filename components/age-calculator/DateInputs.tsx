'use client';

import { CalculationMode } from '@/types';

interface DateInputsProps {
  mode: CalculationMode;
  birthDate: string;
  endDate: string;
  startDate: string;
  onBirthDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onStartDateChange: (date: string) => void;
}

export default function DateInputs({
  mode,
  birthDate,
  endDate,
  startDate,
  onBirthDateChange,
  onEndDateChange,
  onStartDateChange,
}: DateInputsProps) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-4">
      {/* Birth Date (for birth-to-today and birth-to-custom modes) */}
      {(mode === 'birth-to-today' || mode === 'birth-to-custom') && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <label
            htmlFor="birthDate"
            className="block text-sm font-semibold text-warm-700 dark:text-warm-300 mb-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => onBirthDateChange(e.target.value)}
            max={today}
            required
            className="transition-all duration-200"
          />
        </div>
      )}

      {/* Start Date (for range mode) */}
      {mode === 'range' && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <label
            htmlFor="startDate"
            className="block text-sm font-semibold text-warm-700 dark:text-warm-300 mb-2"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            required
            className="transition-all duration-200"
          />
        </div>
      )}

      {/* End Date (for birth-to-custom and range modes) */}
      {(mode === 'birth-to-custom' || mode === 'range') && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300 delay-75">
          <label
            htmlFor="endDate"
            className="block text-sm font-semibold text-warm-700 dark:text-warm-300 mb-2"
          >
            {mode === 'birth-to-custom' ? 'End Date' : 'End Date'}
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            min={mode === 'birth-to-custom' ? birthDate : startDate}
            required
            className="transition-all duration-200"
          />
        </div>
      )}
    </div>
  );
}
