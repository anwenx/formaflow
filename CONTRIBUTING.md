# Contributing to FormaFlow

Thanks for contributing. Keep changes small, tested, documented, and easy to review.

## Before starting

- Read the README and relevant docs.
- Check GitHub Issues/Projects for an existing task; coordinate ownership before starting overlapping work.
- Confirm the expected API contract and shared types with the relevant teammate.
- Never use real sensitive data in development, tests, commits, or screenshots.

## Branch naming

Use short-lived task branches based on the latest `develop`:

- `feature/person-1/123-llm-extraction`
- `feature/person-2/124-conditional-renderer`
- `feature/person-3/125-api-contract-tests`
- `fix/person-2/131-field-validation`
- `docs/person-3/140-local-setup`

Replace the sample person number and issue number with the agreed team identity and real issue ID. Do not commit directly to `main` or `develop`.

## Daily workflow

```bash
git switch develop
git pull origin develop
git switch -c feature/person-2/123-short-description

# Make focused changes, then run relevant checks.
git status
git add <specific-files>
git commit -m "feat(web): add conditional field rendering"
git push -u origin HEAD
```

Open a PR from your feature branch into `develop`. If `develop` advances, update your branch safely:

```bash
git fetch origin
git rebase origin/develop
# Resolve conflicts, rerun checks, then:
git push --force-with-lease
```

Use rebase only on your own unmerged feature branch. Do not rewrite shared branches.

## Commit messages

Use Conventional Commit-style prefixes:

- `feat(web): add dynamic field renderer`
- `feat(api): add extraction endpoint`
- `fix(api): reject invalid schema output`
- `test(shared): cover branching rules`
- `docs: document local setup`
- `chore: configure CI`

Keep each commit focused. Never commit secrets, generated build output, dependency folders, or unrelated formatting changes.

## Pull request checklist

- [ ] PR explains the problem and solution and links the issue.
- [ ] Scope is focused; screenshots or API examples are attached where useful.
- [ ] Tests cover changed behavior and relevant edge cases.
- [ ] Lint, type-check, and build pass locally where configured.
- [ ] Shared types/API docs are updated if contracts changed.
- [ ] Accessibility, loading, empty, and error states are considered.
- [ ] No secrets, personal data, or unrelated files are included.
- [ ] Breaking changes and migration steps are clearly called out.

## Reviews and merging

Every contributor can create branches and PRs with **Write** access. Branch rules should block direct pushes to protected branches. Prefer at least one teammate review for changes entering `main`; for `develop`, the team can choose required review or CI-only merging based on project risk. Authors should not approve their own PR. Resolve review conversations before merging.

## Handling conflicts

Coordinate before changing shared contracts. Prefer small PRs, keep branches current, and avoid multiple people editing the same large file simultaneously. If a conflict affects API types or schema semantics, discuss the intended contract before resolving it.
