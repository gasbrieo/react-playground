import { test, expect } from "@playwright/test";

test("home", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Welcome Home!!!")).toBeVisible();
});

test("users", async ({ page }) => {
  await page.goto("/users");
  await expect(page.getByText("UsersPage")).toBeVisible();
});

test("products", async ({ page }) => {
  await page.goto("/products");
  await expect(page.getByText("ProductsPage")).toBeVisible();
});
