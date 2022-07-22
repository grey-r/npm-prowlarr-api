export type IndexerCategory = {
  id?: number;
  name?: string | null;
  description?: string | null;
  readonly subCategories?: Array<IndexerCategory> | null;
};
