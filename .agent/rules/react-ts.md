---
trigger: always_on
---

# React & TypeScript Standards
- **Functional Components**: Use arrow functions for components.
- **TypeScript**: 
  - Define `interface` for component props.
  - Avoid `any`. Use strict typing.
  - Export types from `src/types.ts` if shared.
- **Hooks**: Use `useEffect`, `useState`, `useMemo`, `useCallback` appropriately.
- **Structure**: 
  - Keep components in `src/components`.
  - Keep pages in `src/pages`.
  - Use `index.tsx` as entry point.
