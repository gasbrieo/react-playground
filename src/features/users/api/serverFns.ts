import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import axios from "redaxios";
import { User } from "../types/users";

export const getUsers = createServerFn({ method: "GET" }).handler(async () => {
  return axios
    .get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((r) => r.data.slice(0, 10));
});
