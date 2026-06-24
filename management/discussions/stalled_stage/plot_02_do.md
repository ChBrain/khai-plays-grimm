---
khai: plot
title: "Do"
declared: "Do"
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-24"
---

# Plot: Do

## Taxonomy

[play_stalled_stage](play_stalled_stage.md)

## Owner

- Project: khai-plays-grimm

## Cue

The cast debates the boundary of the repository and the necessity of linking the local package monorepo.

## Action

Nicias: We must consult the rules before we act. The house is locked within `khai-plays-grimm`. To reach out into `C:\Code\khai` is a crossing of boundaries. If the CI runs under a separate environment, a local link is a transient illusion. It will pass locally but fail where the Choregos review.

Pericles: The CI has its own secrets and permissions; it is already wired to compile or fetch with correct credentials because it represents the chain's execution. It is the local developer sandbox that lacks the token. A local link does not change the repository's code or its `package.json` mappings; it only updates the local `node_modules` structure. It is a local stagecraft adjustment, not a governance breach.

Hunt: Pericles is correct. The repository's declared dependencies in `package.json` and the lockfile remain untouched. The test suite needs only to resolve the types locally to verify conformance. If the Roadie links `@chbrain/khai-arch` and `@chbrain/khai-tests` locally, the code remains clean, and no forbidden modifications leak into git.

Taylor: Then we link. I will target the directories in the local sibling `khai` repository. We can link `@chbrain/khai-arch` and `@chbrain/khai-tests` to point directly to `C:\Code\khai\packages\khai-arch` and `C:\Code\khai\packages\khai-tests`. That avoids registry fetching entirely.

## Stage

- [Hunt](../../persona_hunt.md): systematic, dryly academic.
- [Nicias](../../persona_nicias.md): measured, cautions delay.
- [Pericles](../../persona_pericles.md): unhurried, seeks structural path.
- [Taylor](../../persona_edgar_taylor.md): adaptive, proposes linking.

## Tension

Preserving the purity of the local repository boundaries versus the practical need to compile and test the code.
