import { createFileRoute } from '@tanstack/react-router';

import { ListUsersPage } from '@/features/users/pages/ListUsersPage';

export const Route = createFileRoute('/users')({
  component: ListUsersPage,
});
