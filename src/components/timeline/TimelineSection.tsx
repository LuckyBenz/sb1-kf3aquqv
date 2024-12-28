import React from 'react';
import { Timeline } from './Timeline';
import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';
import { History } from 'lucide-react';

interface TimelineSectionProps {
  transactions: Transaction[];
  loans: Loan[];
  onEditTransaction: (transaction: Transaction) => void;
  onEditLoan: (loan: Loan) => void;
}

export function TimelineSection({ 
  transactions, 
  loans, 
  onEditTransaction,
  onEditLoan 
}: TimelineSectionProps) {
  const hasEvents = transactions.length > 0 || loans.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <History className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Transaction History
        </h2>
      </div>

      {hasEvents ? (
        <Timeline 
          transactions={transactions}
          loans={loans}
          onEditTransaction={onEditTransaction}
          onEditLoan={onEditLoan}
        />
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No transactions or loans yet
        </p>
      )}
    </div>
  );
}