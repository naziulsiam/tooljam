'use client';

import { PasswordOptions } from '@/lib/password';

interface ControlsProps {
  options: PasswordOptions;
  onOptionsChange: (options: PasswordOptions) => void;
}

export default function Controls({ options, onOptionsChange }: ControlsProps) {
  const handleLengthChange = (length: number) => {
    onOptionsChange({ ...options, length });
  };

  const handleToggle = (key: keyof PasswordOptions) => {
    onOptionsChange({ ...options, [key]: !options[key] });
  };

  return (
    <div className="space-y-6">
      {/* Length Slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="length"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Password Length
          </label>
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {options.length}
          </span>
        </div>
        <input
          type="range"
          id="length"
          min="6"
          max="32"
          value={options.length}
          onChange={(e) => handleLengthChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
          <span>6</span>
          <span>32</span>
        </div>
      </div>

      {/* Character Type Checkboxes */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Include Characters
        </label>

        <div className="space-y-3">
          <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            <input
              type="checkbox"
              checked={options.includeUppercase}
              onChange={() => handleToggle('includeUppercase')}
              className="w-5 h-5 text-primary-600 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">
                Uppercase Letters
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                A-Z
              </div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            <input
              type="checkbox"
              checked={options.includeLowercase}
              onChange={() => handleToggle('includeLowercase')}
              className="w-5 h-5 text-primary-600 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">
                Lowercase Letters
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                a-z
              </div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            <input
              type="checkbox"
              checked={options.includeNumbers}
              onChange={() => handleToggle('includeNumbers')}
              className="w-5 h-5 text-primary-600 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">
                Numbers
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                0-9
              </div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            <input
              type="checkbox"
              checked={options.includeSymbols}
              onChange={() => handleToggle('includeSymbols')}
              className="w-5 h-5 text-primary-600 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">
                Symbols
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                !@#$%^&*
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
