import { createFileRoute, redirect } from "@tanstack/react-router";

import { logout } from "~/features/auth";

export const Route = createFileRoute("/auth/logout")({
  preload: false,
  beforeLoad: ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: "/dashboard" });
    }
  },
  loader: async ({ context }) => {
    await logout();
    context.queryClient.clear();
    throw redirect({ to: "/auth/login" });
  },
});
