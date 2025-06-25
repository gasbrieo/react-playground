import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "./serverFns";

export const usersQueries = {
  all: ["users"],
  list: () =>
    queryOptions({
      queryKey: [...usersQueries.all, "list"],
      queryFn: () => getUsers(),
    }),
};
