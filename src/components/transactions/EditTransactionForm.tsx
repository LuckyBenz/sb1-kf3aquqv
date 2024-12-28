import React, { useState } from 'react';
import { Transaction, TransactionType } from '../../types/transaction';
import { AmountInput } from '../form/AmountInput';
import { DateInput } from '../form/DateInput';

interface EditTransactionFormProps {
  transaction: Transaction;
  onSubmit: (updatedTransaction: Transaction) => void;
  onClose: () => void;
}

export function EditTransactionForm({ transaction, onSubmit, onClose }: EditTransactionFormProps) {
  const [formData, setFormData] = useState({
    type: transaction.type,
    amount: transaction.amount,
    description: transaction.description,
    date: transaction.date,
    category: transaction.category,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...transaction,
      ...formData,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          onChange={(amount) => setFormData({ ...formData, amount })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category
        </label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <DateInput
        label="Date"
        value={formData.date}
        onChange={(date) => setFormData({ ...formData, date })}
      />

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
          Save Changes
        </button>
      </div>
    </form>
  );
}