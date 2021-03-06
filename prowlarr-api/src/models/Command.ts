import type {CommandTrigger} from './CommandTrigger';

export type Command = {
  sendUpdatesToClient?: boolean;
  readonly updateScheduledTask?: boolean;
  readonly completionMessage?: string | null;
  readonly requiresDiskAccess?: boolean;
  readonly isExclusive?: boolean;
  readonly isTypeExclusive?: boolean;
  readonly name?: string | null;
  lastExecutionTime?: string | null;
  lastStartTime?: string | null;
  trigger?: CommandTrigger;
  suppressMessages?: boolean;
  clientUserAgent?: string | null;
};
