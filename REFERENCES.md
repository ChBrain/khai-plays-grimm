---
updated: "2026-06-06"
---

# Grimm House: Reference

## Line of Work

Staging the complete collection of Children's and Household Tales (Kinder- und Hausmärchen) by the Brothers Grimm (KHM 1 - KHM 210) as **systemic systems**: modeling the mechanical, moral, and transformative contracts, covenants, and trials of folklore. The house does not stage these works as simple moral fables or sanitised fairy tales; it represents them as strict sequences of causality, where oaths, taboos, and physical metamorphoses operate under precise, system-wide rules.

The scope of this house covers the entire canonical collection:

- **Canonical Tales**: KHM 001 to KHM 210, encompassing classic tales of transformation, tests of character, and pacts with supernatural entities.
- **Pilot & Completed Staged Productions**:
  - _Der Froschkönig oder der eiserne Heinrich_ (KHM 001) — modeling the weight of the given promise and the shattering of curses through emotional extremity.
  - _Die sechs Schwäne_ (KHM 049) — modeling the heavy toll of sworn silence and the slow, stitch-by-stitch labor of redemption.
- **Experimental & Fragmentary Motifs**: Staging recurring motifs (such as the three tests, animal guides, magical instruments, and the inversion of fates) across the entire collection.

### Staging Status

The current status of the Grimm productions within this house:

- `[x]` **khm_001_the_frog_king** (Classic Tale) — Staged
- `[x]` **khm_049_the_six_swans** (Classic Tale) — Staged
- `[ ]` **khm_002_cat_and_mouse** (Classic Tale) — Planned
- `[ ]` **Remaining Tales** (KHM 003–210) — Planned

## Origin

Jacob and Wilhelm Grimm's _Kinder- und Hausmärchen_ (1812–1857), specifically the definitive 7th edition of 1857, applying archaic poetry, folklore motifs, and structural oral storytelling patterns to historical European folk tales.

| Source                      | Key Work / Event                                                                   | Scope                                                          |
| --------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Brothers Grimm**          | _Kinder- und Hausmärchen_ (1812–1857)                                              | The canonical 210 fairy tales.                                 |
| **Oral & Literary Sources** | European folklore, oral storytellers (e.g., Dorothea Viehmann, Philipp Otto Runge) | The mythic, structural, and cultural motifs of the collection. |

## Restrictions

What the house refuses to model, and to whom it delegates.

- **Moralizing sugar-coating**: The house refuses to sanitize the tales (omitting none of the original grim details, such as physical mutilation, severe trials, or burning iron slippers). They are modeled as mechanical and logical consequences of broken taboos, fulfilled pacts, or resolved trials.
- **Cross-play context pollution**: Strict play isolation. Individual plays (under _plays/khm_XXX/\*_) must never link out of their local directory, preventing narratives from leaking into one another.
- **Decorative elaboration**: Settings, objects, and characters are strictly reduced to the essential load-bearing vectors of the play's systemic architecture (e.g., places of confinement, tools of labor, agents of change), omitting secondary ornament.
- **Monolingual uniformity (Language Policy)**: The house implements a strict bilingual split:
  - **English for Architecture & Schema**: To maintain compatibility with the global `khai` framework specifications and validation tooling, the house identity ([README.md](README.md)), reference documents ([REFERENCE.md](REFERENCE.md)), frontmatter keys, and H2 structural headings are written in English.
  - **German for Prose & Staging**: All character descriptions (`Projection`, `Action`, `Shadow`), element behaviors, and scene notes are written in the authentic, poetic **Grimm-Deutsch** style (incorporating period-appropriate syntax, archaic vocabulary, paratactic chains of events, and natural German Markdown labels).

## Encoding

Source to constraint, per file.

- **the house ([README.md](README.md))**: The Estate identity that answers for the entire run.
- **the productions (`plays/`)**: The individual staging packages, each containing the play definition, personas, positions, pieces, places, processes, and plots.
- **the gates (`tests/`, `khai-guard.config.json`)**: The conformance and governance checks ensuring that all plays comply with the canon and maintain strict local link isolation.
