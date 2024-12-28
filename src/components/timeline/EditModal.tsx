import React from 'react';
import { Modal } from '../ui/Modal';
import { EditTransactionForm } from '../transactions/EditTransactionForm';
import { EditLoanForm } from '../loans/EditLoanForm';
import { TimelineEvent } from '../../types/timeline';
import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';

interface EditModalProps {
  event: TimelineEvent;
  onClose: () => void;
  onUpdateTransaction: (transaction: Transaction) => void;
  onUpdateLoan: (loan: Loan) => void;
}

export function EditModal({ 
  event, 
  onClose, 
  onUpdateTransaction, 
  onUpdateLoan 
}: EditModalProps) {
  const title = event.type === 'transaction' ? 'Edit Transaction' : 'Edit Loan';

  return (
    <Modal onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        
        {event.type === 'transaction' ? (
          <EditTransactionForm
            transaction={event.data}
            onSubmit={(updated) => {
              onUpdateTransaction(updated);
              onClose();
            }}
            onClose={onClose}
          />
        ) : event.type === 'loan_created' ? (
          <EditLoanForm
            loan={event.data}
            onSubmit={(updated) => {
              onUpdateLoan(updated);
              onClose();
            }}
            onClose={onClose}
          />
        ) : null}
      </div>
    </Modal>
  );
}