/**
 * Color Conversion Utilities
 * All color conversion and validation logic for the Color Picker tool
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Convert HEX color to RGB
 */
export function hexToRgb(hex: string): RGB | null {
  // Remove # if present
  const cleanHex = hex.replace(/^#/, '');

  // Validate HEX format
  if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
    return null;
  }

  // Parse HEX values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return { r, g, b };
}

/**
 * Convert RGB to HEX color
 */
export function rgbToHex(r: number, g: number, b: number): string {
  // Clamp values to 0-255 range
  const clampedR = Math.max(0, Math.min(255, Math.round(r)));
  const clampedG = Math.max(0, Math.min(255, Math.round(g)));
  const clampedB = Math.max(0, Math.min(255, Math.round(b)));

  // Convert to HEX
  const hexR = clampedR.toString(16).padStart(2, '0');
  const hexG = clampedG.toString(16).padStart(2, '0');
  const hexB = clampedB.toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`.toUpperCase();
}

/**
 * Validate HEX color format
 */
export function isValidHex(hex: string): boolean {
  const cleanHex = hex.replace(/^#/, '');
  return /^[0-9A-Fa-f]{6}$/.test(cleanHex);
}

/**
 * Normalize HEX color (add # prefix, ensure uppercase)
 */
export function normalizeHex(hex: string): string {
  const cleanHex = hex.replace(/^#/, '');
  
  if (!isValidHex(hex)) {
    return '#000000';
  }

  return `#${cleanHex.toUpperCase()}`;
}

/**
 * Format RGB as CSS string
 */
export function formatRgb(rgb: RGB): string {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

/**
 * Format RGB as comma-separated string
 */
export function formatRgbString(rgb: RGB): string {
  return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

/**
 * Get default color
 */
export function getDefaultColor(): string {
  return '#3B82F6'; // Primary blue
}

/**
 * Check if color is light or dark (for contrast)
 */
export function isLightColor(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return true;

  // Calculate relative luminance
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  
  return luminance > 0.5;
}

/**
 * Get contrasting text color (black or white) for a given background color
 */
export function getContrastColor(hex: string): string {
  return isLightColor(hex) ? '#000000' : '#FFFFFF';
}

/**
 * Parse HEX input and return valid HEX or null
 */
export function parseHexInput(input: string): string | null {
  // Remove whitespace
  const cleaned = input.trim();

  // Add # if missing
  const withHash = cleaned.startsWith('#') ? cleaned : `#${cleaned}`;

  // Validate
  if (isValidHex(withHash)) {
    return normalizeHex(withHash);
  }

  return null;
}
