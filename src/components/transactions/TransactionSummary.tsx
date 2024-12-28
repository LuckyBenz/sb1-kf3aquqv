import React from 'react';
import { Transaction } from '../../types/transaction';
import { formatCurrency } from '../../utils/loanCalculations';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

interface TransactionSummaryProps {
  transactions: Transaction[];
}

export function TransactionSummary({ transactions }: TransactionSummaryProps) {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <ArrowUpRight className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Income</p>
            <p className="text-2xl font-bold text-green-500">{formatCurrency(totalIncome)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <ArrowDownRight className="w-8 h-8 text-red-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</p>
            <p className="text-2xl font-bold text-red-500">{formatCurrency(totalExpenses)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <Wallet className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Balance</p>
            <p className={`text-2xl font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatCurrency(balance)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}