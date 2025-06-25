import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";
import { User } from "./users.types";

export const fetchUsers = createServerFn({ method: "GET" }).handler(
  async () => {
    console.info("Fetching users...");
    return axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.data.slice(0, 10));
  }
);

export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
