import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet, Percent } from 'lucide-react';
import { TimelineEventType } from '../../types/timeline';

interface TimelineEventIconProps {
  type: TimelineEventType;
  isIncome: boolean;
}

export function TimelineEventIcon({ type, isIncome }: TimelineEventIconProps) {
  switch (type) {
    case 'transaction':
      return isIncome ? 
        <ArrowUpRight className="w-4 h-4 text-emerald-500" /> :
        <ArrowDownRight className="w-4 h-4 text-red-500" />;
    
    case 'loan_created':
      return <Wallet className="w-4 h-4 text-blue-500" />;
    
    case 'rate_change':
      return <Percent className="w-4 h-4 text-purple-500" />;
    
    default:
      return <Wallet className="w-4 h-4 text-gray-500" />;
  }
}