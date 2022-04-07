import { getRandomInt } from './get-random-int';

export function generateId(): string {
  const left = getRandomInt(1000, 4000);
  const right = getRandomInt(4000, 8000);
  return `${left}-${right}`;
}