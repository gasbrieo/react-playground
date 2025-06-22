import { delay } from 'msw';

export const networkDelay = () => {
  return delay(1000);
};
