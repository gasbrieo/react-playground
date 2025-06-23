import '@testing-library/jest-dom/vitest';

import { initializeDb, resetDb } from './mocks/db';
import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

beforeEach(() => {
  initializeDb();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
  resetDb();
});
