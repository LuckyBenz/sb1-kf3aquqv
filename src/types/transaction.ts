export type TransactionType = 'income' | 'expense';

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  category: string;
  comments: Comment[];
}

export interface TransactionFormData {
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  category: string;
}