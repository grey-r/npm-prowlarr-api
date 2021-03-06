export type HttpUri = {
  readonly fullUri?: string | null;
  readonly scheme?: string | null;
  readonly host?: string | null;
  readonly port?: number | null;
  readonly path?: string | null;
  readonly query?: string | null;
  readonly fragment?: string | null;
};
