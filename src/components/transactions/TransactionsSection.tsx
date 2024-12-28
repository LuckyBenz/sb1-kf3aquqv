import React from 'react';
import { Transaction } from '../../types/transaction';
import { TransactionList } from './TransactionList';
import { TransactionSummary } from './TransactionSummary';

interface TransactionsSectionProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
  onUpdateTransaction: (transaction: Transaction) => void;
}

export function TransactionsSection({ 
  transactions, 
  onDeleteTransaction,
  onUpdateTransaction 
}: TransactionsSectionProps) {
  return (
    <>
      <TransactionSummary transactions={transactions} />
      
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Recent Transactions
        </h2>
        <TransactionList 
          transactions={transactions}
          onDelete={onDeleteTransaction}
          onUpdateTransaction={onUpdateTransaction}
        />
      </div>
    </>
  );
}