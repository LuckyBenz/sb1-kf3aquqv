import type { CryptoPrice } from '../types/crypto';

export function formatCryptoData(data: any[]): CryptoPrice[] {
  return data.map(coin => ({
    symbol: coin.symbol.toUpperCase(),
    price: coin.current_price,
    change24h: coin.price_change_percentage_24h
  }));
}