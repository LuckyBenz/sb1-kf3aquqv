import React from 'react';
import { CryptoTickerItem } from './CryptoTickerItem';
import { useCryptoPrices } from '../../hooks/useCryptoPrices';

export function CryptoTicker() {
  const { prices, loading, error } = useCryptoPrices();

  if (loading) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 py-2 px-4 shadow-md">
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 py-2 px-4 shadow-md">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 py-2 shadow-md overflow-hidden">
      <div className="flex animate-scroll">
        {prices.map((price) => (
          <CryptoTickerItem key={price.symbol} price={price} />
        ))}
      </div>
    </div>
  );
}