import { createFileRoute } from '@tanstack/react-router';

import { ListUsersPage } from '@/pages/users';

export const Route = createFileRoute('/users')({
  component: ListUsersPage,
});
