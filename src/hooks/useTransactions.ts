import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Transaction, TransactionFormData } from '../types/transaction';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (formData: TransactionFormData) => {
    const newTransaction: Transaction = {
      id: uuidv4(),
      ...formData,
      comments: []
    };
    setTransactions(prev => [...prev, newTransaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const updateTransaction = (updatedTransaction: Transaction) => {
    setTransactions(prev => 
      prev.map(t => t.id === updatedTransaction.id ? updatedTransaction : t)
    );
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction
  };
}