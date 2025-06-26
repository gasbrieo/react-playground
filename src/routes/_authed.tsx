import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";

import { AuthenticatedState } from "~/features/auth/types/auth";

const RouteComponent = () => {
  const { authState } = Route.useRouteContext();

  return (
    <>
      <header className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/users"
          activeProps={{
            className: "font-bold",
          }}
        >
          Users
        </Link>
        <Link
          to="/products"
          activeProps={{
            className: "font-bold",
          }}
        >
          Products
        </Link>
        <div className="ml-auto">
          <span className="mr-2">{authState.user.email}</span>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4">
        <Outlet />
      </main>
    </>
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
