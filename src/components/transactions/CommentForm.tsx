import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';

interface CommentFormProps {
  onSubmit: (text: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1 rounded-md border-gray-300 dark:border-gray-600 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="p-2 text-blue-600 hover:text-blue-700 disabled:text-gray-400 
                 disabled:cursor-not-allowed transition-colors"
      >
        <MessageSquarePlus className="w-5 h-5" />
      </button>
    </form>
  );
}