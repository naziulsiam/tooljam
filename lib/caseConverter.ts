/**
 * Case Conversion Utilities
 * All text transformation logic for the Case Converter tool
 */

export type CaseType =
  | 'uppercase'
  | 'lowercase'
  | 'titlecase'
  | 'sentencecase'
  | 'alternating'
  | 'inverse';

/**
 * Convert text to UPPERCASE
 */
export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

/**
 * Convert text to lowercase
 */
export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

/**
 * Convert text to Title Case
 * Capitalizes the first letter of each word
 */
export function toTitleCase(text: string): string {
  // Words that should typically remain lowercase in titles
  const minorWords = new Set([
    'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from',
    'in', 'into', 'nor', 'of', 'on', 'or', 'the', 'to', 'with'
  ]);

  return text
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      // Always capitalize the first word
      if (index === 0) {
        return capitalizeWord(word);
      }
      
      // Check if it's a minor word
      if (minorWords.has(word.toLowerCase())) {
        return word;
      }
      
      return capitalizeWord(word);
    })
    .join(' ');
}

/**
 * Convert text to Sentence case
 * Capitalizes the first letter of each sentence
 */
export function toSentenceCase(text: string): string {
  // Split by sentence-ending punctuation followed by space
  const sentences = text.toLowerCase().split(/([.!?]\s+)/);
  
  return sentences
    .map((sentence, index) => {
      // Skip punctuation parts
      if (sentence.match(/^[.!?]\s+$/)) {
        return sentence;
      }
      
      // Capitalize first letter of sentence
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join('');
}

/**
 * Convert text to aLtErNaTiNg cAsE
 * Alternates between lowercase and uppercase for each letter
 */
export function toAlternatingCase(text: string): string {
  let uppercase = false;
  
  return text
    .split('')
    .map((char) => {
      // Only alternate on letters, not spaces or punctuation
      if (/[a-zA-Z]/.test(char)) {
        uppercase = !uppercase;
        return uppercase ? char.toUpperCase() : char.toLowerCase();
      }
      return char;
    })
    .join('');
}

/**
 * Convert text to InVeRsE cAsE
 * Swaps uppercase to lowercase and vice versa
 */
export function toInverseCase(text: string): string {
  return text
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    })
    .join('');
}

/**
 * Main conversion function
 */
export function convertCase(text: string, caseType: CaseType): string {
  if (!text || text.trim().length === 0) {
    return text;
  }

  switch (caseType) {
    case 'uppercase':
      return toUpperCase(text);
    case 'lowercase':
      return toLowerCase(text);
    case 'titlecase':
      return toTitleCase(text);
    case 'sentencecase':
      return toSentenceCase(text);
    case 'alternating':
      return toAlternatingCase(text);
    case 'inverse':
      return toInverseCase(text);
    default:
      return text;
  }
}

/**
 * Helper function to capitalize a word
 */
function capitalizeWord(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Get case type display names
 */
export function getCaseTypeName(caseType: CaseType): string {
  const names: Record<CaseType, string> = {
    uppercase: 'UPPERCASE',
    lowercase: 'lowercase',
    titlecase: 'Title Case',
    sentencecase: 'Sentence case',
    alternating: 'aLtErNaTiNg CaSe',
    inverse: 'InVeRsE cAsE',
  };
  return names[caseType];
}

/**
 * Get case type descriptions
 */
export function getCaseTypeDescription(caseType: CaseType): string {
  const descriptions: Record<CaseType, string> = {
    uppercase: 'Convert all letters to uppercase',
    lowercase: 'Convert all letters to lowercase',
    titlecase: 'Capitalize the first letter of each word',
    sentencecase: 'Capitalize the first letter of each sentence',
    alternating: 'Alternate between lowercase and uppercase',
    inverse: 'Swap uppercase with lowercase',
  };
  return descriptions[caseType];
}
