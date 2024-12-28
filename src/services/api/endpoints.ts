// API configuration
export const COINGECKO_API = {
  BASE_URL: 'https://api.coingecko.com/api/v3',
  ENDPOINTS: {
    MARKET_DATA: '/simple/price',
    TOP_COINS: '/coins/markets'
  }
} as const;