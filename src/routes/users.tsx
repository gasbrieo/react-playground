import { createFileRoute } from '@tanstack/react-router';

import { ListUsersPage } from '@/features/users/pages/list-users';

export const Route = createFileRoute('/users')({
  component: ListUsersPage,
});
