export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
  }
} as const;

// Validate environment variables
const requiredEnvVars = {
  'VITE_SUPABASE_URL': env.supabase.url,
  'VITE_SUPABASE_ANON_KEY': env.supabase.anonKey
};

Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}\n` +
      'Please click the "Connect to Supabase" button to set up your environment variables.'
    );
  }
});