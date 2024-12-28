import axios from 'axios';
import { COINGECKO_API } from './endpoints';
import { formatCryptoData } from '../../utils/cryptoFormatters';
import type { CryptoPrice } from '../../types/crypto';

export async function getCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const response = await axios.get(`${COINGECKO_API.BASE_URL}${COINGECKO_API.ENDPOINTS.TOP_COINS}`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 5,
        sparkline: false,
        price_change_percentage: '24h'
      }
    });

    return formatCryptoData(response.data);
  } catch (error) {
    console.error('Failed to fetch crypto prices:', error);
    return [];
  }
}