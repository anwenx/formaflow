# Architecture overview

## High-level flow

```text
React UI
  ├── Dynamic renderer ← versioned form schema
  ├── React Hook Form + client-side validation
  └── Natural-language input
             |
             v
       Node.js REST API
  ├── Authentication/authorization boundary
  ├── Request validation and rate limits
  ├── Form/schema service
  ├── AI extraction service (LangChain/model adapter)
  └── Submission/resume service
             |
       ┌─────┴─────┐
       v           v
    MongoDB     LLM provider
```

## Important design principles

- The server is authoritative for validation; client validation is for user experience.
- The AI model proposes structured values; it must not define or silently change the trusted schema.
- Validate AI output with a strict schema, handle missing/ambiguous values, and let users review extracted values before submission.
- Store schema versions with submissions so old submissions remain interpretable.
- Keep API keys server-side; never expose them in frontend environment variables.
- Use synthetic fixtures in tests and demos.
- Add authentication, authorization, rate limiting, audit logging, and retention rules before any real sensitive data is used.

## Suggested core entities

- `FormDefinition`: name, version, schema, status, createdAt, updatedAt
- `FormSubmission`: formDefinitionId, schemaVersion, answers, status, createdAt, updatedAt
- `ExtractionJob`: submissionId, provider/model metadata, status, validated result summary, timestamps

Finalize fields and indexes as part of schema design. Avoid storing unnecessary prompt contents or sensitive data in application logs.

## API outline (initial proposal)

- `GET /health` — liveness/readiness information
- `GET /api/forms/:formId` — retrieve a published form definition
- `POST /api/forms/:formId/extractions` — extract candidate values from user-provided text
- `POST /api/forms/:formId/submissions` — create or submit validated answers
- `GET /api/submissions/:submissionId` — retrieve an authorized submission
- `PATCH /api/submissions/:submissionId` — save progress, subject to authorization

This is a proposal, not an implemented contract. Agree request/response schemas in `packages/shared` and document them in `docs/API.md` before parallel implementation.
