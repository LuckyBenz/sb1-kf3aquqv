import React from 'react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function DateInput({ value, onChange, label }: DateInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}