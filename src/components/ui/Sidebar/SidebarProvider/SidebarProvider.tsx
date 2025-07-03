import { useCallback, useMemo, useState } from "react";

import { useIsMobile } from "~/hooks/useIsMobile";
import { cn } from "~/utils/cn";

import { TooltipProvider } from "../../Tooltip";
import { SidebarContext, type SidebarContextProps } from "../SidebarContext";

import type { SidebarProviderProps } from "./SidebarProvider.types";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";

export const SidebarProvider = ({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) => {
  const isMobile = useIsMobile();

  const [openMobile, setOpenMobile] = useState(false);
  const [_open, _setOpen] = useState(defaultOpen);

  const open = openProp ?? _open;

  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const newState = typeof value === "function" ? value(open) : value;

      if (setOpenProp) {
        setOpenProp(newState);
      } else {
        _setOpen(newState);
      }

      document.cookie = `${SIDEBAR_COOKIE_NAME}=${newState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [open, setOpenProp],
  );

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpen((prev) => !prev);
    }
  }, [isMobile, setOpen]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className)}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};
