'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, Info } from 'lucide-react';
import { getDefaultColor } from '@/lib/color';
import Picker from '@/components/color-picker/Picker';
import Values from '@/components/color-picker/Values';
import AdSlot from '@/components/AdSlot';

export default function ColorPickerPage() {
  const [color, setColor] = useState(getDefaultColor());

  const handleReset = () => {
    setColor(getDefaultColor());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-4 border border-primary-100 dark:border-gray-700">
          <Palette className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Color Picker
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Color Picker & HEX to RGB Converter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Pick colors visually and convert between HEX and RGB formats instantly.
          Perfect for designers, developers, and creative professionals.
        </p>

        {/* SEO Intro */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-left max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Our free online color picker tool helps you select colors and instantly
            convert between HEX and RGB color formats. Whether you're designing a website,
            creating graphics, or working on any creative project, this tool provides
            accurate color values in multiple formats. All conversions happen locally
            in your browser for complete privacy.
          </p>
        </div>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Color Picker */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Pick Your Color
          </h2>
          <Picker color={color} onChange={setColor} />
        </div>

        {/* Color Values */}
        <div>
          <div className="card mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Color Values
            </h2>
            <Values color={color} onColorChange={setColor} onReset={handleReset} />
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          How to Use
        </h3>
        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-decimal list-inside">
          <li>Click on the color picker to open your browser's color selection dialog</li>
          <li>Choose any color you want from the picker</li>
          <li>View the large color preview to see your selected color</li>
          <li>Copy the HEX or RGB values using the copy buttons</li>
          <li>Edit the HEX value directly by typing in the input field</li>
          <li>Use the reset button to go back to the default color</li>
        </ol>
      </div>

      {/* Privacy & Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            🎨 Features
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>✅ Visual color picker</li>
            <li>✅ Large color preview</li>
            <li>✅ Instant HEX to RGB conversion</li>
            <li>✅ Editable HEX input</li>
            <li>✅ Individual RGB values display</li>
            <li>✅ One-click copy to clipboard</li>
            <li>✅ No registration required</li>
          </ul>
        </div>

        <div className="card bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            🔒 Privacy & Security
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>✅ All processing happens in your browser</li>
            <li>✅ No data is sent to any server</li>
            <li>✅ No tracking or storage</li>
            <li>✅ Works completely offline</li>
            <li>✅ Your color choices remain private</li>
          </ul>
        </div>
      </div>

      {/* Color Format Info */}
      <div className="card bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800 mt-6">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">
          📚 About Color Formats
        </h3>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
          <div>
            <strong>HEX (Hexadecimal):</strong> A 6-character code representing colors in
            format #RRGGBB. Each pair represents Red, Green, and Blue values in hexadecimal
            (00-FF). Example: #3B82F6
          </div>
          <div>
            <strong>RGB (Red Green Blue):</strong> Three numbers (0-255) representing the
            intensity of red, green, and blue. Example: rgb(59, 130, 246)
          </div>
        </div>
      </div>

      {/* Ad Slot - Bottom */}
      <div className="mt-8">
        <AdSlot format="horizontal" />
      </div>
    </div>
  );
}
