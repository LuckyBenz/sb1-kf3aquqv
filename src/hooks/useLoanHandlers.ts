import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Loan, LoanFormData } from '../types/loan';
import { calculateMonthlyPayment } from '../utils/loanCalculations';
import { updateLoanAmount } from '../utils/loanUpdates';

export function useLoanHandlers() {
  const [loans, setLoans] = useState<Loan[]>([]);

  const handleAddLoan = (formData: LoanFormData) => {
    const monthlyPayment = calculateMonthlyPayment(
      formData.amount,
      formData.interestRate,
      formData.term
    );

    const nextPaymentDate = new Date(formData.startDate);
    nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);

    const newLoan: Loan = {
      id: uuidv4(),
      ...formData,
      monthlyPayment,
      nextPaymentDate: nextPaymentDate.toISOString().split('T')[0],
      interestRateHistory: [{
        rate: formData.interestRate,
        date: new Date().toISOString()
      }]
    };

    setLoans(prevLoans => [...prevLoans, newLoan]);
  };

  const handleDeleteLoan = (id: string) => {
    setLoans(prevLoans => prevLoans.filter(loan => loan.id !== id));
  };

  const handleUpdateRate = (loanId: string, newRate: number) => {
    setLoans(prevLoans => prevLoans.map(loan => {
      if (loan.id === loanId) {
        const newMonthlyPayment = calculateMonthlyPayment(
          loan.amount,
          newRate,
          loan.term
        );
        return {
          ...loan,
          interestRate: newRate,
          monthlyPayment: newMonthlyPayment,
          interestRateHistory: [
            ...loan.interestRateHistory,
            { rate: newRate, date: new Date().toISOString() }
          ]
        };
      }
      return loan;
    }));
  };

  const handleUpdateAmount = (loanId: string, newAmount: number) => {
    setLoans(prevLoans => prevLoans.map(loan => {
      if (loan.id === loanId) {
        return updateLoanAmount(loan, newAmount);
      }
      return loan;
    }));
  };

  const handleUpdateLoan = (updatedLoan: Loan) => {
    setLoans(prevLoans => 
      prevLoans.map(loan => loan.id === updatedLoan.id ? updatedLoan : loan)
    );
  };

  return {
    loans,
    handleAddLoan,
    handleDeleteLoan,
    handleUpdateRate,
    handleUpdateAmount,
    handleUpdateLoan
  };
}