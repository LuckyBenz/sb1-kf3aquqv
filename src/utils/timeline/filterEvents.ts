import { TimelineEvent } from '../../types/timeline';

type FilterType = 'all' | 'transactions' | 'loans' | 'rate-changes';

export function filterTimelineEvents(
  events: TimelineEvent[], 
  filter: FilterType
): TimelineEvent[] {
  if (filter === 'all') return events;
  
  return events.filter(event => {
    switch (filter) {
      case 'transactions':
        return event.type === 'transaction';
      case 'loans':
        return event.type === 'loan_created';
      case 'rate-changes':
        return event.type === 'rate_change';
      default:
        return true;
    }
  });
}