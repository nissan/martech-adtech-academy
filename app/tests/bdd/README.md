# BDD E2E Tests

This suite encodes acceptance criteria in BDD style using Playwright.

- Feature specs: `tests/bdd/features/*.feature`
- Executable scenarios: `tests/bdd/*.spec.ts`

## Run locally

```bash
pnpm install
pnpm test:e2e
```

## Notes

- Scenarios are written as Given/When/Then in both `.feature` and test comments.
- This is deployment-gate coverage for core learner flows, not exhaustive regression coverage.
