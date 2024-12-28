export type RateType = 'fixed' | 'variable';
export type LoanType = 'personal' | 'mortgage' | 'car' | 'student' | 'bank';
export type LoanDirection = 'borrowed' | 'given';

export interface Loan {
  id: string;
  name: string;
  remarks: string;
  type: LoanType;
  direction: LoanDirection;
  amount: number;
  rateType: RateType;
  interestRate: number;
  interestRateHistory: Array<{
    rate: number;
    date: string;
  }>;
  term: number;
  startDate: string;
  nextPaymentDate: string;
  monthlyPayment: number;
}

export interface LoanFormData {
  name: string;
  remarks: string;
  type: LoanType;
  direction: LoanDirection;
  amount: number;
  rateType: RateType;
  interestRate: number;
  term: number;
  startDate: string;
}