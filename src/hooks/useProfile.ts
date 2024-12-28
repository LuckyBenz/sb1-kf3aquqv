import { useState, useEffect } from 'react';
import { Profile, ProfileFormData } from '../types/profile';
import { useTheme } from '../contexts/ThemeContext';

const STORAGE_KEY = 'user_profile';

export function useProfile() {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<Profile | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    }
  }, [profile]);

  const updateProfile = (data: ProfileFormData) => {
    const now = new Date().toISOString();
    const updatedProfile: Profile = {
      ...data,
      theme,
      updatedAt: now,
      createdAt: profile?.createdAt || now,
    };
    setProfile(updatedProfile);
  };

  const hasProfile = Boolean(profile);

  return {
    profile,
    updateProfile,
    hasProfile
  };
}