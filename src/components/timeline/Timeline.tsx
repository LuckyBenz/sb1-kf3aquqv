import React, { useState } from 'react';
import { TimelineItem } from './TimelineItem';
import { EditModal } from './EditModal';
import { Transaction } from '../../types/transaction';
import { Loan } from '../../types/loan';
import { createTimelineEvents } from '../../utils/timelineUtils';
import { TimelineEvent } from '../../types/timeline';

interface TimelineProps {
  transactions: Transaction[];
  loans: Loan[];
  onEditTransaction: (transaction: Transaction) => void;
  onEditLoan: (loan: Loan) => void;
}

export function Timeline({ 
  transactions, 
  loans, 
  onEditTransaction, 
  onEditLoan 
}: TimelineProps) {
  const [editingEvent, setEditingEvent] = useState<TimelineEvent | null>(null);
  const timelineEvents = createTimelineEvents(transactions, loans);

  return (
    <>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-900" />
        
        <div className="space-y-2">
          {timelineEvents.map((event) => (
            <TimelineItem
              key={event.id}
              event={event}
              onEdit={() => setEditingEvent(event)}
            />
          ))}
        </div>
      </div>

      {editingEvent && (
        <EditModal
          event={editingEvent}
          onClose={() => setEditingEvent(null)}
          onUpdateTransaction={onEditTransaction}
          onUpdateLoan={onEditLoan}
        />
      )}
    </>
  );
}