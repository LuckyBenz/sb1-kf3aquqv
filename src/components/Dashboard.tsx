import React from 'react';
import { Loan } from '../types/loan';
import { Transaction } from '../types/transaction';
import { MonthlyPaymentCard } from './cards/MonthlyPaymentCard';
import { NextPaymentsCard } from './cards/NextPaymentsCard';
import { ActiveLoansCard } from './cards/ActiveLoansCard';
import { LoanBalanceCard } from './cards/LoanBalanceCard';
import { LoanSummary } from './LoanSummary';
import { TimelineSection } from './timeline/TimelineSection';
import { calculateTotalBalance } from '../utils/balanceCalculations';

interface DashboardProps {
  loans: Loan[];
  transactions: Transaction[];
  onEditTransaction?: (transaction: Transaction) => void;
  onEditLoan?: (loan: Loan) => void;
}

export function Dashboard({ 
  loans, 
  transactions,
  onEditTransaction,
  onEditLoan
}: DashboardProps) {
  const totalMonthlyPayments = loans.reduce((sum, loan) => {
    const amount = loan.direction === 'borrowed' ? loan.monthlyPayment : -loan.monthlyPayment;
    return sum + amount;
  }, 0);

  const { totalBorrowed, totalGiven } = calculateTotalBalance({
    loans,
    transactions,
    currentBalance: 0
  });

  const loansByType = loans.reduce((acc, loan) => {
    const key = `${loan.type}-${loan.direction}`;
    acc[key] = (acc[key] || 0) + loan.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LoanBalanceCard borrowed={totalBorrowed} given={totalGiven} />
        <MonthlyPaymentCard totalMonthlyPayments={Math.abs(totalMonthlyPayments)} />
        <NextPaymentsCard loans={loans} />
        <ActiveLoansCard count={loans.length} />
      </div>

      {Object.keys(loansByType).length > 0 && (
        <LoanSummary loansByType={loansByType} />
      )}
    </div>
  );
}