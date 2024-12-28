import React from 'react';
import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';
import { formatDate } from '../../utils/dateFormatters';
import { formatCurrency } from '../../utils/loanCalculations';
import { ArrowUpRight, ArrowDownRight, Banknote, History } from 'lucide-react';

interface HistoryTimelineProps {
  transactions: Transaction[];
  loans: Loan[];
  onEditTransaction: (transaction: Transaction) => void;
  onEditLoan: (loan: Loan) => void;
}

type HistoryItem = {
  id: string;
  date: string;
  type: 'transaction' | 'loan' | 'rate_change';
  title: string;
  amount?: number;
  description: string;
  data: any;
};

export function HistoryTimeline({ 
  transactions, 
  loans, 
  onEditTransaction, 
  onEditLoan 
}: HistoryTimelineProps) {
  const historyItems: HistoryItem[] = [
    ...transactions.map(t => ({
      id: t.id,
      date: t.date,
      type: 'transaction' as const,
      title: t.type === 'income' ? 'Income' : 'Expense',
      amount: t.amount,
      description: t.description,
      data: t
    })),
    ...loans.map(l => ({
      id: l.id,
      date: l.startDate,
      type: 'loan' as const,
      title: `${l.direction === 'borrowed' ? 'Borrowed' : 'Given'} Loan`,
      amount: l.amount,
      description: l.name,
      data: l
    })),
    ...loans.flatMap(l => l.interestRateHistory.map((h, i) => ({
      id: `${l.id}-rate-${i}`,
      date: h.date,
      type: 'rate_change' as const,
      title: 'Interest Rate Change',
      description: `${l.name} - Rate changed to ${h.rate}%`,
      data: { loan: l, rate: h }
    })))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-6">
        <History className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Financial History
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-8">
          {historyItems.map((item) => (
            <div key={item.id} className="relative pl-10">
              <div className="absolute left-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 
                            border-2 border-blue-600 flex items-center justify-center">
                {item.type === 'transaction' && item.data.type === 'income' && (
                  <ArrowUpRight className="w-4 h-4 text-green-500" />
                )}
                {item.type === 'transaction' && item.data.type === 'expense' && (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                {item.type === 'loan' && (
                  <Banknote className="w-4 h-4 text-blue-600" />
                )}
                {item.type === 'rate_change' && (
                  <History className="w-4 h-4 text-purple-500" />
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(item.date)}
                    </span>
                    <h3 className="font-medium text-gray-900 dark:text-white mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {item.amount && (
                      <span className={`font-medium ${
                        item.type === 'transaction' && item.data.type === 'expense' 
                          ? 'text-red-500' 
                          : 'text-green-500'
                      }`}>
                        {formatCurrency(item.amount)}
                      </span>
                    )}
                    
                    {(item.type === 'transaction' || item.type === 'loan') && (
                      <button
                        onClick={() => {
                          if (item.type === 'transaction') {
                            onEditTransaction(item.data);
                          } else {
                            onEditLoan(item.data);
                          }
                        }}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}