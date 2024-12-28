import { Loan } from '../types/loan';
import { calculateMonthlyPayment } from './loanCalculations';

export function updateLoanAmount(loan: Loan, newAmount: number): Loan {
  const newMonthlyPayment = calculateMonthlyPayment(
    newAmount,
    loan.interestRate,
    loan.term
  );

  return {
    ...loan,
    amount: newAmount,
    monthlyPayment: newMonthlyPayment
  };
}