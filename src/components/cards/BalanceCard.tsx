import React from 'react';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '../../utils/loanCalculations';

interface BalanceCardProps {
  totalBalance: number;
}

export function BalanceCard({ totalBalance }: BalanceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3">
        <DollarSign className="w-8 h-8 text-blue-600" />
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Balance</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(totalBalance)}</p>
        </div>
      </div>
    </div>
  );
}