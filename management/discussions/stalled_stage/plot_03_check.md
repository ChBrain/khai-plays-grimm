---
khai: plot
title: "Check"
declared: "Check"
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-24"
---

# Plot: Check

## Taxonomy

[play_stalled_stage](play_stalled_stage.md)

## Owner

- Project: khai-plays-grimm

## Cue

The Roadie proposes a local resolution to verify the conformance suite without extending the repository's permanent dependencies.

## Action

Taylor: If I execute the linkage, `npm link C:\Code\khai\packages\khai-arch` and `npm link C:\Code\khai\packages\khai-tests` will hook our node_modules to the monorepo. But let us verify if `npm link` behaves correctly. If npm tries to query the remote registry during the link or rebuilds other parts, it might fail. If so, a direct directory copy or a custom path resolution in vitest might be needed.

Hunt: A direct file copy into node_modules is simpler and less prone to npm registry queries. We can copy `C:\Code\khai\packages\khai-arch\` and `C:\Code\khai\packages\khai-tests\` directly into `node_modules/@chbrain/khai-arch` and `node_modules/@chbrain/khai-tests` in our workspace. This overwrites the stale installed packages without changing any git files or running complex registry-aware npm commands.

Pericles: A precise copy preserves the exact state. It is deterministic. Let us try to link first, and if npm fails due to lack of registry access, we will perform the copy.

Nicias: The copy is safer. It leaves no active symlinks that could leak paths or break other tools. It is an act of clean isolation. We will authorize the copy if the link fails.

## Stage

- [Hunt](../../persona_hunt.md): systematic, dryly academic.
- [Nicias](../../persona_nicias.md): measured, cautions delay.
- [Pericles](../../persona_pericles.md): unhurried, seeks structural path.
- [Taylor](../../persona_edgar_taylor.md): adaptive, proposes linking.

## Tension

Symlinks versus file copying as a way to safely resolve package discrepancies locally.
