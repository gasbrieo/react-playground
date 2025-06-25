import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { usersQueryOptions } from "~/features/users/users.api";
import { UsersPage } from "~/features/users/users.page";

export const Route = createFileRoute("/users")({
  component: UsersPage,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(usersQueryOptions());
  },
});
