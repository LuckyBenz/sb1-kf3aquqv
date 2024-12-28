import React from 'react';
import { EmailSignUpForm } from './EmailSignUpForm';

export function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Create Account
          </h2>
          <EmailSignUpForm />
        </div>
      </div>
    </div>
  );
}