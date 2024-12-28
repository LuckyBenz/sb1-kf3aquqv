import React from 'react';
import { Calendar } from 'lucide-react';
import { Loan } from '../../types/loan';

interface NextPaymentCardProps {
  nextPayment: Loan | undefined;
}

export function NextPaymentCard({ nextPayment }: NextPaymentCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3">
        <Calendar className="w-8 h-8 text-purple-600" />
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Next Payment Due</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {nextPayment ? new Date(nextPayment.nextPaymentDate).toLocaleDateString() : 'No payments'}
          </p>
        </div>
      </div>
    </div>
  );
}