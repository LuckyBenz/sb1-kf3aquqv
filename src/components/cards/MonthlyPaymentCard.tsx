import React from 'react';
import { PiggyBank } from 'lucide-react';
import { formatCurrency } from '../../utils/loanCalculations';

interface MonthlyPaymentCardProps {
  totalMonthlyPayments: number;
}

export function MonthlyPaymentCard({ totalMonthlyPayments }: MonthlyPaymentCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3">
        <PiggyBank className="w-8 h-8 text-green-600" />
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Payments</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(totalMonthlyPayments)}</p>
        </div>
      </div>
    </div>
  );
}