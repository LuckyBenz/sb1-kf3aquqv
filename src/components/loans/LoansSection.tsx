import React, { useState, useEffect } from 'react';
import { Loan } from '../../types/loan';
import { SearchBar } from '../search/SearchBar';
import LoanCard from '../LoanCard';

interface LoansSectionProps {
  loans: Loan[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onDeleteLoan: (id: string) => void;
  onUpdateRate: (loanId: string, newRate: number) => void;
  onUpdateAmount: (loanId: string, newAmount: number) => void;
  onUpdateLoan: (loan: Loan) => void;
}

export function LoansSection({
  loans,
  searchTerm,
  onSearchChange,
  onDeleteLoan,
  onUpdateRate,
  onUpdateAmount,
  onUpdateLoan
}: LoansSectionProps) {
  const [newLoanId, setNewLoanId] = useState<string | null>(null);

  useEffect(() => {
    if (loans.length > 0) {
      const latestLoan = loans[loans.length - 1];
      setNewLoanId(latestLoan.id);
      const timer = setTimeout(() => setNewLoanId(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [loans.length]);

  return (
    <div>
      <div className="mb-6 max-w-md">
        <SearchBar 
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search loans by name or type..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map(loan => (
          <LoanCard 
            key={loan.id} 
            loan={loan} 
            isNew={loan.id === newLoanId}
            onDelete={onDeleteLoan}
            onUpdateRate={onUpdateRate}
            onUpdateAmount={onUpdateAmount}
            onUpdateLoan={onUpdateLoan}
          />
        ))}
      </div>
    </div>
  );
}