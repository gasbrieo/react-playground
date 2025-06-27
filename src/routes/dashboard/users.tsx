import { createFileRoute } from "@tanstack/react-router";

import { UsersPage, usersQueries } from "~/features/users";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/dashboard/users")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(usersQueries.list());

    return {
      crumb: "Users",
    };
  },
  head: () => ({
    meta: [
      ...seo({
        title: "Users | Client-side Pagination with TanStack Table",
        description:
          "User table demonstrating client-side pagination with TanStack Table and React Query. Simple dataset fully controlled on the client.",
      }),
    ],
  }),
  component: UsersPage,
});
