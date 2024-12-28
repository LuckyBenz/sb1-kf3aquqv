import React from 'react';
import { Filter } from 'lucide-react';

type FilterType = 'all' | 'transactions' | 'loans' | 'rate-changes';

interface TimelineFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function TimelineFilters({ activeFilter, onFilterChange }: TimelineFiltersProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex items-center text-gray-500 dark:text-gray-400">
        <Filter className="w-4 h-4 mr-2" />
        <span className="text-sm">Filter:</span>
      </div>
      <div className="flex space-x-2">
        {[
          { id: 'all', label: 'All' },
          { id: 'transactions', label: 'Transactions' },
          { id: 'loans', label: 'Loans' },
          { id: 'rate-changes', label: 'Rate Changes' }
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id as FilterType)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeFilter === id
                ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}