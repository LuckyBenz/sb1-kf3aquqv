import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoPrice } from '../../types/crypto';

interface CryptoTickerItemProps {
  price: CryptoPrice;
}

export function CryptoTickerItem({ price }: CryptoTickerItemProps) {
  const isPositive = price.change24h >= 0;

  return (
    <div className="flex items-center space-x-2 px-4">
      <span className="font-medium text-gray-900 dark:text-white">{price.symbol}</span>
      <span className="text-gray-600 dark:text-gray-300">${price.price.toFixed(2)}</span>
      <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        {Math.abs(price.change24h).toFixed(2)}%
      </span>
    </div>
  );
}