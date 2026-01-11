export interface AgeCalculation {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthday?: {
    date: Date;
    daysUntil: number;
  };
  totalWeeks?: number;
  totalHours?: number;
}

export type CalculationMode = 'birth-to-today' | 'birth-to-custom' | 'range';

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface CurrencyRate {
  code: string;
  name: string;
  rate: number;
}

export interface CurrencyData {
  base: string;
  rates: Record<string, number>;
  timestamp: number;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}
