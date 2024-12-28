import React from 'react';
import { LoanFormData } from '../types/loan';
import { RateTypeSelector } from './RateTypeSelector';
import { LoanDirectionSelector } from './LoanDirectionSelector';
import { AmountInput } from './form/AmountInput';
import { TermInput } from './form/TermInput';
import { DateInput } from './form/DateInput';
import { LOAN_TYPES } from '../constants/loanTypes';

interface LoanFormProps {
  onSubmit: (data: LoanFormData) => void;
}

export default function LoanForm({ onSubmit }: LoanFormProps) {
  const [formData, setFormData] = React.useState<LoanFormData>({
    name: '',
    remarks: '',
    type: 'personal',
    direction: 'borrowed',
    amount: 10000,
    rateType: 'fixed',
    interestRate: 5,
    term: 12,
    startDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Loan Name
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                       focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Home Renovation Loan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Loan Type
            </label>
            <select
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                       focus:border-blue-500 focus:ring-blue-500"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
            >
              {LOAN_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Loan Direction
            </label>
            <LoanDirectionSelector
              value={formData.direction}
              onChange={(direction) => setFormData({ ...formData, direction })}
            />
          </div>
        </div>

        <div className="space-y-4">
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
              Interest Rate Type
            </label>
            <RateTypeSelector
              value={formData.rateType}
              onChange={(rateType) => setFormData({ ...formData, rateType })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                       focus:border-blue-500 focus:ring-blue-500"
              value={formData.interestRate}
              onChange={(e) => setFormData({ ...formData, interestRate: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Loan Term
          </label>
          <TermInput
            value={formData.term}
            onChange={(term) => setFormData({ ...formData, term })}
          />
        </div>

        <DateInput
          label="Start Date"
          value={formData.startDate}
          onChange={(startDate) => setFormData({ ...formData, startDate })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Remarks
        </label>
        <textarea
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          value={formData.remarks}
          onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          placeholder="Additional notes about the loan..."
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                   transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:ring-offset-2"
        >
          Add Loan
        </button>
      </div>
    </form>
  );
}