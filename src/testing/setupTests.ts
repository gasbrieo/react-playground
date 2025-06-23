import '@testing-library/jest-dom/vitest';

import { server } from './mocks/server';
import { initializeDb, resetDb } from './mocks/db';

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
