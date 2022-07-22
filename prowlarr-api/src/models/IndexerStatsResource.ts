import type {HostStatistics} from './HostStatistics';
import type {IndexerStatistics} from './IndexerStatistics';
import type {UserAgentStatistics} from './UserAgentStatistics';

export type IndexerStatsResource = {
  id?: number;
  indexers?: Array<IndexerStatistics> | null;
  userAgents?: Array<UserAgentStatistics> | null;
  hosts?: Array<HostStatistics> | null;
};
