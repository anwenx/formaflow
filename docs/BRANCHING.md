# Branching and merge policy

## Branches

| Branch/pattern | Purpose | Who works there |
|---|---|---|
| `main` | Stable demo/release code | No direct commits |
| `develop` | Integration branch | PR merges only |
| `feature/person-1/*` | Backend, MongoDB, AI extraction | Teammate 1 |
| `feature/person-2/*` | React UI and dynamic forms | Teammate 2 |
| `feature/person-3/*` | Shared contracts, integration, tests, docs | Teammate 3 |
| `fix/*`, `docs/*`, `test/*`, `chore/*` | Other focused tasks | Any teammate |

Person assignments are initial ownership suggestions. The team can redistribute work, but each issue should have one clear owner. Branches are temporary and should be deleted after merge.

## Pull request flow

```text
Issue → task branch → local checks → PR to develop → CI/review → merge
                                                    |
                                                    v
                                   integration smoke tests
                                                    |
                                                    v
                                     release PR: develop → main
```

- Feature/fix PR base: `develop`.
- Release PR base: `main`, compare against `develop`.
- Never push directly to `main` or `develop`.
- Do not merge a PR with failing required checks.
- Delete merged task branches.
- Tag releases, for example `v0.1.0`, once the team adopts a release versioning policy.

## Suggested GitHub repository settings

1. Add all three teammates under **Settings → Collaborators** with **Write** access.
2. Create `main` and `develop`; push the initial scaffold.
3. In **Settings → Rules → Rulesets** (or branch protection settings), protect `main` and `develop`.
4. For `main`, require a pull request, at least one approval from someone other than the author, and passing CI checks. Dismiss stale approvals after new commits if available.
5. For `develop`, require PRs and passing CI. Requiring one review is recommended; if the team prioritizes speed, keep review lightweight but never bypass CI.
6. Disable force pushes and branch deletion on protected branches.
7. Enable issue tracking and a GitHub Project board with: `Backlog`, `Ready`, `In Progress`, `In Review`, `Done`.
8. Add CODEOWNERS only after confirming GitHub usernames. CODEOWNERS does not itself grant permissions.
9. Ensure the selected ruleset applies to administrators if the plan/settings support it.

Rules and required checks vary by GitHub plan and repository visibility. Verify that the chosen settings are actually enforced.

## Weekly rhythm

- Start of week: split goals into issues with acceptance criteria and owners.
- Daily: update issue status and post blockers early.
- During the week: open small PRs early as drafts if contract feedback is needed.
- End of week: integrate, run end-to-end smoke tests, demo, and plan the next set of issues.
