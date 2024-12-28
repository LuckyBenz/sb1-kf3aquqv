import React from 'react';
import { Modal } from '../ui/Modal';
import { TransactionForm } from '../transactions/TransactionForm';
import { TransactionFormData } from '../../types/transaction';

interface TransactionFormModalProps {
  onSubmit: (data: TransactionFormData) => void;
  onClose: () => void;
}

export function TransactionFormModal({ onSubmit, onClose }: TransactionFormModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add Transaction</h2>
        <TransactionForm 
          onSubmit={(data) => {
            onSubmit(data);
            onClose();
          }}
          onClose={onClose}
        />
      </div>
    </Modal>
  );
}