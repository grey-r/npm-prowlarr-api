import type {BookSearchParam} from './BookSearchParam';
import type {IndexerCategory} from './IndexerCategory';
import type {MovieSearchParam} from './MovieSearchParam';
import type {MusicSearchParam} from './MusicSearchParam';
import type {SearchParam} from './SearchParam';
import type {TvSearchParam} from './TvSearchParam';

export type IndexerCapabilityResource = {
  id?: number;
  limitsMax?: number | null;
  limitsDefault?: number | null;
  categories?: Array<IndexerCategory> | null;
  supportsRawSearch?: boolean;
  searchParams?: Array<SearchParam> | null;
  tvSearchParams?: Array<TvSearchParam> | null;
  movieSearchParams?: Array<MovieSearchParam> | null;
  musicSearchParams?: Array<MusicSearchParam> | null;
  bookSearchParams?: Array<BookSearchParam> | null;
};
