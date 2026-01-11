/**
 * Password Generation Utilities
 * Uses crypto.getRandomValues() for cryptographically secure random values
 */

export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export type PasswordStrength = 'weak' | 'medium' | 'strong';

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/**
 * Generate a secure random password based on options
 */
export function generatePassword(options: PasswordOptions): string {
  const {
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  } = options;

  // Build character pool
  let charset = '';
  const requiredChars: string[] = [];

  if (includeUppercase) {
    charset += UPPERCASE;
    requiredChars.push(getRandomChar(UPPERCASE));
  }
  if (includeLowercase) {
    charset += LOWERCASE;
    requiredChars.push(getRandomChar(LOWERCASE));
  }
  if (includeNumbers) {
    charset += NUMBERS;
    requiredChars.push(getRandomChar(NUMBERS));
  }
  if (includeSymbols) {
    charset += SYMBOLS;
    requiredChars.push(getRandomChar(SYMBOLS));
  }

  // Validate charset
  if (charset.length === 0) {
    throw new Error('At least one character type must be selected');
  }

  // Generate password ensuring at least one character from each selected type
  let password = '';
  
  // Add required characters first
  requiredChars.forEach(char => {
    password += char;
  });

  // Fill remaining length with random characters
  const remainingLength = length - requiredChars.length;
  for (let i = 0; i < remainingLength; i++) {
    password += getRandomChar(charset);
  }

  // Shuffle the password to avoid predictable patterns
  return shuffleString(password);
}

/**
 * Get a cryptographically secure random character from a string
 */
function getRandomChar(str: string): string {
  const randomValues = new Uint32Array(1);
  crypto.getRandomValues(randomValues);
  const randomIndex = randomValues[0] % str.length;
  return str[randomIndex];
}

/**
 * Shuffle a string using Fisher-Yates algorithm with crypto random
 */
function shuffleString(str: string): string {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    const j = randomValues[0] % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

/**
 * Calculate password strength based on length and character diversity
 */
export function calculatePasswordStrength(
  password: string,
  options: PasswordOptions
): PasswordStrength {
  let score = 0;

  // Length scoring
  if (password.length >= 16) score += 3;
  else if (password.length >= 12) score += 2;
  else if (password.length >= 8) score += 1;

  // Character type diversity
  let typesCount = 0;
  if (options.includeUppercase) typesCount++;
  if (options.includeLowercase) typesCount++;
  if (options.includeNumbers) typesCount++;
  if (options.includeSymbols) typesCount++;

  score += typesCount;

  // Determine strength
  if (score >= 6) return 'strong';
  if (score >= 4) return 'medium';
  return 'weak';
}

/**
 * Get default password options
 */
export function getDefaultOptions(): PasswordOptions {
  return {
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  };
}

/**
 * Validate password options
 */
export function validateOptions(options: PasswordOptions): {
  valid: boolean;
  error?: string;
} {
  if (options.length < 6 || options.length > 32) {
    return {
      valid: false,
      error: 'Password length must be between 6 and 32 characters',
    };
  }

  const hasAnyType =
    options.includeUppercase ||
    options.includeLowercase ||
    options.includeNumbers ||
    options.includeSymbols;

  if (!hasAnyType) {
    return {
      valid: false,
      error: 'At least one character type must be selected',
    };
  }

  return { valid: true };
}
