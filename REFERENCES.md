---
updated: "2026-07-04"
---

# Grimm House: Reference

## Line of Work

Staging the complete corpus of the Brothers Grimm as **systemic systems**: modeling the mechanical, moral, and transformative contracts, covenants, and trials of folklore and mythology. The house represents these works as strict sequences of causality, where oaths, taboos, and metamorphoses operate under precise, system-wide rules.

The scope of this house covers five canonical collections:

- **Kinder- und Hausmärchen (KHM)**: 255 plays (the 210 tales of the 1857 edition plus 45 early and withdrawn tales), modeling the domestic and moral trials of the folk soul.
- **Deutsche Sagen (DS)**: 585 plays (the 2nd edition of 1865), modeling the landscape-bound, historical, and spirit-haunted legends of local memory.
- **Deutsche Mythologie (DM)**: The cosmological rule-set and structural laws (gods, giants, elves, fate, curse, blessing) that govern the mechanics of the tales.
- **Irische Elfenmärchen (IE)**: The brothers' 1826 translation and adaptation of Irish fairy legends, bridging local spirits and moral ambiguity.
- **Reinhart Fuchs (RF)**: The medieval trickster cycle of Reynard the Fox, modeling calculated betrayal and the inversion of KHM moral laws.

### Staging Status

The current status of the Grimm productions within this house:

- `[x]` **Kinder- und Hausmärchen (KHM)** — Staged (255 plays, `khm_001` to `khm_210` with variations)
- `[x]` **Deutsche Sagen (DS)** — Staged (585 plays, `ds_001` to `ds_585` aligned to 2nd edition E2E)
- `[x]` **Deutsche Mythologie (DM)** — Staged (38 plays, `dm_001` to `dm_038` representing the full cosmological map)
- `[ ]` **Irische Elfenmärchen (IE)** — Planned (Strategy and staging to be resolved)
- `[ ]` **Reinhart Fuchs (RF)** — Planned (Strategy and staging to be resolved)

## Origin

Jacob and Wilhelm Grimm's collected works, representing their research into comparative folklore, historical linguistics, and medieval literature.

| Source             | Key Work / Event                      | Scope                                           |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| **Brothers Grimm** | _Kinder- und Hausmärchen_ (1812–1857) | The canonical fairy tales (KHM).                |
| **Brothers Grimm** | _Deutsche Sagen_ (1816–1865)          | The local and historical legends (DS).          |
| **Jacob Grimm**    | _Deutsche Mythologie_ (1835–1878)     | The cosmological and folk-belief rule-set (DM). |
| **Brothers Grimm** | _Irische Elfenmärchen_ (1826)         | The translation of Croker's Irish legends (IE). |
| **Jacob Grimm**    | _Reinhart Fuchs_ (1834)               | The medieval animal epic (RF).                  |

## Restrictions

What the house refuses to model, and to whom it delegates.

- **Moralizing sugar-coating**: The house refuses to sanitize the tales (omitting none of the original grim details, such as physical mutilation, severe trials, or burning iron slippers). They are modeled as mechanical and logical consequences of broken taboos, fulfilled pacts, or resolved trials.
- **Cross-play context pollution**: Strict play isolation. Individual plays (under `plays/`) must never link out of their local directory, preventing narratives from leaking into one another.
- **Decorative elaboration**: Settings, objects, and characters are strictly reduced to the essential load-bearing vectors of the play's systemic architecture (e.g., places of confinement, tools of labor, agents of change), omitting secondary ornament.
- **Monolingual uniformity (Language Policy)**: The house implements a strict bilingual split:
  - **English for Architecture & Schema**: To maintain compatibility with the global `khai` framework specifications and validation tooling, the house identity ([README.md](README.md)), reference documents ([REFERENCES.md](REFERENCES.md)), frontmatter keys, and H2 structural headings are written in English.
  - **German for Prose & Staging**: All character descriptions (`Projection`, `Action`, `Shadow`), element behaviors, and scene notes are written in the authentic, poetic **Grimm-Deutsch** style (incorporating period-appropriate syntax, archaic vocabulary, paratactic chains of events, and natural German Markdown labels).

## Encoding

Source to constraint, per file.

- **the house ([README.md](README.md))**: The Estate identity that answers for the entire run.
- **the productions (`plays/`)**: The individual staging packages, each containing the play definition, personas, positions, pieces, places, processes, and plots.
- **the gates (`tests/`, `khai-guard.config.json`)**: The conformance and governance checks ensuring that all plays comply with the canon and maintain strict local link isolation.
