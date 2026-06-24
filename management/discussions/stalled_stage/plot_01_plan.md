---
khai: plot
title: "Plan"
declared: "Plan"
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-24"
---

# Plot: Plan

## Taxonomy

[play_stalled_stage](play_stalled_stage.md)

## Owner

- Project: khai-plays-grimm

## Cue

The Theatre Manager (Hunt) halts execution as `npm test` fails with unrecognized `pitch` type and package installations fail with 401.

## Action

Hunt: The local test run has halted. The conformance engine `@chbrain/khai-tests` and the architecture definition `@chbrain/khai-arch` are locked at version `0.1.13` in the local node_modules, while the project repository has updated its plays to declare the `pitch` type. This type is absent from the canon of version `0.1.13`. Any attempt to fetch the newer packages from the registry results in an authentication failure, as the environment lacks a valid GitHub token.

Nicias: A stop to execute is the proper recourse. We must not force our way past a lock that protects the integrity of the chain. If the keys are missing, the gate remains closed. To bypass it by fabricating credentials or modifying other repositories would be an act of hubris.

Pericles: Yet the stage is ready, and the play count is accurate. We are not rewriting the plays; we are adjusting the scaffold so they may be seen. The sibling repository `khai` carries the newer packages. The question is how to make them visible to this house without crossing the boundary of the repository.

Taylor: My instructions are to keep the stage current and clean, but I cannot download what is barred from us. If the packages already exist in the sibling monorepo on this same machine, we could link them locally. That would satisfy the test run without committing credentials to the history.

## Stage

- [Hunt](../../persona_hunt.md): systematic, dryly academic.
- [Nicias](../../persona_nicias.md): measured, cautions delay.
- [Pericles](../../persona_pericles.md): unhurried, seeks structural path.
- [Taylor](../../persona_edgar_taylor.md): adaptive, proposes linking.

## Tension

The need to run tests locally versus the inability to authenticate with the package registry.
