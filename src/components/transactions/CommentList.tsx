import React from 'react';
import { Comment } from '../../types/transaction';
import { formatDate } from '../../utils/dateFormatters';
import { Trash2 } from 'lucide-react';

interface CommentListProps {
  comments: Comment[];
  onDeleteComment: (commentId: string) => void;
}

export function CommentList({ comments, onDeleteComment }: CommentListProps) {
  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <div 
          key={comment.id}
          className="flex justify-between items-start p-2 bg-gray-50 dark:bg-gray-700/50 rounded"
        >
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{comment.text}</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(comment.createdAt)}
            </span>
          </div>
          <button
            onClick={() => onDeleteComment(comment.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}