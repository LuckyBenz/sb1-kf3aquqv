import React from 'react';
import { formatDate } from '../../utils/dateFormatters';

interface TimelineEventDescriptionProps {
  date: string;
  description: string;
  category?: string;
}

export function TimelineEventDescription({ date, description, category }: TimelineEventDescriptionProps) {
  return (
    <div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {formatDate(date)}
      </span>
      <h3 className="font-medium text-gray-900 dark:text-white mt-1">
        {description}
      </h3>
      {category && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 capitalize">
          {category}
        </p>
      )}
    </div>
  );
}