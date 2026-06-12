# @chbrain/khai-plays-grimm

## 0.77.0

### Minor Changes

- ad0f56e: play: add The Brave Little Tailor (KHM 020) in Grimm-Deutsch
- a234eb5: play: stage KHM 027 (Die Bremer Stadtmusikanten) in Grimm-Deutsch
- d9554a8: play: stage KHM 050 (Briar Rose) in Grimm-Deutsch and update registry
- 0efc172: play: add Brother and Sister (KHM 011) in Grimm-Deutsch
- 14d2b5e: play: add Cinderella (KHM 021) in Grimm-Deutsch
- 3ddff05: play: stage KHM 034 (Die kluge Elsa) in Grimm-Deutsch and update registry
- b6c8367: play: stage KHM 032 (Der gescheite Hans) in Grimm-Deutsch and update registry
- 53f3aaa: play: stage KHM 045 (Daumerlings Wanderschaft) in Grimm-Deutsch and update registry
- cb5a13d: play: stage KHM 029 (Der Teufel mit den drei goldenen Haaren) in Grimm-Deutsch
- 0a19b61: play: add The Fisherman and His Wife (KHM 019) in Grimm-Deutsch
- 5827c39: play: stage KHM 046 (Fitchers Vogel) in Grimm-Deutsch and update registry
- 7630384: play: add Frau Holle (KHM 024) in Grimm-Deutsch
- 7df0969: play: stage KHM 043 (Frau Trude) in Grimm-Deutsch and update registry
- a62fcf9: play: stage KHM 051 (Foundling-Bird) in Grimm-Deutsch and update registry
- aa526c7: play: stage KHM 044 (Gevatter Tod) in Grimm-Deutsch and update registry
- 9d631a4: play: stage KHM 031 (Das Mädchen ohne Hände) in Grimm-Deutsch and update registry
- 7e7b294: play: add Hansel and Gretel (KHM 015) in Grimm-Deutsch
- 6df856e: play: stage KHM 042 (Der Herr Gevatter) in Grimm-Deutsch and update registry
- 419f442: play: stage KHM 041 (Herr Korbes) in Grimm-Deutsch and update registry
- c9a5e24: play: stage KHM 052 (King Thrushbeard) in Grimm-Deutsch and update registry
- 7b4bdba: play: stage KHM 026 (Rotkäppchen) in Grimm-Deutsch
- f054fd3: play: stage KHM 030 (Läuschen und Flöhchen) in Grimm-Deutsch
- 8e7a513: play: add The Mouse, the Bird, and the Sausage (KHM 023) in Grimm-Deutsch
- d557d11: play: stage KHM 048 (Old Sultan) in Grimm-Deutsch and update registry
- f08c766: play: stage KHM 130 (Einäuglein, Zweiäuglein und Dreiäuglein) in Grimm-Deutsch
- 706c95e: play: add Rapunzel (KHM 012) in Grimm-Deutsch
- e0b41b1: play: add The Riddle (KHM 022) in Grimm-Deutsch
- 15b9777: play: stage KHM 040 (Der Räuberbräutigam) in Grimm-Deutsch and update registry
- 16f35e7: play: add The Seven Ravens (KHM 025) in Grimm-Deutsch
- 445f0d4: play: stage KHM 028 (Der singende Knochen) in Grimm-Deutsch
- f06725e: play: add The Straw, the Coal, and the Bean (KHM 018) in Grimm-Deutsch
- 55bc7b4: play: stage KHM 035 (Der Schneider im Himmel) in Grimm-Deutsch and update registry
- cbb0b09: play: stage KHM 039 (Die Wichtelmänner) in Grimm-Deutsch and update registry
- 582635a: play: stage KHM 047 (The Juniper Tree) in Grimm-Deutsch and update registry
- da83514: play: stage KHM 033 (Die drei Sprachen) in Grimm-Deutsch and update registry
- 3d7c4a6: play: add The Three Little Men in the Woods (KHM 013) in Grimm-Deutsch
- 177ae42: play: add The Three Snake-Leaves (KHM 016) in Grimm-Deutsch
- b97c2ef: play: add The Three Spinners (KHM 014) in Grimm-Deutsch
- c7d6cb3: play: stage KHM 037 (Daumesdick) in Grimm-Deutsch and update registry
- acad0d3: play: stage KHM 038 (Die Hochzeit der Frau Füchsin) in Grimm-Deutsch and update registry
- 969ee4d: play: add The White Snake (KHM 017) in Grimm-Deutsch
- 16b0f4b: play: stage KHM 036 (Tischchen deck dich, Goldesel und Knüppel aus dem Sack) in Grimm-Deutsch and update registry
- 921e2af: play: add The Wonderful Musician (KHM 008) in Grimm-Deutsch

### Patch Changes

- e714c2d: Add a management analysis (`management/plan-candidacy.md`) reading all 63
  productions for in-world plan candidacy: 34 STRONG (16 competing pairs), 14
  POSSIBLE, 7 THIN, 8 NONE, with the schemer, the scheme, and the likely target
  verdicts per tale, and a recommended authoring order. No play content changes.
- 1a6c3dd: Update the plan-candidacy analysis to the corrected verdict vocabulary: `[x]`
  done, `[F]` failed, `[W]` waived, `[-]` struck, retiring the incoherent `[?]`
  (KHM 006 and 048 now read `[W]`).
- 1029148: Rename the CI conformance job from `test` to `khai-tests`, the tool it runs,
  matching the `khai-guard` job's naming and the khai-stage blueprint. Branch
  protection must require the `khai-tests` check instead of `test` once this
  lands.
- 83d4b1a: Conform the house to the updated canon (khai-arch 0.1.14, khai-tests 0.1.17,
  khai-review 0.1.3): cast every persona into the position it fills via a
  native-German `[Prose](position_x.md)` link in its Taxonomy, so no needed
  position is left without a persona; rename `position_faithful-servant.md` to
  `position_faithful_servant.md` so the canon's link matcher resolves it; and
  re-declare the few stray play files under CC-BY-NC-SA-4.0. Conformance suite
  green.
- f40e12a: Re-declare every play element under CC-BY-NC-SA-4.0. The house promises
  ShareAlike ("Content is CC-BY-NC-SA", README/CLAUDE.md and the LICENSE file),
  but the elements carried `license: CC-BY-NC-4.0` inherited from the khai-arch
  templates. Maintainer ruling: content is -SA. No content changes beyond the
  licence field.
- dfc2927: Harden the CI/audit workflows against GitHub Actions expression injection. Untrusted
  contexts (PR branch names via `github.head_ref` / `steps.*.outputs.*_ref`, the PR
  number, and the diff-derived audit ids) are no longer interpolated directly into
  `run:` shell or `github-script` bodies; they pass through `env:` and are referenced
  as `"$VAR"` / `process.env.*`. Clears the code-scanning expression-injection
  findings; no behavioral change to the gates. Mirrors the hardened khai-stage
  blueprint, backported from the Kleist and Buechner houses.
- ecd6f9e: Correct the in-world plans to read as forward intent, not completed records. A
  plan is a blueprint its Owner strives toward, so every plan is now `status:
active` and its Targets are the Owner's open goals (`- [ ]`), the aims it sets
  out to reach. Its Direction and Implementation state intent and the bets the
  scheme rides on, with every reveal of how it turns out (the foil, the reversal,
  success or failure) removed: the plan does not know its own ending. The drama of
  how each scheme goes lives in the plots, and the retrospective reading stays in
  `management/plan-candidacy.md`.
- 079f6e3: play: lift Cinderella (KHM 021) with competing plans (grave-covenant vs ash-usurpation)
- 079f6e3: Lift the house to the double language. Bump the canon dependencies to the
  versions that enforce a `declared` name on non-English instances, and give every
  play element its German stage name as `declared` and as its H1 alongside the
  English `title` the tooling keys on, sourcing the names each play bills in its
  Company and Triggers. The management house is re-scoped to English
  (`language: english`), since the apparatus is not in-world staging. The double
  language is the plays'.
- 079f6e3: Stage in-world plans across every STRONG and POSSIBLE production (48 of 63
  plays, 66 plan files). 18 competing-scheme pairs stage two opposing plans; 30
  single-scheme tales stage one. Each plan is German, `status: closed`, its Targets
  resolved with the canon verdicts (`[x]`/`[F]`/`[?]`), wired into the play's
  Company as a `**Plans**` block, with a per-play `REFERENCES.md` recording the
  modelling decisions. The 15 THIN/NONE tales carry no plan by design.
- c18f2a9: Update the khai canon dependencies to the latest published versions: khai-arch
  0.1.13, khai-tests 0.1.13 (the corrected verdict vocabulary `[x]`/`[F]`/`[W]`/`[-]`
  enforced on every plan), khai-guard 0.1.9, khai-review 0.1.2. The house conforms
  against the new validator unchanged.
- 9d5edeb: Re-verdict the two plan targets that used the retired `[?]` to `[W]` waived
  (KHM 006 faithful Johannes, KHM 048 old Sultan): both are outcomes overtaken or
  settled rather than left unjudged, which `[W]` waived names and `[?]` did not.

## 0.11.0

### Minor Changes

- 3a9a6f5: play: add The Pack of Ragamuffins (KHM 010) in Grimm-Deutsch

## 0.10.0

### Minor Changes

- 5d19530: play: add The Twelve Brothers (KHM 009) in Grimm-Deutsch

## 0.9.0

### Minor Changes

- 6890dc1: play: add The Wonderful Musician (KHM 008) in Grimm-Deutsch

## 0.8.0

### Minor Changes

- 4087ff7: play: add The Good Bargain (KHM 007) in Grimm-Deutsch

## 0.7.0

### Minor Changes

- c2508cb: play: add The Faithful Johannes (KHM 006) in Grimm-Deutsch

## 0.6.0

### Minor Changes

- de47e46: play: add The Wolf and the Seven Young Kids (KHM 005) in Grimm-Deutsch

## 0.5.0

### Minor Changes

- 1ebfb47: play: add The Youth Who Went Forth to Learn What Fear Was (KHM 004) in Grimm-Deutsch

## 0.4.0

### Minor Changes

- 18b3e11: play: add Our Lady's Child (KHM 003) in Grimm-Deutsch

## 0.3.0

### Minor Changes

- b095dcf: play: add Cat and Mouse in Partnership (KHM 002) in Grimm-Deutsch

## 0.2.0

### Minor Changes

- 5002356: play: add The Frog King (KHM 001) in Grimm-Deutsch

## 0.1.0

### Minor Changes

- 22c304a: play: add The Six Swans (KHM 049) in Grimm-Deutsch

### Patch Changes

- 88a7709: governance: add changeset-gate validation to CI workflow
