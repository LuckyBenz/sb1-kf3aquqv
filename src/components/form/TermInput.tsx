import React from 'react';
import { Calendar } from 'lucide-react';

interface TermInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function TermInput({ value, onChange }: TermInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400">{value} months</span>
        <Calendar className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="range"
        min="1"
        max="360"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                 dark:bg-gray-700 accent-blue-600"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>1 month</span>
        <span>30 years</span>
      </div>
    </div>
  );
}