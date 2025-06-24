import { createFileRoute, Outlet } from '@tanstack/react-router';

const PrivateLayout = () => {
  return (
    <main className="flex-1 space-y-4 p-4">
      <Outlet />
    </main>
  );
};

export const Route = createFileRoute('/_private')({
  component: PrivateLayout,
});
