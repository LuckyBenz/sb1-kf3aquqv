export interface Profile {
  name: string;
  email: string;
  currency: string;
  theme: 'light' | 'dark';
  createdAt: string;
  updatedAt: string;
}

export interface ProfileFormData {
  name: string;
  email: string;
  currency: string;
}