import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "~/components/ui/Sidebar";
import { Route } from "~/routes/dashboard";

import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { authState } = Route.useRouteContext();

  return (
    <SidebarProvider>
      <DashboardSidebar user={authState.user} />
      <SidebarInset>
        <DashboardHeader />
        <main className="flex flex-1 p-4 md:px-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};
