import React from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { PlusCircle, User } from 'lucide-react';

interface HeaderProps {
  onOpenLoanForm: () => void;
  onOpenTransactionForm: () => void;
  onOpenProfile: () => void;
  userName?: string;
}

export function Header({ 
  onOpenLoanForm, 
  onOpenTransactionForm, 
  onOpenProfile,
  userName 
}: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
      <h1 className="text-4xl md:text-6xl font-mono font-medium text-gray-900 dark:text-white tracking-tight">
        Loan Tracker
        <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1 font-normal">
          {userName ? `Welcome, ${userName}` : 'Manage your finances with precision'}
        </span>
      </h1>
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={onOpenProfile}
          className="inline-flex items-center bg-gray-100 dark:bg-gray-700 text-gray-700 
                   dark:text-gray-300 py-2 px-4 rounded-md hover:bg-gray-200 
                   dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
        >
          <User className="w-4 h-4 mr-2" />
          {userName ? 'Edit Profile' : 'Create Profile'}
        </button>
        <ThemeToggle />
        <button
          onClick={onOpenLoanForm}
          className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-md 
                   hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          New Loan
        </button>
        <button
          onClick={onOpenTransactionForm}
          className="inline-flex items-center bg-green-600 text-white py-2 px-4 rounded-md 
                   hover:bg-green-700 transition-colors whitespace-nowrap"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          New Transaction
        </button>
      </div>
    </div>
  );
}