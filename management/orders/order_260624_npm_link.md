---
id: order_260624_npm_link
type: order
class: meta
mnemonic: "LINK"
chapters: [Direction, Orders, Implementation, Targets]
subtitle: "link local packages from sibling monorepo to resolve canon type mismatch"
status: active
version: 0.1.0
---

# Management Order: Link Local Packages from Sibling Monorepo

## Direction

Staging the new pitch elements in the playhouse requires a version of the conformance suite and canon that recognizes the `pitch` type. Since the npm registry cannot be accessed due to environment-level authentication constraints, we delegate the copying of `@chbrain/khai-arch` and `@chbrain/khai-tests` from the local sibling `khai` repository directly into the playhouse's `node_modules` directory.

## Orders

1. The Roadie (Taylor) shall copy the sibling package folders `C:\Code\khai\packages\khai-arch` and `C:\Code\khai\packages\khai-tests` into the project's `node_modules/@chbrain/` folder.
2. The Theatre Manager (Hunt) shall run `npm test` to verify conformance check passes with zero findings.

## Implementation

- Copy local directories directly without modifying `package.json` or `package-lock.json`.
- Execute tests using `npm test`.

## Targets

- [x] Copy `khai-arch` and `khai-tests` packages from `C:\Code\khai\packages\`
- [x] Run `npm test` and verify zero findings
