# Security policy

## Reporting a vulnerability

Do not publish exploitable vulnerabilities, credentials, or sensitive data in public issues. For a private repository, contact the repository owners directly and share only the minimum information required to reproduce the issue.

## Baseline requirements

- Keep secrets in environment variables or an approved secret manager.
- Validate all input on the server, including AI-generated structured output.
- Apply authentication and object-level authorization before exposing submissions.
- Use synthetic data in development and automated tests.
- Avoid logging raw natural-language submissions, credentials, or sensitive form answers.
- Keep dependencies updated and review new packages before adding them.
- Define data retention and deletion behavior before production use.
