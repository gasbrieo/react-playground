export const enableMocking = async () => {
  if (import.meta.env.VITE_APP_API_MOCKING) {
    const { worker } = await import('./browser');
    const { initializeDb, seedDb } = await import('./db');
    await initializeDb();
    await seedDb();
    return worker.start();
  }
};
