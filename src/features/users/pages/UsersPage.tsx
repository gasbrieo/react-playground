import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

import { Separator } from "~/components/ui/Separator";

import { usersQueries } from "../api/queries";
import { UsersTable } from "../components/UsersTable";

export const UsersPage = () => {
  const { data } = useSuspenseQuery(usersQueries.list());

  return (
    <div className="flex flex-1 flex-col space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground text-sm">Manage products (Server side table functionalities.)</p>
        </div>
      </div>
      <Separator />
      <Suspense>
        <UsersTable data={data} />
      </Suspense>
    </div>
  );
};
