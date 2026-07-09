---
---

Governance: adopt the aligned Version-Packages flow. Upgrade the `changeset-check`
gate (exempt `changeset-release/*`, pass `--branch`), bump `@chbrain/khai-guard` to
`^0.1.16`, and flip the CLAUDE.md doctrine so a play add carries a `minor` changeset
(steered through the Version Packages PR; the reconcile keeps `minor = count` and the
patch at 0). Ships no package content: an empty changeset.
