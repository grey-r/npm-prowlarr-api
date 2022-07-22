import type {HistoryEventType} from './HistoryEventType';

export type HistoryResource = {
  id?: number;
  indexerId?: number;
  date?: string;
  downloadId?: string | null;
  successful?: boolean;
  eventType?: HistoryEventType;
  data?: Record<string, string | null> | null;
};
