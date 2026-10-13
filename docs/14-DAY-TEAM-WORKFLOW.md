# FormaFlow — 14-Day Team Workflow

## Project Goal

Build an AI-powered dynamic form application that converts natural-language prompts into structured forms, renders dynamic fields, validates answers, and stores submissions.

## Team Responsibilities

### Member 1: Backend & Schema Engine
**Owner:** You  
**Main folders:** `apps/api/`, `packages/shared/`

- Design shared TypeScript form schemas.
- Implement Express API endpoints and validation.
- Build conditional-logic evaluation.
- Implement persistence for forms and responses.
- Write backend tests and document APIs.

### Member 2: Frontend & Dynamic Form UI
**Owner:** Aman  
**Main folder:** `apps/web/`

- Build the responsive React interface.
- Create reusable form field components.
- Render forms from shared schemas.
- Implement conditional visibility and client-side validation.
- Connect the frontend to the backend.
- Add loading, error, and success states.

### Member 3: AI Extraction & Integration Testing
**Owner:** Raushan  
**Main area:** AI generation module and integration tests.

- Convert natural-language prompts into structured form schemas.
- Integrate the agreed AI provider.
- Validate AI output against shared schema types.
- Handle invalid output, timeouts, and provider failures.
- Create test prompts and fixtures.
- Test the complete prompt-to-form workflow.

**Coordination rule:** Agree on shared schema changes and API contracts before implementation. Avoid creating duplicate endpoints or incompatible types.

## Day-by-Day Plan

### Day 1 — Setup
- Backend: inspect Express setup and document architecture.
- Frontend: organize React components and establish the page layout.
- AI: research provider options and prepare example prompts.
- Team: verify all members can run the project.

### Day 2 — Shared Schema
- Backend: define `FormSchema`, `FormField`, field types, options, and validation rules.
- Frontend: review the schema and create example form definitions.
- AI: define the expected structured output format.
- Team: agree on one shared schema contract.

### Day 3 — Backend Foundation
- Backend: add consistent errors and a schema-validation endpoint.
- Frontend: build navigation and the form-creation page.
- AI: create a generation-service interface and mock implementation.

### Day 4 — Dynamic Rendering
- Backend: validate supported field types.
- Frontend: render text, email, number, textarea, select, checkbox, radio, and date fields.
- AI: create schema fixtures covering supported fields.

### Day 5 — Validation
- Backend: validate required fields and submission data.
- Frontend: display field-level errors and preserve entered values.
- AI: test generated schemas containing validation rules.

### Day 6 — Conditional Logic
- Backend: define and test field-visibility conditions.
- Frontend: show or hide fields when answers change.
- AI: test prompts requesting conditional questions.

### Day 7 — AI Prototype
- Backend: expose the schema-validation contract.
- Frontend: create the prompt input and Generate button.
- AI: generate structured schemas using the agreed provider or a mock.

### Day 8 — AI Integration
- Backend: integrate the generation route and validate its output.
- Frontend: connect the prompt UI to the API and render results.
- AI: test malformed output, timeouts, and provider errors.

### Day 9 — Persistence
- Backend: implement saving and retrieving forms using the agreed database.
- Frontend: add save/load interactions.
- AI: test saving and retrieving generated schemas.

### Day 10 — Form Submission
- Backend: implement submission validation and response storage.
- Frontend: implement submit buttons, error messages, and success states.
- AI: test valid and invalid submissions, including conditional fields.

### Day 11 — Integration
- Backend: fix API and schema integration issues.
- Frontend: fix responsive-layout and interaction bugs.
- AI: test the full prompt-to-form-to-submission flow.

### Day 12 — Testing and Security
- Backend: test validation, request handling, and persistence.
- Frontend: test accessibility, rendering, and error states.
- AI: test invalid output and ensure API keys remain server-side.

### Day 13 — Stabilization
- Backend: finalize API documentation and database setup instructions.
- Frontend: polish the UI and document frontend configuration.
- AI: document provider configuration, limitations, and sample prompts.
- Team: fix high-priority bugs.

### Day 14 — Final Integration
- All: run builds and tests, resolve integration issues, update the README, and prepare a demonstration.
- Backend: verify validation and persistence.
- Frontend: verify dynamic rendering and submissions.
- AI: verify generation and failure handling.
- Team: confirm that the core workflow works end to end.

## Daily Development Rules

1. Start from the latest `develop` branch.
2. Work on your assigned feature branch.
3. Avoid editing another member's owned files without coordination.
4. Test changes before committing.
5. Commit small, meaningful changes.
6. Push changes and open a pull request targeting `develop`.
7. Communicate shared schema/API changes before merging.
8. Never commit API keys or secrets.
9. Never force-push or reset shared branches to hide conflicts.
10. Update the team on progress and blockers daily.

## Branches

- Backend: `feature/schema-engine`
- Frontend: `feature/dynamic-form-ui`
- AI: `feature/ai-extraction`

## Daily Git Workflow

Update your feature branch from `develop`:

```bash
git switch develop
git pull origin develop
git switch YOUR_FEATURE_BRANCH
git merge develop
```

Replace `YOUR_FEATURE_BRANCH` with your actual branch name.

After implementation and testing:

```bash
git status
git add .
git commit -m "feat: describe your change"
git push -u origin YOUR_FEATURE_BRANCH
```

Open a pull request with `develop` as the base branch. Review the diff and resolve conflicts before merging.

## Definition of Done

- [ ] Feature matches its requirements.
- [ ] Build succeeds.
- [ ] Relevant tests pass.
- [ ] Errors are handled.
- [ ] Shared types and API contracts are followed.
- [ ] Changes are pushed to the correct feature branch.
- [ ] Pull request targets `develop`.
- [ ] PR description includes changes and testing.
- [ ] No secrets are committed.
- [ ] Documentation is updated when necessary.

## Final Acceptance Checklist

- [ ] Frontend and backend run using documented commands.
- [ ] Supported field types render correctly.
- [ ] Invalid schemas and submissions are rejected.
- [ ] Conditional fields work correctly.
- [ ] AI generation returns valid schemas or useful errors.
- [ ] Forms can be submitted.
- [ ] Responses persist if database storage is implemented.
- [ ] Relevant tests pass.
- [ ] Setup instructions work from a fresh checkout.
- [ ] Intended features are merged into `develop`.
- [ ] `main` contains the release-ready version.

**Principle:** Build small features, test continuously, agree on shared contracts, and integrate regularly.

