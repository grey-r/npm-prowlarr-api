import type {ApiRequestOptions} from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: 'include' | 'omit' | 'same-origin';
  TOKEN?: string | Resolver<string>;
  USERNAME?: string | Resolver<string>;
  PASSWORD?: string | Resolver<string>;
  HEADERS?: Headers | Resolver<Headers>;
  ENCODE_PATH?: (path: string) => string;
};

export class ProwlarrAPI {
  protected static config: OpenAPIConfig = {
    BASE: 'http://localhost:9696',
    VERSION: '1.0.0',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
  };

  public static configure(x: OpenAPIConfig | string, y?: string): void {
    if (typeof x === 'object') {
      ProwlarrAPI.config = x;
    } else {
      ProwlarrAPI.config.BASE = x;
      if (y) {
        if (typeof ProwlarrAPI.config.HEADERS === 'object') {
          ProwlarrAPI.config.HEADERS['X-Api-Key'] = y;
        } else if (!ProwlarrAPI.config.HEADERS) {
          ProwlarrAPI.config.HEADERS = {
            'X-Api-Key': y,
          };
        }
      }
    }
  }
}
