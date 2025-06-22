import type { FC } from "react";
import { AppProvider } from "./provider";

export const App: FC = () => {
  return (
    <AppProvider>
      <div>Hello world!</div>
    </AppProvider>
  );
};
