---
"@chbrain/khai-plays-grimm": patch
---

Harden the CI/audit workflows against GitHub Actions expression injection. Untrusted
contexts (PR branch names via `github.head_ref` / `steps.*.outputs.*_ref`, the PR
number, and the diff-derived audit ids) are no longer interpolated directly into
`run:` shell or `github-script` bodies; they pass through `env:` and are referenced
as `"$VAR"` / `process.env.*`. Clears the code-scanning expression-injection
findings; no behavioral change to the gates. Mirrors the hardened khai-stage
blueprint, backported from the Kleist and Buechner houses.
