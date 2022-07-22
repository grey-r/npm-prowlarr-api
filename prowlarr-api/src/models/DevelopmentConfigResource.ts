export type DevelopmentConfigResource = {
  id?: number;
  consoleLogLevel?: string | null;
  logSql?: boolean;
  logIndexerResponse?: boolean;
  logRotate?: number;
  filterSentryEvents?: boolean;
};
