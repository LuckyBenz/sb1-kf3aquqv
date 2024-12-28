import React from 'react';
import { LoanDirection } from '../types/loan';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface LoanDirectionSelectorProps {
  value: LoanDirection;
  onChange: (value: LoanDirection) => void;
}

export function LoanDirectionSelector({ value, onChange }: LoanDirectionSelectorProps) {
  return (
    <div className="flex space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="direction"
          value="borrowed"
          checked={value === 'borrowed'}
          onChange={(e) => onChange(e.target.value as LoanDirection)}
        />
        <span className="ml-2 flex items-center">
          <ArrowDownRight className="w-4 h-4 mr-1 text-red-500" />
          Borrowed
        </span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="direction"
          value="given"
          checked={value === 'given'}
          onChange={(e) => onChange(e.target.value as LoanDirection)}
        />
        <span className="ml-2 flex items-center">
          <ArrowUpRight className="w-4 h-4 mr-1 text-green-500" />
          Given
        </span>
      </label>
    </div>
  );
}