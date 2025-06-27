import type { ReactNode } from "@tanstack/react-router";

import { Separator } from "~/components/ui/Separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/Sidebar";

import { AppSidebar } from "./AppSidebar";

interface AuthedLayoutProps {
  children: ReactNode;
}

export const AuthedLayout = ({ children }: AuthedLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
          </div>
          <div className="flex items-center gap-3"></div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};
