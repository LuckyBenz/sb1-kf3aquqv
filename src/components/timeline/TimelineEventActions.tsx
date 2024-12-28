import React from 'react';
import { Edit } from 'lucide-react';
import { formatCurrency } from '../../utils/loanCalculations';

interface TimelineEventActionsProps {
  showAmount: boolean;
  amount: number;
  isIncome: boolean;
  isEditable: boolean;
  onEdit?: () => void;
}

export function TimelineEventActions({ 
  showAmount, 
  amount, 
  isIncome, 
  isEditable, 
  onEdit 
}: TimelineEventActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      {showAmount && (
        <span className={`font-medium ${isIncome ? 'text-emerald-500' : 'text-red-500'}`}>
          {isIncome ? '+' : '-'}{formatCurrency(amount)}
        </span>
      )}
      {isEditable && onEdit && (
        <button
          onClick={onEdit}
          className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
          title="Edit"
        >
          <Edit className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}