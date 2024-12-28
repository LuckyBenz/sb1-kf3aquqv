import React from 'react';
import { Modal } from '../ui/Modal';
import { ProfileForm } from './ProfileForm';
import { ProfileFormData } from '../../types/profile';

interface ProfileModalProps {
  onSubmit: (data: ProfileFormData) => void;
  onClose: () => void;
  initialData?: ProfileFormData;
}

export function ProfileModal({ onSubmit, onClose, initialData }: ProfileModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
        <ProfileForm 
          onSubmit={(data) => {
            onSubmit(data);
            onClose();
          }}
          initialData={initialData}
        />
      </div>
    </Modal>
  );
}