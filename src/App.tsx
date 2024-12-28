import React, { useState } from 'react';
import { WelcomePage } from './components/welcome/WelcomePage';
import { CryptoTicker } from './components/crypto/CryptoTicker';
import { useProfile } from './hooks/useProfile';
import { ProfileModal } from './components/profile/ProfileModal';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/Dashboard';
import { TimelineSection } from './components/timeline/TimelineSection';
import { useLoanHandlers } from './hooks/useLoanHandlers';
import { useTransactions } from './hooks/useTransactions';
import { LoanFormModal } from './components/forms/LoanFormModal';
import { TransactionFormModal } from './components/forms/TransactionFormModal';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  
  const { profile, updateProfile } = useProfile();
  const { loans, handleAddLoan, handleDeleteLoan, handleUpdateRate, handleUpdateAmount, handleUpdateLoan } = useLoanHandlers();
  const { transactions, addTransaction, deleteTransaction, updateTransaction } = useTransactions();

  if (showWelcome) {
    return <WelcomePage onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-emerald-50 
                    dark:from-emerald-950 dark:via-sky-950 dark:to-emerald-950 transition-colors">
      <div className="sticky top-0 z-50">
        <CryptoTicker />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header
          onOpenLoanForm={() => setShowLoanForm(true)}
          onOpenTransactionForm={() => setShowTransactionForm(true)}
          onOpenProfile={() => setShowProfileModal(true)}
          userName={profile?.name}
        />

        <div className="space-y-8">
          <Dashboard 
            loans={loans} 
            transactions={transactions}
          />
          
          <TimelineSection 
            transactions={transactions}
            loans={loans}
            onEditTransaction={updateTransaction}
            onEditLoan={handleUpdateLoan}
          />
        </div>
      </div>

      {showProfileModal && (
        <ProfileModal
          onSubmit={updateProfile}
          onClose={() => setShowProfileModal(false)}
          initialData={profile || undefined}
        />
      )}

      {showLoanForm && (
        <LoanFormModal
          onSubmit={handleAddLoan}
          onClose={() => setShowLoanForm(false)}
        />
      )}

      {showTransactionForm && (
        <TransactionFormModal
          onSubmit={addTransaction}
          onClose={() => setShowTransactionForm(false)}
        />
      )}
    </div>
  );
}