export type TimelineEventType = 'transaction' | 'loan_created' | 'loan_updated' | 'rate_change';

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  date: string;
  amount: number;
  description: string;
  category: string;
  isIncome: boolean;
  data: any;
  icon?: string;
}