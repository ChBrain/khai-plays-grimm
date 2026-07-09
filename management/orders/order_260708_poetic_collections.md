---
id: order_260708_poetic_collections
type: order
class: strategy
mnemonic: "DOIT"
chapters: [Direction, Orders, Implementation, Targets]
subtitle: "stage the remaining translated and edited poetic collections"
status: active
version: 0.1.0
---

# Management Order: Stage the Remaining Translated and Edited Poetic Collections

## Direction

With KHM, DS, DM, IE, and RF declared complete, the house has staged the canonical prose collections and trickster epic. To reach the complete edge of the Brothers Grimm's poetic and translation work, we must stage the four remaining collections they translated or edited:

- **Altdänische Heldenlieder, Balladen und Märchen** (Wilhelm Grimm, 1811): Wilhelm's translation and edition of old Danish heroic songs, ballads, and folk stories. Staged under the prefix `ah_`.
- **Lieder der alten Edda** (Jacob and Wilhelm Grimm, 1815): Their critical edition and translation of the Poetic Edda. Staged under the prefix `ae_`.
- **Der arme Heinrich** (Jacob and Wilhelm Grimm, 1815): Their edition of Hartmann von Aue's Middle High German poem. Staged under the prefix `ha_`.
- **Silva de romances viejos** (Jacob Grimm, 1815): Jacob's collection and edition of old Spanish romances. Staged under the prefix `sr_`.

## Orders

1. The Choregos (Nicias and Pericles) shall debate the staging approach for each of the four poetic collections and resolve a production strategy for each.
2. The Playwright shall author a PRODUCTION document for each collection outlining source, translation status, staging strategy, and the run manifest.
3. The Theatre Manager (hunt) shall update `REFERENCES.md` to register all four collections under the house's Line of Work.
4. The Roadie shall confirm public domain status and identify the best available English translation (or German original where no translation exists) for each collection.

## Implementation

- New production manifests land as `PRODUCTION_altdaenische_heldenlieder.md`, `PRODUCTION_alte_edda.md`, `PRODUCTION_arme_heinrich.md`, and `PRODUCTION_romances_viejos.md` at the project root.
- Play directories follow the prefix conventions: `ah_NNN_` for Altdänische Heldenlieder, `ae_NNN_` for Lieder der alten Edda, `ha_NNN_` for Der arme Heinrich, and `sr_NNN_` for Silva de romances viejos.
- The Choregos debate for each collection is staged as a discussion Play under `management/discussions/` before the first play in that collection is opened.

## Targets

- [x] Choregos debate staged for Altdänische Heldenlieder (ah)
- [x] Choregos debate staged for Lieder der alten Edda (ae)
- [x] Choregos debate staged for Der arme Heinrich (ha)
- [x] Choregos debate staged for Silva de romances viejos (sr)
- [x] PRODUCTION_altdaenische_heldenlieder.md authored and reviewed
- [x] PRODUCTION_alte_edda.md authored and reviewed
- [x] PRODUCTION_arme_heinrich.md authored and reviewed
- [x] PRODUCTION_romances_viejos.md authored and reviewed
- [x] REFERENCES.md updated to register all four collections
- [x] Roadie confirms sourcing for all four collections
