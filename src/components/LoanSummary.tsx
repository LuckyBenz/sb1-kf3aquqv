import React from 'react';
import { formatCurrency } from '../utils/loanCalculations';
import { CreditCard } from 'lucide-react';

interface LoanSummaryProps {
  loansByType: Record<string, number>;
}

export function LoanSummary({ loansByType }: LoanSummaryProps) {
  const totalAmount = Object.values(loansByType).reduce((sum, amount) => sum + amount, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Loan Distribution</h3>
      </div>
      <div className="space-y-4">
        {Object.entries(loansByType).map(([type, amount]) => {
          const percentage = (amount / totalAmount) * 100;
          return (
            <div key={type} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="capitalize text-gray-700 dark:text-gray-300">{type}</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(amount)}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}