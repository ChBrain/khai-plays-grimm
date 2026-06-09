---
khai: order
title: "Enforce Playhouse Registry and Blurb Gates"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: Choregos (Nicias and Pericles)
  version: v1.0.0
  date: "2026-06-07"
---

# Order: Enforce Playhouse Registry and Blurb Gates

## Direction

Every playhouse must declare a `registry.json` mapping its plays and enforce single-sentence blurb constraints to decouple play card ingestion from legacy markdown parsing. The Theatre Manager (hunt) shall introduce the local registry and align the playbook `## Arc` sections to contain only the short, single-sentence German blurb.

## Orders

1. Update `package.json` to bump the version to `0.26.0` and define export mapping for `registry.json`.
2. Add `registry.json` at the root of the playhouse directory.
3. Update playbook `## Arc` sections to contain only the short, single-sentence German blurb.
4. Run the updated conformance suite to verify zero findings.

## Implementation

- Modify `package.json` with the new version and exports mapping.
- Create `registry.json` mapping all plays in the house.
- Update `## Arc` sections in all md files in `plays/`.
- Execute tests using `npm test`.

## Targets

- [x] Bump minor version and add exports mapping in `package.json`
- [x] Create `registry.json` at the root
- [x] Update playbook `## Arc` sections in `plays/`
- [x] Verify local tests pass (`npm test`)
