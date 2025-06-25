import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { UsersPage, usersQueryOptions } from "~/features/users";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/_private/users")({
  component: UsersPage,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(usersQueryOptions());
  },
  head: () => ({
    meta: [
      ...seo({
        title: "Users | Client-side Pagination with TanStack Table",
        description:
          "User table demonstrating client-side pagination with TanStack Table and React Query. Simple dataset fully controlled on the client.",
      }),
      ,
    ],
  }),
});
