export interface LabeledValue<T extends string | number> {
  label: string;
  value: T;
}

export type FilterValue<
  TFilter extends string | null | undefined = string,
  TOperator extends string | null | undefined = string,
  TValue extends any = any
> = [TFilter, TOperator, TValue];
