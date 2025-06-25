import { queryOptions } from "@tanstack/react-query";
import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";

export type User = {
  id: number;
  name: string;
  email: string;
};

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

export const fetchUser = createServerFn({ method: "GET" })
  .validator((d: string) => d)
  .handler(async ({ data }) => {
    console.info(`Fetching user with id ${data}...`);

    return await axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${data}`)
      .then((r) => r.data)
      .catch((err) => {
        console.error(err);
        if (err.status === 404) {
          throw notFound();
        }
        throw err;
      });
  });

export const userQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["users", id],
    queryFn: () => fetchUser({ data: id }),
  });
