export type CustomFilterResource = {
  id?: number;
  type?: string | null;
  label?: string | null;
  filters?: Array<Record<string, any>> | null;
};
