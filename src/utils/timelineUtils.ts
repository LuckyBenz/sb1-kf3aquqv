import { Transaction } from '../types/transaction';
import { Loan } from '../types/loan';
import { TimelineEvent } from '../types/timeline';
import { createTransactionEvent, createLoanEvent, createRateChangeEvent } from './timeline/eventCreators';
import { sortEventsByDate } from './timeline/eventSorters';

export function createTimelineEvents(
  transactions: Transaction[],
  loans: Loan[]
): TimelineEvent[] {
  const events: TimelineEvent[] = [
    // Transaction events
    ...transactions.map(createTransactionEvent),
    
    // Loan events
    ...loans.map(createLoanEvent),
    
    // Rate change events
    ...loans.flatMap(loan => 
      loan.interestRateHistory
        .slice(1) // Skip initial rate
        .map((rateChange, index) => createRateChangeEvent(loan, rateChange, index + 1))
    )
  ];

  return sortEventsByDate(events);
}