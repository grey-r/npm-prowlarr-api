import type {ProviderMessageType} from './ProviderMessageType';

export type ProviderMessage = {
  message?: string | null;
  type?: ProviderMessageType;
};
