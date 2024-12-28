import React from 'react';
import { ProfileFormData } from '../../types/profile';
import { User } from 'lucide-react';

interface ProfileFormProps {
  onSubmit: (data: ProfileFormData) => void;
  initialData?: ProfileFormData;
}

export function ProfileForm({ onSubmit, initialData }: ProfileFormProps) {
  const [formData, setFormData] = React.useState<ProfileFormData>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    currency: initialData?.currency || 'USD'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2 mb-6">
        <User className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Your Profile
        </h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Preferred Currency
        </label>
        <select
          value={formData.currency}
          onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
                 font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Save Profile
      </button>
    </form>
  );
}