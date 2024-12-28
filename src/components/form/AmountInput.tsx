import React from 'react';
import { DollarSign } from 'lucide-react';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export function AmountInput({ value, onChange, placeholder = "Enter amount" }: AmountInputProps) {
  // Handle raw input value to allow any input
  const [inputValue, setInputValue] = React.useState(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Convert to number only if it's a valid number
    const numericValue = parseFloat(newValue);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  // Update input value when prop changes
  React.useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <DollarSign className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        inputMode="decimal"
        value={inputValue}
        onChange={handleChange}
        className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}