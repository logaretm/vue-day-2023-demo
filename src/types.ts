export interface LabeledValue<T extends string | number> {
  label: string;
  value: T;
}

export type FilterValue<
  TFilter extends string | undefined = string,
  TOperator extends string | undefined = string,
  TValue extends any = any
> = [TFilter | undefined, TOperator | undefined, TValue | undefined];
