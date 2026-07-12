---
id: order_260712_depth_backfill
type: order
class: quality
mnemonic: "DOIT"
chapters: [Direction, Orders, Implementation, Targets]
subtitle: "backfill the placeholder tier and settle the fidelity findings of the content quality review"
status: active
version: 0.1.0
---

# Management Order: Backfill the Placeholder Tier and Settle the Fidelity Findings

## Direction

The content quality review of 2026-07-12 read the whole run: the conformance suite is green, every play holds its Estate, and the authored spines (Arc, Stakes, Triggers, plot Actions) are faithful to their sources across every corpus. But the review found the house split into two tiers. The KHM corpus and the newest small corpora (DH, FG, GS, UR) are genuine productions; in 675 of 948 plays the content below the play file is shipped template defaults:

- 2,103 of 3,388 plot files carry the literal Tension placeholder "Spannung des Plots."
- 2,139 plot files carry the literal Stage placeholder "Bühne für ..."
- 1,494 of 2,753 persona files carry the literal body "Beschreibung der Gestalt von ..."

Affected: all of DS except the prototype ds_001, and all of DM, AE, AH, IE, RF, SR, HA. The gates cannot see this: the conformance test checks structure and links, not prose. By the house's own judgement criteria (the Tension in each plot genuinely blocks its Action; personas carry real characterization) these plays are staged but not yet performed.

The review also surfaced specific fidelity and language findings, catalogued under Targets below. The most urgent finding, the staged religious identity in the DS 353 and DS 354 personas that contradicted their own REFERENCES restrictions, rides its own play PR and is not part of this order's backlog.

## Orders

1. The Choregos (Nicias and Pericles) shall debate the backfill strategy: whether to sweep by section (all Tensions first) or by corpus (DM first, where the source is richest and the gap widest), and at what pace the play lanes can absorb it.
2. The Playwright shall backfill in the resolved order. The cheapest highest-yield pass is Tension: one authored sentence per plot naming what genuinely blocks its Action, with ds_001 as the in-house model. The second pass is the persona bodies (Projection and Shadow above all), and the third is Stage as a real cast list. The gs_001 and ur_001 builds are the standard to backfill toward.
3. The Playwright shall settle the fidelity findings per play, each as its own small play-lane change.
4. The Theatre Manager (hunt) shall reconcile the production trackers with the staged plays (every tracker except Ferdinand Grimm shows zero checked boxes), extend the REFERENCES.md convention to the 16 earliest KHM plays that predate it, and sweep the 17 em/en dashes out of the 11 REFERENCES.md files that carry them.
5. The Roadie shall verify the DS numbering question against the 1816/1818 source before anyone edits it: the ds_353 and ds_354 REFERENCES cite DS 352 and DS 353 while the folders carry 353 and 354; one of the two schemes is off by one and the source decides which.

## Implementation

- Backfill changes touch `plays/**` only and ride `play/<topic>` lanes with `patch` changesets: fixes to existing shipped content at the same play count.
- Tracker and REFERENCES-convention work under the project root and `management/**` rides `governance/<topic>` lanes with empty changesets where nothing shipped changes.
- The Tension backfill is the only pass that may batch several plays per PR, corpus by corpus; fidelity fixes stay one play per PR so review stays sharp.
- No new plays are opened under this order; it deepens what is staged.

## Targets

### Backfill (the placeholder tier)

- [ ] Choregos debate resolved: backfill order and pace
- [ ] DS: Tension backfilled (1,855 plots), then personas, then Stage
- [ ] DM: full deepening (all 38 plays; elements are empty where the source is richest, persona_wuotan.md above all)
- [ ] AE, AH, IE, RF, SR, HA: Tension and persona backfill (stub tier)
- [ ] DH, FG: Stage backfill (half tier; elements already authored)
- [ ] GS, UR: Stage backfill (mature tier; the last placeholder they carry)

### Fidelity findings (one play-lane PR each)

- [ ] ie_003: title and declared say "Legend of Knockshegowna" but the content is Fingerhütchen (Croker's Knockgrafton); relabel, and restore the tale's mechanism (the added day to the fairies' song, the second hunchback's punishment)
- [ ] rf_010: restore the defining ending of Grimm's Reinhart Fuchs (the fox poisons the lion-king), now flattened to generic mockery
- [ ] ah_001: name what Grimild avenges (Sivard's murder); the Rache has no object on stage
- [ ] ds_518: relocate the hat and apple-shot plots to Altdorf (the Hohle Gasse belongs only to the ambush) and stage the storm crossing named in the Arc
- [ ] khm_015: restore the duck-ferry return beat; fix the Holzhackerhaus slip in plan_siblings-cunning.md (Gretel is captive in the witch's house); align the lowercase English Stage slugs and the Mutter/Stiefmutter slip in pitch_dread.md
- [ ] ds_245: reconcile the survivor count with the source (canonically two stragglers, not three)
- [ ] sr_004: right the inverted eagle image and restore the maidens' falsely reassuring dream-reading
- [ ] khm_047: consider a persona for the murdered boy and the birth mother (the tale's emotional center is folded into persona_siblings.md)

### Language and typo sweep

- [ ] "Erzänlung" corrected to "Erzählung" in 17 piece files (AH 5, IE 2, RF 10)
- [ ] dm_026: "auf dem Pyre" corrected to "auf dem Scheiterhaufen"
- [ ] ur_001: "Runic-Tradition" corrected to "Runen-Tradition"
- [ ] khm_085c: pitch_longing.md title "Tenderness" reconciled with declared "die Sehnsucht"

### Governance

- [ ] Production trackers reconciled with the staged plays (all corpora)
- [ ] REFERENCES.md authored for the 16 earliest KHM plays (khm_001 through khm_059 range)
- [ ] Em/en dashes swept from the 11 REFERENCES.md files that carry them
- [ ] DS 353/354 numbering verified against the source and reconciled
