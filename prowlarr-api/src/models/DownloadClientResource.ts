import type {DownloadProtocol} from './DownloadProtocol';
import type {Field} from './Field';
import type {ProviderMessage} from './ProviderMessage';

export type DownloadClientResource = {
  id?: number;
  name?: string | null;
  fields?: Array<Field> | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  tags?: Array<number> | null;
  presets?: Array<DownloadClientResource> | null;
  enable?: boolean;
  protocol?: DownloadProtocol;
  priority?: number;
};
