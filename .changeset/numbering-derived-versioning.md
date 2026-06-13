---
"@chbrain/khai-plays-grimm": patch
---

adopt derived numbering: bump `@chbrain/khai-tests` to `^0.1.19` so the registry
build derives the version's minor from the play count (the build is the single
writer of the minor) and the conformance guard fails any `minor ≠ play count`
drift. Heals the count/version mismatch (76 plays were shipped as `0.77.0`) back
to `0.76.0`. Closes #132.
