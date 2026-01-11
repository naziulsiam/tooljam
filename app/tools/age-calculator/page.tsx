'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator } from 'lucide-react';
import { CalculationMode, AgeCalculation } from '@/types';
import { calculateAge, getTodayDate } from '@/lib/age';
import ModeSelector from '@/components/age-calculator/ModeSelector';
import DateInputs from '@/components/age-calculator/DateInputs';
import AgeResults from '@/components/age-calculator/AgeResults';
import AdSlot from '@/components/AdSlot';

export default function AgeCalculatorPage() {
  const [mode, setMode] = useState<CalculationMode>('birth-to-today');
  const [birthDate, setBirthDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [result, setResult] = useState<AgeCalculation | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      let start: Date;
      let end: Date;

      if (mode === 'birth-to-today') {
        if (!birthDate) {
          setError('Please enter your birth date');
          return;
        }
        start = new Date(birthDate);
        end = getTodayDate();
      } else if (mode === 'birth-to-custom') {
        if (!birthDate || !endDate) {
          setError('Please enter both dates');
          return;
        }
        start = new Date(birthDate);
        end = new Date(endDate);
      } else {
        if (!startDate || !endDate) {
          setError('Please enter both dates');
          return;
        }
        start = new Date(startDate);
        end = new Date(endDate);
      }

      const calculation = calculateAge(start, end);
      setResult(calculation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleReset = () => {
    setBirthDate('');
    setEndDate('');
    setStartDate('');
    setResult(null);
    setError('');
  };

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
          <Calculator className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Age Calculator
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Calculate Your Age
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Find out your exact age with multiple calculation modes
        </p>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      <div className="card mb-8">
        <form onSubmit={handleCalculate} className="space-y-6">
          <ModeSelector selectedMode={mode} onModeChange={setMode} />

          <DateInputs
            mode={mode}
            birthDate={birthDate}
            endDate={endDate}
            startDate={startDate}
            onBirthDateChange={setBirthDate}
            onEndDateChange={setEndDate}
            onStartDateChange={setStartDate}
          />

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button type="submit" className="btn-primary flex-1">
              Calculate Age
            </button>
            {result && (
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary px-6"
              >
                Reset
              </button>
            )}
          </div>
        </form>
      </div>

      {result && (
        <>
          <AgeResults result={result} mode={mode} />
          
          {/* Ad Slot - Bottom */}
          <div className="mt-8">
            <AdSlot format="horizontal" />
          </div>
        </>
      )}
    </div>
  );
}
