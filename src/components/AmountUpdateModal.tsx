import React from 'react';
import { Loan } from '../types/loan';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '../utils/loanCalculations';

interface AmountUpdateModalProps {
  loan: Loan;
  onClose: () => void;
  onUpdate: (loanId: string, newAmount: number) => void;
}

export function AmountUpdateModal({ loan, onClose, onUpdate }: AmountUpdateModalProps) {
  const [newAmount, setNewAmount] = React.useState(loan.amount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(loan.id, newAmount);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Update Loan Amount
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Current Amount: {formatCurrency(loan.amount)}
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                className="pl-7 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500"
                value={newAmount}
                onChange={(e) => setNewAmount(Number(e.target.value))}
                placeholder="Enter new amount"
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:ring-offset-2"
            >
              Update Amount
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                       py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 
                       transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}