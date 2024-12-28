import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';
import { TimelineEvent } from '../../types/timeline';

export function createTransactionEvent(transaction: Transaction): TimelineEvent {
  return {
    id: transaction.id,
    type: 'transaction',
    date: transaction.date,
    amount: transaction.amount,
    description: transaction.description,
    category: transaction.category,
    isIncome: transaction.type === 'income',
    data: transaction
  };
}

export function createLoanEvent(loan: Loan): TimelineEvent {
  return {
    id: `${loan.id}-created`,
    type: 'loan_created',
    date: loan.startDate,
    amount: loan.amount,
    description: `${loan.direction === 'borrowed' ? 'Borrowed' : 'Given'}: ${loan.name}`,
    category: loan.type,
    isIncome: loan.direction === 'given',
    data: loan
  };
}

export function createRateChangeEvent(loan: Loan, rateChange: { rate: number; date: string }, index: number): TimelineEvent {
  return {
    id: `${loan.id}-rate-${index}`,
    type: 'rate_change',
    date: rateChange.date,
    amount: loan.amount,
    description: `Interest rate changed to ${rateChange.rate}% for ${loan.name}`,
    category: 'Rate Change',
    isIncome: false,
    data: { loan, rateChange }
  };
}