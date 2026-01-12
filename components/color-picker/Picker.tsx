'use client';

interface PickerProps {
  color: string;
  onChange: (color: string) => void;
}

export default function Picker({ color, onChange }: PickerProps) {
  return (
    <div className="space-y-4">
      {/* Color Picker Input */}
      <div>
        <label
          htmlFor="color-picker"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
        >
          Pick a Color
        </label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            id="color-picker"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="w-24 h-24 rounded-xl cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-200"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Click to open the color picker and select any color you want.
            </p>
          </div>
        </div>
      </div>

      {/* Large Color Preview */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Color Preview
        </label>
        <div
          className="w-full h-48 rounded-2xl shadow-soft-lg border-2 border-gray-200 dark:border-gray-700 transition-all duration-300"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
