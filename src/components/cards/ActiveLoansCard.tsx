import React from 'react';
import { Wallet } from 'lucide-react';

interface ActiveLoansCardProps {
  count: number;
}

export function ActiveLoansCard({ count }: ActiveLoansCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3">
        <Wallet className="w-8 h-8 text-orange-600" />
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Loans</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{count}</p>
        </div>
      </div>
    </div>
  );
}