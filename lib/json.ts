/**
 * JSON Formatting and Validation Utilities
 * All JSON processing logic for the JSON Formatter tool
 */

export interface JsonValidationResult {
  valid: boolean;
  error?: string;
  errorLine?: number;
}

export interface JsonFormatResult {
  success: boolean;
  output?: string;
  error?: string;
}

/**
 * Validate JSON string
 */
export function validateJson(input: string): JsonValidationResult {
  if (!input || input.trim() === '') {
    return {
      valid: false,
      error: 'Input is empty. Please paste some JSON to validate.',
    };
  }

  try {
    JSON.parse(input);
    return { valid: true };
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Try to extract line number from error message
      const match = error.message.match(/position (\d+)/);
      const position = match ? parseInt(match[1]) : undefined;
      
      let errorLine: number | undefined;
      if (position !== undefined) {
        errorLine = input.substring(0, position).split('\n').length;
      }

      return {
        valid: false,
        error: error.message,
        errorLine,
      };
    }

    return {
      valid: false,
      error: 'Invalid JSON format',
    };
  }
}

/**
 * Format (beautify) JSON string
 */
export function formatJson(input: string, indent: number = 2): JsonFormatResult {
  if (!input || input.trim() === '') {
    return {
      success: false,
      error: 'Input is empty. Please paste some JSON to format.',
    };
  }

  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, indent);
    
    return {
      success: true,
      output: formatted,
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {
        success: false,
        error: `Invalid JSON: ${error.message}`,
      };
    }

    return {
      success: false,
      error: 'Failed to format JSON. Please check your input.',
    };
  }
}

/**
 * Minify JSON string
 */
export function minifyJson(input: string): JsonFormatResult {
  if (!input || input.trim() === '') {
    return {
      success: false,
      error: 'Input is empty. Please paste some JSON to minify.',
    };
  }

  try {
    const parsed = JSON.parse(input);
    const minified = JSON.stringify(parsed);
    
    return {
      success: true,
      output: minified,
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {
        success: false,
        error: `Invalid JSON: ${error.message}`,
      };
    }

    return {
      success: false,
      error: 'Failed to minify JSON. Please check your input.',
    };
  }
}

/**
 * Get character count for JSON
 */
export function getCharacterCount(input: string): number {
  return input.length;
}

/**
 * Get line count for JSON
 */
export function getLineCount(input: string): number {
  if (!input || input.trim() === '') return 0;
  return input.split('\n').length;
}

/**
 * Calculate size reduction percentage when minifying
 */
export function calculateSizeReduction(original: string, minified: string): number {
  if (original.length === 0) return 0;
  
  const reduction = ((original.length - minified.length) / original.length) * 100;
  return Math.round(reduction * 10) / 10; // Round to 1 decimal
}

/**
 * Get sample JSON for demo purposes
 */
export function getSampleJson(): string {
  return `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "coding", "traveling"],
  "active": true
}`;
}

/**
 * Format bytes to human readable size
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}
