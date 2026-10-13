# Architecture decision log

Record decisions that affect multiple teammates. Keep each entry short.

## ADR-001 — Shared API contract

- **Status:** Proposed
- **Context:** Frontend and backend work in parallel.
- **Decision:** Agree request/response schemas and validation types in `packages/shared` before both sides implement the same endpoint.
- **Consequences:** Fewer integration conflicts; contract changes require a coordinated PR.

## ADR-002 — State management

- **Status:** Proposed
- **Decision:** Choose Redux Toolkit or Zustand after a short spike. Use React Hook Form for field/form state. Do not add both global-state libraries without a demonstrated need.
- **Consequences:** Less duplicated state and fewer dependencies.
