---
trigger: always_on
---

# Testing Standards
- **Framework**: Use Vitest and React Testing Library.
- **Coverage**: Aim for unit tests for logic and integration tests for critical user flows.
- **File Naming**: Use `.test.tsx` suffix for test files.
- **Best Practices**:
  - Prefer `getByRole` or `getByLabelText` for accessibility.
  - Mock external API calls where applicable.
