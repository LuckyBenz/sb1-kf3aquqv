import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function EmailSignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    try {
      setError('');
      setSuccess(false);
      setLoading(true);
      await signUp(email, password);
      setSuccess(true);
      setEmail('');
      setPassword('');
    } catch (err: any) {
      const message = err?.message;
      if (message?.includes('unique constraint')) {
        setError('This email is already registered. Please sign in instead.');
      } else {
        setError(message || 'Failed to create account');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-green-700 dark:text-green-300">
          Account created successfully! You can now sign in.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
              setSuccess(false);
            }}
            className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
              setSuccess(false);
            }}
            className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500"
            placeholder="Choose a password (min. 6 characters)"
            minLength={6}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
                 font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 
                 disabled:cursor-not-allowed"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  );
}