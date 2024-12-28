import { useMemo } from 'react';
import { Loan } from '../types/loan';

export function useSearchLoans(loans: Loan[], searchTerm: string) {
  return useMemo(() => {
    if (!searchTerm.trim()) return loans;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    return loans.filter(loan => 
      loan.name.toLowerCase().includes(normalizedSearch) ||
      loan.type.toLowerCase().includes(normalizedSearch)
    );
  }, [loans, searchTerm]);
}