import { Loan } from '../types/loan';

export const calculateMonthlyPayment = (
  principal: number,
  annualInterestRate: number,
  termInMonths: number
): number => {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const payment =
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termInMonths)) /
    (Math.pow(1 + monthlyInterestRate, termInMonths) - 1);
  return Math.round(payment * 100) / 100;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateRemainingMonths = (startDate: string, totalTermMonths: number): number => {
  const start = new Date(startDate);
  const now = new Date();
  const monthsPassed = (now.getFullYear() - start.getFullYear()) * 12 + 
                      (now.getMonth() - start.getMonth());
  const remainingMonths = Math.max(0, totalTermMonths - monthsPassed);
  return remainingMonths;
};

export const calculateLoanTotals = (loans: Loan[]) => {
  return loans.reduce(
    (acc, loan) => {
      if (loan.direction === 'borrowed') {
        acc.borrowed += loan.amount;
      } else {
        acc.given += loan.amount;
      }
      return acc;
    },
    { borrowed: 0, given: 0 }
  );
};