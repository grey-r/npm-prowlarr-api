import type {ApplyTags} from './ApplyTags';

export type IndexerEditorResource = {
  indexerIds?: Array<number> | null;
  enable?: string | null;
  AppProfileId?: number | null;
  tags?: Array<number> | null;
  applyTags?: ApplyTags;
};
