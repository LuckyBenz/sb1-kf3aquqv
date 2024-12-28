import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Loan } from '../../types/loan';
import { UpcomingPaymentsModal } from '../payments/UpcomingPaymentsModal';

interface NextPaymentsCardProps {
  loans: Loan[];
}

export function NextPaymentsCard({ loans }: NextPaymentsCardProps) {
  const [showModal, setShowModal] = useState(false);
  const upcomingCount = loans.length;

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer 
                 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center space-x-3">
          <Calendar className="w-8 h-8 text-purple-600" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Payments</p>
            <p className="text-2xl font-bold">
              {upcomingCount} {upcomingCount === 1 ? 'Payment' : 'Payments'}
            </p>
          </div>
        </div>
      </div>

      {showModal && (
        <UpcomingPaymentsModal 
          loans={loans}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}