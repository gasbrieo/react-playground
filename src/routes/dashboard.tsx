import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { DashboardLayout } from "~/components/layout/DashboardLayout";
import type { AuthenticatedState } from "~/features/auth/types/auth";

const RouteComponent = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export const Route = createFileRoute("/dashboard")({
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
