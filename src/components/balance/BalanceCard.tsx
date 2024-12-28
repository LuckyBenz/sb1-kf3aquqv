import React from 'react';
import { Wallet, PlusCircle } from 'lucide-react';
import { formatCurrency } from '../../utils/loanCalculations';

interface BalanceCardProps {
  balance: number | null;
  onUpdateClick: () => void;
}

export function BalanceCard({ balance, onUpdateClick }: BalanceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Wallet className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Current Balance</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {balance === null ? '—' : formatCurrency(balance)}
            </p>
          </div>
        </div>
        <button
          onClick={onUpdateClick}
          className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
          title="Update balance"
        >
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}