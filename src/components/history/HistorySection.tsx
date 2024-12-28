import React, { useState } from 'react';
import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';
import { HistoryTimeline } from './HistoryTimeline';
import { EditTransactionForm } from '../transactions/EditTransactionForm';
import { EditLoanForm } from '../loans/EditLoanForm';
import { Modal } from '../ui/Modal';

interface HistorySectionProps {
  transactions: Transaction[];
  loans: Loan[];
  onUpdateTransaction: (transaction: Transaction) => void;
  onUpdateLoan: (loan: Loan) => void;
}

export function HistorySection({ 
  transactions, 
  loans, 
  onUpdateTransaction, 
  onUpdateLoan 
}: HistorySectionProps) {
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [editingLoan, setEditingLoan] = useState<Loan | null>(null);

  return (
    <div>
      <HistoryTimeline
        transactions={transactions}
        loans={loans}
        onEditTransaction={setEditingTransaction}
        onEditLoan={setEditingLoan}
      />

      {editingTransaction && (
        <Modal onClose={() => setEditingTransaction(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Edit Transaction
            </h2>
            <EditTransactionForm
              transaction={editingTransaction}
              onSubmit={(updated) => {
                onUpdateTransaction(updated);
                setEditingTransaction(null);
              }}
              onClose={() => setEditingTransaction(null)}
            />
          </div>
        </Modal>
      )}

      {editingLoan && (
        <Modal onClose={() => setEditingLoan(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Edit Loan
            </h2>
            <EditLoanForm
              loan={editingLoan}
              onSubmit={(updated) => {
                onUpdateLoan(updated);
                setEditingLoan(null);
              }}
              onClose={() => setEditingLoan(null)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}