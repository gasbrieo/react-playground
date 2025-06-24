export const enableMocking = async () => {
  if (import.meta.env.VITE_APP_API_MOCKING) {
    const { worker } = await import('./browser');
    const { seedDb } = await import('./db');
    await seedDb();
    return worker.start();
  }
};
