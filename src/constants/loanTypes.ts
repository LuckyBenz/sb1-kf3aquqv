import { LoanType } from '../types/loan';

export const LOAN_TYPES: { value: LoanType; label: string }[] = [
  { value: 'personal', label: 'Personal Loan' },
  { value: 'mortgage', label: 'Mortgage' },
  { value: 'car', label: 'Car Loan' },
  { value: 'student', label: 'Student Loan' },
  { value: 'bank', label: 'Bank Loan' }
];