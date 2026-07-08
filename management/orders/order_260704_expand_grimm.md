---
id: order_260704_expand_grimm
type: order
class: strategy
mnemonic: "DOIT"
chapters: [Direction, Orders, Implementation, Targets]
subtitle: "expand the house to the full Brothers Grimm corpus"
status: active
version: 0.1.0
---

# Management Order: Expand the House to the Full Brothers Grimm Corpus

## Direction

With KHM (210 tales) and DS (585 legends) declared complete, the house has
staged the two canonical collections but has not yet reached the full edge of the
Brothers Grimm. Three further bodies of work signed by the same authors belong
in this house by name and by right:

- **Deutsche Mythologie** (Jacob Grimm, 1835): the cosmological source material
  that underlies both KHM and DS. Not a story collection but a systematic map of
  Germanic pre-Christian belief: gods, spirits, fate-women, sacred time, curse
  and blessing as mechanical rules. The house stages it as the rule-set that the
  tales run on.
- **Irische Elfenmärchen** (Jacob and Wilhelm Grimm, 1826): the brothers'
  German translation of Crofton Croker's Irish fairy legends. A direct editorial
  act by the Grimms themselves. Structurally mirrors DS: landscape-bound,
  spirit-haunted, morally ambiguous.
- **Reinhart Fuchs** (Jacob Grimm, 1834): the brothers' edition of the medieval
  Reynard the Fox cycle. Trickster logic as inversion of KHM moral mechanics:
  no taboo broken in ignorance, no trial endured in silence. Every move is
  calculated betrayal.

The house is called khai-plays-grimm. It stages the Brothers Grimm. These three
works are the Brothers Grimm. The scope extends to cover them.

## Orders

1. The Choregos (Nicias and Pericles) shall debate the staging approach for each
   of the three new collections and resolve a production strategy for each before
   any play is authored.
2. The Playwright shall author a PRODUCTION document for each new collection,
   following the pattern of the existing `PRODUCTION.md`, covering source,
   translation status, staging strategy, and the run manifest.
3. The Theatre Manager (hunt) shall update `REFERENCES.md` to register all three
   new collections under the house's Line of Work.
4. The Roadie shall confirm public domain status and identify the best available
   English translation (or German original where no translation exists) for each
   collection before the Playwright begins.

## Implementation

- New production manifests land as `PRODUCTION_mythologie.md`,
  `PRODUCTION_elfenmaerchen.md`, and `PRODUCTION_reinhart_fuchs.md` at the
  project root.
- Play directories follow the existing naming convention: `dm_NNN_` for Deutsche
  Mythologie, `ie_NNN_` for Irische Elfenmärchen, `rf_NNN_` for Reinhart Fuchs.
- The Choregos debate for each collection is staged as a discussion Play under
  `management/discussions/` before the first play in that collection is opened.
- No play is opened in any new collection until its PRODUCTION document and
  Choregos debate are complete and the Roadie has confirmed sourcing.

## Targets

- [x] Choregos debate staged for Deutsche Mythologie
- [x] Choregos debate staged for Irische Elfenmärchen
- [x] Choregos debate staged for Reinhart Fuchs
- [x] PRODUCTION_mythologie.md authored and reviewed
- [x] PRODUCTION_elfenmaerchen.md authored and reviewed
- [x] PRODUCTION_reinhart_fuchs.md authored and reviewed
- [x] REFERENCES.md updated to register all three collections
- [x] Roadie confirms sourcing for all three collections
