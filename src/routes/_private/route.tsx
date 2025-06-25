import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  component: RouteComponent,
});

function RouteComponent() {
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
      </header>
      <main className="flex-1 space-y-4 p-4">
        <Outlet />
      </main>
    </>
  );
}
