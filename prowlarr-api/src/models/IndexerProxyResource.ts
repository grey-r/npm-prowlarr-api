import type {Field} from './Field';
import type {ProviderMessage} from './ProviderMessage';

export type IndexerProxyResource = {
  id?: number;
  name?: string | null;
  fields?: Array<Field> | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  tags?: Array<number> | null;
  presets?: Array<IndexerProxyResource> | null;
  link?: string | null;
  onHealthIssue?: boolean;
  supportsOnHealthIssue?: boolean;
  includeHealthWarnings?: boolean;
  testCommand?: string | null;
};
