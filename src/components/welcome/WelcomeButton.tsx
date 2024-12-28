import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeButtonProps {
  onClick: () => void;
}

export function WelcomeButton({ onClick }: WelcomeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-8 inline-flex items-center px-8 py-4 text-lg font-medium text-white 
                bg-emerald-600 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-emerald-500 transition-all transform 
                hover:scale-105 animate-fade-in-up"
    >
      Get Started
      <ArrowRight className="ml-2 w-5 h-5" />
    </button>
  );
}