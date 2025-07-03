import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "~/components/ui/Sidebar";
import { Route } from "~/routes/dashboard";

import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { authState } = Route.useRouteContext();

  return (
    <SidebarProvider>
      <DashboardSidebar user={authState.user} />
      <SidebarInset>
        <DashboardTopbar />
        <main className="flex flex-1 p-4 md:px-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};
