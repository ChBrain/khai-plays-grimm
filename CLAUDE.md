# CLAUDE.md, the Grimm house

This repository is a **khai plays house**: a production house dedicated to one
source, Grimm. It was raised by khai-stage (the impresario's
generator); the plays are written separately, in khai-playwright mode.

## What lives here

- `plays/` holds the productions: each play file plus the plots it chains and the
  elements those plots cast. This is the only content.
- The rest is the wiring and the gates, raised once and not improvised.

## The house is the Estate

`README.md` is this house's **Estate identity**: the production that answers for
the run. Every play logs the house in its `Estate` (E), and the conformance test
checks the link resolves. A play with no Estate is not yet a production.

## Branching

Computed, not chosen. Let the guard pick the lane:

```
npx khai-guard branch <topic>
```

- `play/<topic>` owns `plays/**` (the productions).
- `governance/<topic>` owns the gates and config (`.github/**`, `.husky/**`,
  `khai-guard.config.json`, `tests/**`, `CLAUDE.md`, `README.md`, `REFERENCE.md`, `REFERENCES.md`, `management/**`).
- `changeset-release/*` is a bot-controlled general lane for version releases.

Never `--no-verify`. Never merge; open the PR and stop.

## Versioning

The minor version IS the play count, computed not chosen. `khai-tests registry
build` (run by the `version` script) sets the version from the play count:
`0.<count>.0` (the minor is the count, the patch resets to 0), reconciling both
`package.json` and `registry.json`. The build is the single writer of the
version; never hand-edit it.

- **Adding a play** -> no changeset. The play PR runs `khai-tests registry build`,
  which moves the minor to the new play count and resets the patch to 0
  (`0.<count>.0`); `changeset publish` ships it. A per-play changeset would
  re-bump the patch on top of the minor the build already moved, the
  `0.<count>.1` drift to avoid.
- **A non-play change** (governance, formatting, a fix to existing content) ->
  a `patch` changeset; it ships at the same play count.

## Protection

Content is CC-BY-NC-SA, code is MIT (see `LICENSE` and `LICENSE-CODE`); the
source is credited where it is in the public domain, never claimed. `main` is
protected: pull requests and the gate checks are required before merge.
