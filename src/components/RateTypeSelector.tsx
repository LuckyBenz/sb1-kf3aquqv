import React from 'react';
import { RateType } from '../types/loan';

interface RateTypeSelectorProps {
  value: RateType;
  onChange: (value: RateType) => void;
}

export function RateTypeSelector({ value, onChange }: RateTypeSelectorProps) {
  return (
    <div className="flex space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="rateType"
          value="fixed"
          checked={value === 'fixed'}
          onChange={(e) => onChange(e.target.value as RateType)}
        />
        <span className="ml-2">Fixed Rate</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="rateType"
          value="variable"
          checked={value === 'variable'}
          onChange={(e) => onChange(e.target.value as RateType)}
        />
        <span className="ml-2">Variable Rate</span>
      </label>
    </div>
  );
}