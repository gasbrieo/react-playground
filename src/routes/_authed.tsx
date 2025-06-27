import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { AuthedLayout } from "~/components/layout/AuthedLayout";
import type { AuthenticatedState } from "~/features/auth/types/auth";

const RouteComponent = () => {
  return (
    <AuthedLayout>
      <Outlet />
    </AuthedLayout>
  );
};

export const Route = createFileRoute("/_authed")({
  beforeLoad: ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({
        to: "/auth/login",
      });
    }

    return { authState: context.authState as AuthenticatedState };
  },
  component: RouteComponent,
});
