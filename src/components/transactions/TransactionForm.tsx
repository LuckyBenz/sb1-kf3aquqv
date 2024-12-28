import React from 'react';
import { TransactionFormData, TransactionType } from '../../types/transaction';
import { AmountInput } from '../form/AmountInput';
import { DateInput } from '../form/DateInput';

interface TransactionFormProps {
  onSubmit: (data: TransactionFormData) => void;
  onClose: () => void;
}

export function TransactionForm({ onSubmit, onClose }: TransactionFormProps) {
  const [formData, setFormData] = React.useState<TransactionFormData>({
    type: 'income',
    amount: 0,
    description: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
  });
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.amount === 0) {
      setError('Amount cannot be zero');
      return;
    }

    if (!formData.description.trim()) {
      setError('Description is required');
      return;
    }

    onSubmit(formData);
    onClose();
  };

  const handleAmountChange = (amount: number) => {
    setError('');
    setFormData(prev => ({ ...prev, amount }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Type
          </label>
          <div className="flex space-x-4">
            {(['income', 'expense'] as TransactionType[]).map((type) => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="type"
                  value={type}
                  checked={formData.type === type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as TransactionType })}
                />
                <span className="ml-2 capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount
          </label>
          <AmountInput
            value={formData.amount}
            onChange={handleAmountChange}
            placeholder="Enter any amount"
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500"
            value={formData.description}
            onChange={(e) => {
              setError('');
              setFormData({ ...formData, description: e.target.value });
            }}
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="Enter category"
          />
        </div>

        <DateInput
          label="Date"
          value={formData.date}
          onChange={(date) => setFormData({ ...formData, date })}
        />
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
          Add Transaction
        </button>
      </div>
    </form>
  );
}