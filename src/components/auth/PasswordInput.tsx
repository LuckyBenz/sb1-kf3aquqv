import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordRequirement {
  text: string;
  met: boolean;
}

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function PasswordInput({ value, onChange, placeholder = "Enter password" }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const requirements: PasswordRequirement[] = [
    { text: "At least 6 characters", met: value.length >= 6 },
    { text: "Contains a number", met: /\d/.test(value) },
    { text: "Contains a letter", met: /[a-zA-Z]/.test(value) }
  ];

  const strength = requirements.filter(r => r.met).length;
  const strengthColor = strength === 0 ? 'bg-gray-200' : 
                       strength === 1 ? 'bg-red-500' :
                       strength === 2 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 pr-10 block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
          placeholder={placeholder}
          minLength={6}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 
                   hover:text-gray-600 dark:hover:text-gray-300"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${strengthColor} transition-all duration-300`}
          style={{ width: `${(strength / 3) * 100}%` }}
        />
      </div>

      <div className="space-y-1">
        {requirements.map((req, index) => (
          <div 
            key={index}
            className={`text-xs flex items-center space-x-1 
                     ${req.met ? 'text-green-600 dark:text-green-400' : 
                               'text-gray-500 dark:text-gray-400'}`}
          >
            <span className={`text-lg ${req.met ? '•' : '°'}`}>
              {req.met ? '•' : '°'}
            </span>
            <span>{req.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}