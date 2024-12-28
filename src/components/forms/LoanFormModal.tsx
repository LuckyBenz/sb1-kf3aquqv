import React from 'react';
import { Modal } from '../ui/Modal';
import LoanForm from '../LoanForm';
import { LoanFormData } from '../../types/loan';

interface LoanFormModalProps {
  onSubmit: (data: LoanFormData) => void;
  onClose: () => void;
}

export function LoanFormModal({ onSubmit, onClose }: LoanFormModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Loan</h2>
        <LoanForm onSubmit={(data) => {
          onSubmit(data);
          onClose();
        }} />
      </div>
    </Modal>
  );
}