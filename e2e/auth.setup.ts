import { test as setup } from "@playwright/test";

const authFile = "e2e/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/");

  await page.waitForTimeout(1000);

  await page.waitForURL("/auth/login");

  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForURL("/");

  await page.context().storageState({ path: authFile });
});
