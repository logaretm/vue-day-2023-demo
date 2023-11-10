import { snakeCase } from 'lodash-es';

export function createLabel(value: string) {
  return snakeCase(value).split('_').join(' ');
}
