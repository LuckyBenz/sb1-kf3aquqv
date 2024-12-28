import React from 'react';
import { Loan } from '../types/loan';
import { Percent } from 'lucide-react';

interface RateUpdateModalProps {
  loan: Loan;
  onClose: () => void;
  onUpdate: (loanId: string, newRate: number) => void;
}

export function RateUpdateModal({ loan, onClose, onUpdate }: RateUpdateModalProps) {
  const [newRate, setNewRate] = React.useState(loan.interestRate);
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRate === loan.interestRate) {
      setError('New rate must be different from current rate');
      return;
    }
    if (newRate < 0) {
      setError('Interest rate cannot be negative');
      return;
    }
    onUpdate(loan.id, newRate);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center space-x-2 mb-4">
          <Percent className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Update Interest Rate
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Current Rate: {loan.interestRate}%
            </label>
            <div className="mt-1">
              <input
                type="number"
                step="0.1"
                min="0"
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500"
                value={newRate}
                onChange={(e) => {
                  setNewRate(Number(e.target.value));
                  setError('');
                }}
                placeholder="Enter new rate"
              />
            </div>
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:ring-offset-2"
            >
              Update Rate
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