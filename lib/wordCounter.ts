/**
 * Word and Character Counting Utilities
 * All text analysis logic for the Word Counter tool
 */

export interface TextStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: number; // in minutes
}

/**
 * Analyze text and return comprehensive statistics
 */
export function analyzeText(text: string): TextStats {
  if (!text || text.trim().length === 0) {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      readingTime: 0,
    };
  }

  return {
    words: countWords(text),
    characters: countCharacters(text),
    charactersNoSpaces: countCharactersNoSpaces(text),
    sentences: countSentences(text),
    paragraphs: countParagraphs(text),
    readingTime: calculateReadingTime(text),
  };
}

/**
 * Count words in text
 * Handles multiple spaces, newlines, and special characters
 */
function countWords(text: string): number {
  // Remove extra whitespace and split by whitespace
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;

  // Split by any whitespace (spaces, tabs, newlines)
  const words = trimmed.split(/\s+/);
  
  // Filter out empty strings
  return words.filter(word => word.length > 0).length;
}

/**
 * Count total characters including spaces
 */
function countCharacters(text: string): number {
  return text.length;
}

/**
 * Count characters excluding spaces
 */
function countCharactersNoSpaces(text: string): number {
  return text.replace(/\s/g, '').length;
}

/**
 * Count sentences in text
 * Considers ., !, ? as sentence endings
 */
function countSentences(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;

  // Match sentence-ending punctuation
  const sentences = trimmed.split(/[.!?]+/);
  
  // Filter out empty strings and whitespace-only strings
  const validSentences = sentences.filter(
    sentence => sentence.trim().length > 0
  );

  return validSentences.length;
}

/**
 * Count paragraphs in text
 * Paragraphs are separated by one or more blank lines
 */
function countParagraphs(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;

  // Split by multiple newlines (blank lines)
  const paragraphs = trimmed.split(/\n\s*\n/);
  
  // Filter out empty paragraphs
  const validParagraphs = paragraphs.filter(
    para => para.trim().length > 0
  );

  return validParagraphs.length;
}

/**
 * Calculate estimated reading time in minutes
 * Assumes average reading speed of 200 words per minute
 */
function calculateReadingTime(text: string): number {
  const wordCount = countWords(text);
  const wordsPerMinute = 200;
  const minutes = wordCount / wordsPerMinute;
  
  // Round to 1 decimal place
  return Math.round(minutes * 10) / 10;
}

/**
 * Format reading time for display
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 0) return '0 min';
  if (minutes < 1) return '< 1 min';
  
  const rounded = Math.ceil(minutes);
  return `${rounded} min`;
}

/**
 * Get text statistics as formatted strings for display
 */
export function getFormattedStats(stats: TextStats): Record<string, string> {
  return {
    words: stats.words.toLocaleString(),
    characters: stats.characters.toLocaleString(),
    charactersNoSpaces: stats.charactersNoSpaces.toLocaleString(),
    sentences: stats.sentences.toLocaleString(),
    paragraphs: stats.paragraphs.toLocaleString(),
    readingTime: formatReadingTime(stats.readingTime),
  };
}
