import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";

import { DefaultCatchBoundary } from "~/components/errors/DefaultCatchBoundary";
import { NotFound } from "~/components/errors/NotFound";
import { getAuthState } from "~/features/auth";
import { seo } from "~/utils/seo";

import appCss from "../styles/app.css?url";

interface RootDocumentProps {
  children: ReactNode;
}

const RootDocument = ({ children }: RootDocumentProps) => {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
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
    const authState = await getAuthState();
    return { authState };
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
