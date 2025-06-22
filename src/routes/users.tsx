import { createFileRoute } from '@tanstack/react-router';

import { ListUsersPage } from '@/features/users';

export const Route = createFileRoute('/users')({
  component: ListUsersPage,
});
