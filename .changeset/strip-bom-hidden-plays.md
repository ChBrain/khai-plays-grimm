---
"@chbrain/khai-plays-grimm": patch
---

strip a leading UTF-8 BOM from 35 instance files across DS 001-006. The BOM pushed the frontmatter off byte 0, so the conformance validator (which detects instances by a leading `---`) silently skipped every one -- these plays shipped entirely unvalidated. With the BOM gone they are seen and pass clean.
