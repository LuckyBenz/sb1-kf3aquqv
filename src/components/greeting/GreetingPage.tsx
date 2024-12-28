import React from 'react';
import { Wallet, ArrowRight, PiggyBank, LineChart, Shield } from 'lucide-react';

interface GreetingPageProps {
  onGetStarted: () => void;
}

export function GreetingPage({ onGetStarted }: GreetingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-gray-900 dark:text-white mb-6">
            Loan Tracker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your personal finance companion for managing loans and tracking expenses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Wallet className="w-8 h-8 text-blue-500" />,
              title: "Track Finances",
              description: "Monitor your loans, expenses, and income in one place"
            },
            {
              icon: <PiggyBank className="w-8 h-8 text-green-500" />,
              title: "Smart Insights",
              description: "Get detailed analytics and payment schedules"
            },
            {
              icon: <Shield className="w-8 h-8 text-purple-500" />,
              title: "Secure & Private",
              description: "Your financial data stays private and secure"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg 
                       hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white 
                     bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none 
                     focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                     transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}