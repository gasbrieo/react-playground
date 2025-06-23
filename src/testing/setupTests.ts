import '@testing-library/jest-dom/vitest';

import { server } from './mocks/server';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
});
