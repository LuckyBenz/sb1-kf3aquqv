import React from 'react';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '../../utils/loanCalculations';

interface LoanBalanceCardProps {
  borrowed: number;
  given: number;
}

export function LoanBalanceCard({ borrowed, given }: LoanBalanceCardProps) {
  const netBalance = given - borrowed;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold">Loan Balance</h3>
          </div>
          <span className={`text-lg font-bold ${netBalance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {formatCurrency(netBalance)}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Borrowed</p>
            <p className="text-lg font-semibold text-red-500">{formatCurrency(borrowed)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Given</p>
            <p className="text-lg font-semibold text-green-500">{formatCurrency(given)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}