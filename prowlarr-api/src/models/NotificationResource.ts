import type {Field} from './Field';
import type {ProviderMessage} from './ProviderMessage';

export type NotificationResource = {
  id?: number;
  name?: string | null;
  fields?: Array<Field> | null;
  implementationName?: string | null;
  implementation?: string | null;
  configContract?: string | null;
  infoLink?: string | null;
  message?: ProviderMessage;
  tags?: Array<number> | null;
  presets?: Array<NotificationResource> | null;
  link?: string | null;
  onHealthIssue?: boolean;
  onApplicationUpdate?: boolean;
  supportsOnHealthIssue?: boolean;
  includeHealthWarnings?: boolean;
  supportsOnApplicationUpdate?: boolean;
  testCommand?: string | null;
};
