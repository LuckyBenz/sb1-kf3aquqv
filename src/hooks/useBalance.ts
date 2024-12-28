import { useState } from 'react';

export function useBalance() {
  const [balance, setBalance] = useState<number | null>(null);

  const updateBalance = (newBalance: number) => {
    setBalance(newBalance);
  };

  return {
    balance,
    updateBalance,
  };
}