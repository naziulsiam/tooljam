import { AgeCalculation, DateRange } from '@/types';

/**
 * Calculate age between two dates with detailed breakdown
 */
export function calculateAge(startDate: Date, endDate: Date): AgeCalculation {
  // Ensure we're working with valid dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Validate date range
  if (start > end) {
    throw new Error('Start date must be before end date');
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate total days
  const totalDays = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Calculate next birthday (only if start date is a birth date)
  const nextBirthday = calculateNextBirthday(start, end);

  // Calculate total weeks and hours
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;

  return {
    years,
    months,
    days,
    totalDays,
    nextBirthday,
    totalWeeks,
    totalHours,
  };
}

/**
 * Calculate next birthday from a birth date
 */
function calculateNextBirthday(
  birthDate: Date,
  currentDate: Date
): { date: Date; daysUntil: number } {
  const nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  // If birthday has passed this year, set to next year
  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(currentDate.getFullYear() + 1);
  }

  const daysUntil = Math.ceil(
    (nextBirthday.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    date: nextBirthday,
    daysUntil,
  };
}

/**
 * Validate date input
 */
export function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Format date for input fields
 */
export function formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get today's date at midnight
 */
export function getTodayDate(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}
