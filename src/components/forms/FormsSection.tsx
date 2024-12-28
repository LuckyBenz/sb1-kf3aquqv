import React from 'react';
import { LoanFormData } from '../../types/loan';
import LoanForm from '../LoanForm';
import { TransactionForm } from '../transactions/TransactionForm';

interface FormsSectionProps {
  onSubmitLoan: (data: LoanFormData) => void;
  onSubmitTransaction: (data: any) => void;
  onClose: () => void;
}

export function FormsSection({ onSubmitLoan, onSubmitTransaction, onClose }: FormsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Loan</h2>
        <LoanForm onSubmit={onSubmitLoan} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add Transaction</h2>
        <TransactionForm 
          onSubmit={onSubmitTransaction}
          onClose={onClose}
        />
      </div>
    </div>
  );
}