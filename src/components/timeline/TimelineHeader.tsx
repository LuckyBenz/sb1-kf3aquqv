import React from 'react';
import { History } from 'lucide-react';
import { TimelineFilters } from './TimelineFilters';

type FilterType = 'all' | 'transactions' | 'loans' | 'rate-changes';

interface TimelineHeaderProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function TimelineHeader({ activeFilter, onFilterChange }: TimelineHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <History className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Transaction History
        </h2>
      </div>
      <TimelineFilters 
        activeFilter={activeFilter} 
        onFilterChange={onFilterChange} 
      />
    </div>
  );
}