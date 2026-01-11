'use client';

import { AgeCalculation } from '@/types';
import { Calendar, Clock, Heart, PartyPopper } from 'lucide-react';

interface AgeResultsProps {
  result: AgeCalculation;
  mode: string;
}

export default function AgeResults({ result, mode }: AgeResultsProps) {
  const stats = [
    {
      icon: Calendar,
      label: 'Years',
      value: result.years,
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Calendar,
      label: 'Months',
      value: result.months,
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Calendar,
      label: 'Days',
      value: result.days,
      color: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Age Display */}
      <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-soft-xl">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 opacity-90">
            {mode === 'range' ? 'Time Difference' : 'Your Age'}
          </h3>
          <div className="text-5xl font-bold mb-2">
            {result.years}{' '}
            <span className="text-2xl font-medium opacity-90">
              {result.years === 1 ? 'year' : 'years'}
            </span>
          </div>
          <div className="text-xl opacity-90">
            {result.months} {result.months === 1 ? 'month' : 'months'},{' '}
            {result.days} {result.days === 1 ? 'day' : 'days'}
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card text-center">
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-soft`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {result.totalDays.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Days
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {result.totalWeeks?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Weeks
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Birthday (only for birth-to-today mode) */}
      {result.nextBirthday && mode === 'birth-to-today' && (
        <div className="card bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-200 dark:border-pink-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-soft">
              <PartyPopper className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Next Birthday
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {result.nextBirthday.daysUntil === 0
                  ? '🎉 Today!'
                  : `In ${result.nextBirthday.daysUntil} ${
                      result.nextBirthday.daysUntil === 1 ? 'day' : 'days'
                    }`}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

