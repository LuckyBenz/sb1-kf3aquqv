import React from 'react';
import { Wallet } from 'lucide-react';

export function WelcomeAnimation() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="relative">
        <Wallet className="w-24 h-24 text-emerald-600 mx-auto animate-float" />
        <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse-slow" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-mono font-bold text-emerald-900 dark:text-emerald-100 animate-slide-up">
        Loan Tracker
      </h1>
      
      <p className="text-xl text-emerald-700 dark:text-emerald-300 animate-fade-in-delay">
        Your personal finance companion
      </p>
    </div>
  );
}