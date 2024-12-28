import { TimelineEvent } from '../../types/timeline';

export function sortEventsByDate(events: TimelineEvent[]): TimelineEvent[] {
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}