import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/bdd",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3005",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm build && pnpm start -p 3005",
    url: "http://127.0.0.1:3005",
    reuseExistingServer: !process.env.CI,
    timeout: 180 * 1000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
