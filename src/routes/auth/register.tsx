import { createFileRoute, redirect } from "@tanstack/react-router";

import { RegisterPage } from "~/features/auth";

const RouteComponent = () => {
  return <RegisterPage />;
};

export const Route = createFileRoute("/auth/register")({
  beforeLoad: ({ context }) => {
    if (context.authState.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});
