'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Ruler } from 'lucide-react';
import {
  convertUnit,
  UnitCategory,
  getDefaultUnits,
  validateInput,
} from '@/lib/unitConverter';
import Controls from '@/components/unit-converter/Controls';
import Result from '@/components/unit-converter/Result';
import AdSlot from '@/components/AdSlot';

export default function UnitConverterPage() {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('ft');
  const [result, setResult] = useState<string>('3.28084');

  // Update units when category changes
  useEffect(() => {
    const defaults = getDefaultUnits(category);
    setFromUnit(defaults.from);
    setToUnit(defaults.to);
  }, [category]);

  // Recalculate when inputs change
  useEffect(() => {
    const validation = validateInput(value);
    if (!validation.valid || value.trim() === '') {
      setResult('0');
      return;
    }

    const numValue = parseFloat(value);
    const conversion = convertUnit(numValue, fromUnit, toUnit, category);
    setResult(conversion.formatted);
  }, [value, fromUnit, toUnit, category]);

  const handleCategoryChange = (newCategory: UnitCategory) => {
    setCategory(newCategory);
    setValue('1');
  };

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
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
          <Ruler className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Unit Converter
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Unit Converter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Convert units of length, weight, and temperature instantly with accurate
          results.
        </p>

        {/* SEO Intro */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-left max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Our free online unit converter helps you quickly convert between different
            units of measurement. Whether you need to convert meters to feet, kilograms
            to pounds, or Celsius to Fahrenheit, our tool provides instant and accurate
            conversions. Perfect for students, professionals, travelers, and anyone
            needing quick unit conversions.
          </p>
        </div>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      {/* Main Converter */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Controls */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Convert Units
          </h2>
          <Controls
            category={category}
            value={value}
            fromUnit={fromUnit}
            toUnit={toUnit}
            onCategoryChange={handleCategoryChange}
            onValueChange={setValue}
            onFromUnitChange={setFromUnit}
            onToUnitChange={setToUnit}
            onSwap={handleSwap}
          />
        </div>

        {/* Result */}
        <div>
          <div className="card mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Conversion Result
            </h2>
            <Result
              value={result}
              fromValue={value}
              fromUnit={fromUnit}
              toUnit={toUnit}
            />
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Ruler className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          How to Use
        </h3>
        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-decimal list-inside">
          <li>Select a category (Length, Weight, or Temperature)</li>
          <li>Enter the value you want to convert</li>
          <li>Choose the unit you're converting from</li>
          <li>Choose the unit you're converting to</li>
          <li>The result updates automatically</li>
          <li>Use the swap button to reverse the conversion direction</li>
        </ol>
      </div>

      {/* Conversion Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            📏 Length Units
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Millimeters, Centimeters</li>
            <li>Meters, Kilometers</li>
            <li>Inches, Feet</li>
            <li>Yards, Miles</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            ⚖️ Weight Units
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Milligrams, Grams</li>
            <li>Kilograms</li>
            <li>Ounces, Pounds</li>
            <li>Tons</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            🌡️ Temperature Units
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Celsius (°C)</li>
            <li>Fahrenheit (°F)</li>
            <li>Kelvin (K)</li>
          </ul>
        </div>
      </div>

      {/* Ad Slot - Bottom */}
      <div className="mt-8">
        <AdSlot format="horizontal" />
      </div>
    </div>
  );
}
