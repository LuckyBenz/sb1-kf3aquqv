import React, { useState, useEffect } from 'react';
import { Transaction } from '../../types/transaction';
import { formatCurrency } from '../../utils/loanCalculations';
import { formatDate } from '../../utils/dateFormatters';
import { ArrowUpRight, ArrowDownRight, Trash2, MessageSquare, Edit } from 'lucide-react';
import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import { EditTransactionForm } from './EditTransactionForm';
import { Modal } from '../ui/Modal';
import { v4 as uuidv4 } from 'uuid';

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  onUpdateTransaction: (transaction: Transaction) => void;
}

export function TransactionList({ transactions, onDelete, onUpdateTransaction }: TransactionListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [newTransactionId, setNewTransactionId] = useState<string | null>(null);

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    if (transactions.length > 0) {
      const latestTransaction = transactions[transactions.length - 1];
      setNewTransactionId(latestTransaction.id);
      const timer = setTimeout(() => setNewTransactionId(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [transactions.length]);

  const handleAddComment = (transactionId: string, text: string) => {
    const transaction = transactions.find(t => t.id === transactionId);
    if (transaction) {
      const newComment = {
        id: uuidv4(),
        text,
        createdAt: new Date().toISOString()
      };
      onUpdateTransaction({
        ...transaction,
        comments: [...transaction.comments, newComment]
      });
    }
  };

  const handleDeleteComment = (transactionId: string, commentId: string) => {
    const transaction = transactions.find(t => t.id === transactionId);
    if (transaction) {
      onUpdateTransaction({
        ...transaction,
        comments: transaction.comments.filter(c => c.id !== commentId)
      });
    }
  };

  return (
    <div className="space-y-4">
      {sortedTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md 
                   transition-all duration-300 ${
                     newTransactionId === transaction.id ? 
                     'ring-2 ring-green-500 transform scale-102' : ''
                   }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {transaction.type === 'income' ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {transaction.description}
                  </p>
                  <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{formatDate(transaction.date)}</span>
                    <span>•</span>
                    <span className="capitalize">{transaction.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`font-medium ${
                  transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </span>
                <button
                  onClick={() => setEditingTransaction(transaction)}
                  className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setExpandedId(expandedId === transaction.id ? null : transaction.id)}
                  className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(transaction.id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {expandedId === transaction.id && (
              <div className="mt-4 space-y-4 border-t pt-4 dark:border-gray-700">
                <CommentList
                  comments={transaction.comments}
                  onDeleteComment={(commentId) => handleDeleteComment(transaction.id, commentId)}
                />
                <CommentForm
                  onSubmit={(text) => handleAddComment(transaction.id, text)}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {editingTransaction && (
        <Modal onClose={() => setEditingTransaction(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Edit Transaction
            </h2>
            <EditTransactionForm
              transaction={editingTransaction}
              onSubmit={onUpdateTransaction}
              onClose={() => setEditingTransaction(null)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}