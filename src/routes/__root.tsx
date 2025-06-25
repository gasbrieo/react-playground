import type { ReactNode } from "react";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "~/components/errors/DefaultCatchBoundary";
import { NotFound } from "~/components/errors/NotFound";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import appCss from "../styles/app.css?url";
import { seo } from "~/utils/seo";
import { getUserSession } from "~/features/auth";

interface RootDocumentProps {
  children: ReactNode;
}

const RootDocument = ({ children }: RootDocumentProps) => {
  const { user } = Route.useRouteContext();

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
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
            {user ? (
              <>
                <span className="mr-2">{user.email}</span>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </header>
        <main className="flex-1 space-y-4 p-4">{children}</main>
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
};

const RootComponent = () => {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
};

interface RouteContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  beforeLoad: async () => {
    const user = await getUserSession();

    return {
      user,
    };
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "React Playground with TanStack | Tables, Pagination, and SSR",
        description:
          "A technical demo app using React, TanStack Table, and React Query. Real examples of client-side and server-side pagination with TanStack Start.",
      }),
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});
