'use client';

import { TextStats } from '@/lib/wordCounter';
import { FileText, Type, Hash, List, BookOpen, Clock } from 'lucide-react';

interface StatsProps {
  stats: TextStats;
}

export default function Stats({ stats }: StatsProps) {
  const statItems = [
    {
      icon: Hash,
      label: 'Words',
      value: stats.words.toLocaleString(),
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Type,
      label: 'Characters',
      value: stats.characters.toLocaleString(),
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: Type,
      label: 'Characters (no spaces)',
      value: stats.charactersNoSpaces.toLocaleString(),
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
      iconColor: 'text-pink-600 dark:text-pink-400',
    },
    {
      icon: List,
      label: 'Sentences',
      value: stats.sentences.toLocaleString(),
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      icon: BookOpen,
      label: 'Paragraphs',
      value: stats.paragraphs.toLocaleString(),
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      icon: Clock,
      label: 'Reading Time',
      value: stats.readingTime < 1 && stats.words > 0 ? '< 1 min' : `${Math.ceil(stats.readingTime)} min`,
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {statItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="card hover:shadow-soft-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 ${item.bgColor} rounded-xl`}>
                <Icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {item.label}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
