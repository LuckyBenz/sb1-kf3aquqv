import React from 'react';
import { AmountInput } from '../form/AmountInput';

interface BalanceFormProps {
  onSubmit: (balance: number) => void;
  onClose: () => void;
}

export function BalanceForm({ onSubmit, onClose }: BalanceFormProps) {
  const [balance, setBalance] = React.useState(0);
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (balance < 0) {
      setError('Balance cannot be negative');
      return;
    }
    onSubmit(balance);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Current Balance
        </label>
        <AmountInput
          value={balance}
          onChange={(value) => {
            setBalance(value);
            setError('');
          }}
          placeholder="Enter your current balance"
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border 
                   border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 
                   rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-blue-500"
        >
          Update Balance
        </button>
      </div>
    </form>
  );
}