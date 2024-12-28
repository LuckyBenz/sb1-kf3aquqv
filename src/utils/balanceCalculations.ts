import { Loan } from '../types/loan';
import { Transaction } from '../types/transaction';
import { calculateLoanTotals } from './loanCalculations';
import { calculateTransactionTotals } from './transactionCalculations';

interface BalanceCalculationParams {
  loans: Loan[];
  transactions: Transaction[];
  currentBalance: number;
}

interface BalanceCalculationResult {
  totalBorrowed: number;
  totalGiven: number;
  netBalance: number;
}

export function calculateTotalBalance({
  loans,
  transactions,
  currentBalance
}: BalanceCalculationParams): BalanceCalculationResult {
  const { borrowed: loanBorrowed, given: loanGiven } = calculateLoanTotals(loans);
  const { income, expenses } = calculateTransactionTotals(transactions);

  const totalBorrowed = loanBorrowed + expenses;
  const totalGiven = loanGiven + income + currentBalance;
  const netBalance = totalGiven - totalBorrowed;

  return {
    totalBorrowed,
    totalGiven,
    netBalance
  };
}