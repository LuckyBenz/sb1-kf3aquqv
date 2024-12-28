import { useState, useEffect } from 'react';
import { getCryptoPrices } from '../services/api/coinGeckoApi';
import type { CryptoPrice } from '../types/crypto';

export function useCryptoPrices() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const data = await getCryptoPrices();
        setPrices(data);
        setError(null);
      } catch (err) {
        setError('Failed to load crypto prices');
        console.error('Failed to fetch prices:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return { prices, loading, error };
}