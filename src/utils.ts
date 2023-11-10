import { snakeCase, upperFirst } from 'lodash-es';

export function createLabel(value: string) {
  return upperFirst(snakeCase(value).split('_').join(' '));
}
