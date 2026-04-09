import { expect, test } from "@playwright/test";

// Feature: tests/bdd/features/academy-core.feature

test.describe("Academy core flows (BDD)", () => {
  test("Scenario: Learner opens first module from homepage", async ({ page }) => {
    // Given I am on the academy homepage
    await page.goto("/");

    // When I open module 1
    await page.getByRole("link", { name: "Open module 1", exact: true }).click();

    // Then I should see the module page with the Harvard-style case section
    await expect(page).toHaveURL(/\/module\/industry-map$/);
    await expect(page.getByRole("heading", { name: "Harvard-style case" })).toBeVisible();
    await expect(page.getByText("It is your day-30 exec review.")).toBeVisible();
  });

  test("Scenario: Learner marks a module complete and state persists", async ({ page }) => {
    // Given I am on the industry map module page
    await page.goto("/module/industry-map");

    // When I mark the module as complete
    const checkbox = page.getByRole("checkbox", { name: "Mark this module complete" });
    await checkbox.check();

    // Then progress should show one completed module even after reload
    await expect(page.getByText("Progress: 1/10 modules complete")).toBeVisible();
    await page.reload();
    await expect(checkbox).toBeChecked();
    await expect(page.getByText("Progress: 1/10 modules complete")).toBeVisible();
  });

  test("Scenario: Learner submits a checkpoint quiz", async ({ page }) => {
    // Given I am on the industry map module page
    await page.goto("/module/industry-map");

    // When I submit the checkpoint quiz
    await page.getByRole("button", { name: "Submit quiz" }).click();

    // Then I should see a score and answer explanations
    await expect(page.getByText("Score:")).toBeVisible();
    await expect(page.getByText("Without shared taxonomy and ownership, metrics fragment and decisions become unreliable.")).toBeVisible();
  });

  test("Scenario: Learner saves and restores a case memo", async ({ page }) => {
    // Given I am on the industry map module page
    await page.goto("/module/industry-map");

    // When I write and save a case memo
    const memo = page.locator("textarea.memoArea");
    const marker = "BDD memo persistence check";
    await memo.fill(marker);
    await page.getByRole("button", { name: "Save memo" }).click();

    // Then the memo should persist after page reload
    await page.reload();
    await expect(page.locator("textarea.memoArea")).toHaveValue(marker);
  });
});
