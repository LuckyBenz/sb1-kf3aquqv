import React from 'react';
import { formatDate } from '../utils/dateFormatters';

interface RateHistoryEntry {
  rate: number;
  date: string;
}

interface InterestRateHistoryProps {
  history: RateHistoryEntry[];
}

export function InterestRateHistory({ history }: InterestRateHistoryProps) {
  if (history.length <= 1) return null;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rate History</h4>
      <div className="space-y-2">
        {history.map((entry, index) => (
          <div 
            key={entry.date} 
            className="flex justify-between text-sm text-gray-600 dark:text-gray-400"
          >
            <span>{formatDate(entry.date)}</span>
            <span>{entry.rate}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}