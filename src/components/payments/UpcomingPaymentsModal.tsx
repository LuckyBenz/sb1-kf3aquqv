import React from 'react';
import { X } from 'lucide-react';
import { Loan } from '../../types/loan';
import { PaymentsList } from './PaymentsList';
import { Modal } from '../ui/Modal';

interface UpcomingPaymentsModalProps {
  loans: Loan[];
  onClose: () => void;
}

export function UpcomingPaymentsModal({ loans, onClose }: UpcomingPaymentsModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Upcoming Payments
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <PaymentsList loans={loans} />
        </div>
      </div>
    </Modal>
  );
}