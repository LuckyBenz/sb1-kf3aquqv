import React from 'react';
import { Modal } from '../ui/Modal';
import { EditTransactionForm } from '../transactions/EditTransactionForm';
import { EditLoanForm } from '../loans/EditLoanForm';
import { TimelineEvent } from '../../types/timeline';
import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';

interface EditTimelineItemModalProps {
  event: TimelineEvent;
  onClose: () => void;
  onUpdateTransaction: (transaction: Transaction) => void;
  onUpdateLoan: (loan: Loan) => void;
}

export function EditTimelineItemModal({ 
  event, 
  onClose, 
  onUpdateTransaction, 
  onUpdateLoan 
}: EditTimelineItemModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Edit {event.type === 'transaction' ? 'Transaction' : 'Loan'}
        </h2>
        
        {event.type === 'transaction' ? (
          <EditTransactionForm
            transaction={event.data}
            onSubmit={onUpdateTransaction}
            onClose={onClose}
          />
        ) : event.type === 'loan_created' ? (
          <EditLoanForm
            loan={event.data}
            onSubmit={onUpdateLoan}
            onClose={onClose}
          />
        ) : null}
      </div>
    </Modal>
  );
}