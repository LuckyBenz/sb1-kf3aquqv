import React from 'react';
import { Loan } from '../../types/loan';
import { formatCurrency } from '../../utils/loanCalculations';
import { formatDate } from '../../utils/dateFormatters';

interface PaymentsListProps {
  loans: Loan[];
}

export function PaymentsList({ loans }: PaymentsListProps) {
  const sortedLoans = [...loans].sort(
    (a, b) => new Date(a.nextPaymentDate).getTime() - new Date(b.nextPaymentDate).getTime()
  );

  return (
    <div className="space-y-4">
      {sortedLoans.length > 0 ? (
        sortedLoans.map(loan => (
          <div
            key={loan.id}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 
                     dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 
                     transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white">{loan.name}</h3>
              <div className="flex items-center mt-1 space-x-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Due: {formatDate(loan.nextPaymentDate)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {loan.type} Loan
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-medium ${
                loan.direction === 'borrowed' ? 'text-red-500' : 'text-green-500'
              }`}>
                {loan.direction === 'borrowed' ? '-' : '+'}{formatCurrency(loan.monthlyPayment)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No upcoming payments
        </p>
      )}
    </div>
  );
}