import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginPage } from "~/features/auth";

const RouteComponent = () => {
  return <LoginPage />;
};

export const Route = createFileRoute("/auth/login")({
  beforeLoad: async ({ context }) => {
    if (context.authState.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});
