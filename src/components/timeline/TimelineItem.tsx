import React from 'react';
import { TimelineEvent } from '../../types/timeline';
import { TimelineEventIcon } from './TimelineEventIcon';
import { TimelineEventDescription } from './TimelineEventDescription';
import { TimelineEventActions } from './TimelineEventActions';

interface TimelineItemProps {
  event: TimelineEvent;
  onEdit?: () => void;
}

export function TimelineItem({ event, onEdit }: TimelineItemProps) {
  const showAmount = event.type !== 'rate_change';
  const isEditable = event.type === 'transaction' || event.type === 'loan_created';

  return (
    <div className="relative pl-10 mb-4 group">
      <div className="absolute left-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 
                    border-2 border-emerald-600 flex items-center justify-center">
        <TimelineEventIcon type={event.type} isIncome={event.isIncome} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 
                    hover:shadow-md transition-all duration-200">
        <div className="flex justify-between items-start">
          <TimelineEventDescription
            date={event.date}
            description={event.description}
            category={event.category}
          />
          <TimelineEventActions
            showAmount={showAmount}
            amount={event.amount}
            isIncome={event.isIncome}
            isEditable={isEditable}
            onEdit={onEdit}
          />
        </div>
      </div>
    </div>
  );
}