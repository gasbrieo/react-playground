import { delay } from 'msw';

export const networkDelay = () => {
  if (!import.meta.env.TEST) {
    delay(1000);
  }
};
