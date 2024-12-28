import React, { useState } from 'react';
import { Loan } from '../../types/loan';
import { RateTypeSelector } from '../RateTypeSelector';
import { AmountInput } from '../form/AmountInput';
import { TermInput } from '../form/TermInput';
import { DateInput } from '../form/DateInput';
import { calculateMonthlyPayment } from '../../utils/loanCalculations';

interface EditLoanFormProps {
  loan: Loan;
  onSubmit: (updatedLoan: Loan) => void;
  onClose: () => void;
}

export function EditLoanForm({ loan, onSubmit, onClose }: EditLoanFormProps) {
  const [formData, setFormData] = useState({
    name: loan.name,
    remarks: loan.remarks,
    amount: loan.amount,
    rateType: loan.rateType,
    interestRate: loan.interestRate,
    term: loan.term,
    startDate: loan.startDate,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const monthlyPayment = calculateMonthlyPayment(
      formData.amount,
      formData.interestRate,
      formData.term
    );

    onSubmit({
      ...loan,
      ...formData,
      monthlyPayment,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Loan Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
        />
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
          value={formData.interestRate}
          onChange={(e) => setFormData({ ...formData, interestRate: Number(e.target.value) })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

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

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Remarks
        </label>
        <textarea
          value={formData.remarks}
          onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
          rows={3}
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
          Save Changes
        </button>
      </div>
    </form>
  );
}