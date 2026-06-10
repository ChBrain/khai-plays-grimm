---
"@chbrain/khai-plays-grimm": patch
---

Rename the CI conformance job from `test` to `khai-tests`, the tool it runs,
matching the `khai-guard` job's naming and the khai-stage blueprint. Branch
protection must require the `khai-tests` check instead of `test` once this
lands.
