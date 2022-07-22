export type IndexerStatistics = {
  indexerId?: number;
  indexerName?: string | null;
  averageResponseTime?: number;
  numberOfQueries?: number;
  numberOfGrabs?: number;
  numberOfRssQueries?: number;
  numberOfAuthQueries?: number;
  numberOfFailedQueries?: number;
  numberOfFailedGrabs?: number;
  numberOfFailedRssQueries?: number;
  numberOfFailedAuthQueries?: number;
};
