# FormaFlow — AI-Augmented Dynamic Form Engine

FormaFlow turns natural-language descriptions into structured form data and renders only the questions required by a schema's branching rules. It is designed for complex workflows such as insurance claims and healthcare intake.

> **Status:** Initial project scaffold. Features and integrations should be marked complete only after implementation and testing.

## Core capabilities

- Schema-driven dynamic forms with nested fields and conditional questions
- Natural-language extraction into validated JSON
- Backend schema validation and clear validation errors
- Save/resume for partially completed forms
- Versioned form definitions and auditable submissions
- Accessible, responsive React interface

## Technology direction

| Area | Proposed technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Form state and validation | React Hook Form, Zod |
| State management | Choose Redux Toolkit **or** Zustand; avoid introducing both without a clear need |
| Backend | Node.js, Express, TypeScript |
| AI extraction | LangChain with a configurable model provider |
| Database | MongoDB, Mongoose or the official MongoDB driver |
| API contract | REST, OpenAPI |
| Testing | Vitest, React Testing Library, Supertest |
| CI | GitHub Actions |

Pin actual versions in package manifests when implementation begins. Never commit API keys or production credentials.

## Repository layout

```text
formaflow/
├── apps/
│   ├── web/                    # React client
│   └── api/                    # Node.js REST API and AI extraction
├── packages/
│   └── shared/                 # Shared schemas, types, constants
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API.md
│   ├── BRANCHING.md
│   └── DECISIONS.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/ci.yml
│   ├── CODEOWNERS
│   └── pull_request_template.md
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
├── SECURITY.md
└── README.md
```

## Quick start

The repository scaffold documents the intended layout; application packages must be initialized before these commands will work.

1. Install Node.js LTS and Git.
2. Copy `.env.example` to the appropriate local `.env` file and fill in local values.
3. Install dependencies from the repository root using the package manager and lockfile selected by the team.
4. Start the API and web app using the scripts documented in their package manifests.

Do not commit `.env` files, credentials, database dumps, or real customer/patient/claim data.

## Team workflow

1. Pull the latest `develop`.
2. Create a task-specific branch, for example `feature/person-2/42-dynamic-form-renderer`.
3. Make focused commits and run relevant tests.
4. Push the branch and open a pull request into `develop`.
5. Complete CI and the agreed review process.
6. Merge the PR; delete the feature branch after merging.
7. Promote tested `develop` to `main` through a release PR.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/BRANCHING.md](docs/BRANCHING.md).

## Project milestones

- [ ] M1 — Repository setup, shared conventions, and schema design
- [ ] M2 — Dynamic renderer and conditional field engine
- [ ] M3 — API, MongoDB persistence, and schema validation
- [ ] M4 — Natural-language extraction pipeline with structured output validation
- [ ] M5 — Save/resume, error handling, and security review
- [ ] M6 — Integration testing, accessibility, documentation, and demo

## Security and privacy

The project may model insurance and healthcare use cases. Use synthetic data for development and demos. Do not place sensitive personal data in GitHub issues, pull requests, logs, screenshots, prompts, or test fixtures. Treat AI output as untrusted input and validate it against server-side schemas.

## License

Choose and add a license before publishing or accepting external contributions.
