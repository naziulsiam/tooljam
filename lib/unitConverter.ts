/**
 * Unit Conversion Utilities
 * All conversion logic for the Unit Converter tool
 */

export type UnitCategory = 'length' | 'weight' | 'temperature';

export interface Unit {
  symbol: string;
  name: string;
}

export interface ConversionResult {
  value: number;
  formatted: string;
}

// Unit definitions by category
export const UNITS: Record<UnitCategory, Unit[]> = {
  length: [
    { symbol: 'mm', name: 'Millimeters' },
    { symbol: 'cm', name: 'Centimeters' },
    { symbol: 'm', name: 'Meters' },
    { symbol: 'km', name: 'Kilometers' },
    { symbol: 'in', name: 'Inches' },
    { symbol: 'ft', name: 'Feet' },
    { symbol: 'yd', name: 'Yards' },
    { symbol: 'mi', name: 'Miles' },
  ],
  weight: [
    { symbol: 'mg', name: 'Milligrams' },
    { symbol: 'g', name: 'Grams' },
    { symbol: 'kg', name: 'Kilograms' },
    { symbol: 'oz', name: 'Ounces' },
    { symbol: 'lb', name: 'Pounds' },
    { symbol: 'ton', name: 'Tons (US)' },
  ],
  temperature: [
    { symbol: '°C', name: 'Celsius' },
    { symbol: '°F', name: 'Fahrenheit' },
    { symbol: 'K', name: 'Kelvin' },
  ],
};

/**
 * Convert length units
 */
function convertLength(value: number, from: string, to: string): number {
  const toMeters: Record<string, number> = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.344,
  };

  if (!(from in toMeters) || !(to in toMeters)) return value;

  const valueInMeters = value * toMeters[from];
  return valueInMeters / toMeters[to];
}

/**
 * Convert weight units
 */
function convertWeight(value: number, from: string, to: string): number {
  const toGrams: Record<string, number> = {
    mg: 0.001,
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592,
    ton: 907184.74,
  };

  if (!(from in toGrams) || !(to in toGrams)) return value;

  const valueInGrams = value * toGrams[from];
  return valueInGrams / toGrams[to];
}

/**
 * Convert temperature units (SAFE & FAIL-PROOF)
 */
function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value;

  const normalize = (unit: string) => unit.replace('°', '').toLowerCase();

  const fromUnit = normalize(from);
  const toUnit = normalize(to);

  let celsius: number;

  // Convert FROM source → Celsius
  if (fromUnit === 'c') {
    celsius = value;
  } else if (fromUnit === 'f') {
    celsius = (value - 32) * (5 / 9);
  } else if (fromUnit === 'k') {
    celsius = value - 273.15;
  } else {
    return value; // fail-safe
  }

  // Convert FROM Celsius → target
  if (toUnit === 'c') {
    return celsius;
  } else if (toUnit === 'f') {
    return celsius * (9 / 5) + 32;
  } else if (toUnit === 'k') {
    return celsius + 273.15;
  }

  return value; // fail-safe
}

/**
 * Main conversion function
 */
export function convertUnit(
  value: number,
  from: string,
  to: string,
  category: UnitCategory
): ConversionResult {
  if (isNaN(value)) {
    return { value: 0, formatted: '0' };
  }

  let result: number;

  switch (category) {
    case 'length':
      result = convertLength(value, from, to);
      break;
    case 'weight':
      result = convertWeight(value, from, to);
      break;
    case 'temperature':
      result = convertTemperature(value, from, to);
      break;
    default:
      result = value;
  }

  return {
    value: result,
    formatted: formatNumber(result),
  };
}

/**
 * Format number for display
 */
function formatNumber(value: number): string {
  if (Math.abs(value) < 0.0001 && value !== 0) {
    return value.toExponential(4);
  }

  if (Math.abs(value) > 1_000_000) {
    return value.toExponential(4);
  }

  const rounded = Math.round(value * 100000) / 100000;
  return rounded.toString();
}

/**
 * Get category display name
 */
export function getCategoryName(category: UnitCategory): string {
  const names: Record<UnitCategory, string> = {
    length: 'Length',
    weight: 'Weight',
    temperature: 'Temperature',
  };
  return names[category];
}

/**
 * Get default units for a category
 */
export function getDefaultUnits(category: UnitCategory): {
  from: string;
  to: string;
} {
  const defaults: Record<UnitCategory, { from: string; to: string }> = {
    length: { from: 'm', to: 'ft' },
    weight: { from: 'kg', to: 'lb' },
    temperature: { from: '°C', to: '°F' },
  };
  return defaults[category];
}

/**
 * Validate input value
 */
export function validateInput(value: string): {
  valid: boolean;
  error?: string;
} {
  if (value.trim() === '') {
    return { valid: true };
  }

  const num = parseFloat(value);

  if (isNaN(num)) {
    return { valid: false, error: 'Please enter a valid number' };
  }

  return { valid: true };
}

