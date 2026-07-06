# PRODUCTION_elfenmaerchen.md, the Irische Elfenmärchen run

The plan for the Grimm house: stage Jacob and Wilhelm Grimm's translation and adaptation of Thomas Crofton Croker's _Fairy Legends and Traditions of the South of Ireland_, titled _Irische Elfenmärchen_ (1826), as **27 narrative plays**, one tale at a time.

> Source: Thomas Crofton Croker's _Fairy Legends and Traditions of the South of Ireland_ (1825), in the German translation by **Jacob and Wilhelm Grimm** (_Irische Elfenmärchen_, 1826), which is in the public domain. The English titles follow the original Croker tales, while the German titles and staging prose follow the Grimm translation.

---

## The strategy: 27 Irish Fairy Legends

Like Kinder- und Hausmärchen (KHM) and Deutsche Sagen (DS), the _Irische Elfenmärchen_ represent character-driven narrative arcs set in a landscape-bound, spirit-haunted world. Each tale is staged as a **Play** with its own closed Company and Stakes, illustrating the moral ambiguity of elf-human interactions.

What this buys us:

- **Thematic Categories**: Aligned with the Grimms' taxonomy, the plays are grouped into 5 distinct categories:
  - **Das stille Volk** (The Good People): Tales 1 to 11
  - **Der Cluricaun**: Tales 12 to 16
  - **Die Banshi**: Tales 17 to 18
  - **Die Phuka**: Tales 19 to 22
  - **Das Land der Jugend**: Tales 23 to 27
- **Bilingual Consistency**: The schema and structural titles remain in English (for integration with global validation tooling), while all stage descriptions and characters use the Grimms' periodic **Grimm-Deutsch** translation prose.

---

## The build: one tale, full Mode B

Every tale is built as a play directory (`ie_NNN_`) containing:

- `play_*.md`: The play definition outlining the tale's ENACTS container.
- `plot_NN_*.md`: The CAST movements of the story's narrative arc.
- `persona_*.md`, `place_*.md`, `process_*.md`, `piece_*.md`, `position_*.md`, `pitch_*.md`: The specific company assets.

---

## The Manifest: 27 Plays

### Das stille Volk (_The Good People_)

- `[ ]` **ie_001_das_weisse_kalb** — Das weiße Kalb (The White Calf)
- `[ ]` **ie_002_die_erzuernten_elfen** — Die erzürnten Elfen (The Shefro / The Angry Elves)
- `[ ]` **ie_003_fingerhuetchen** — Fingerhütchen (Legend of Knockshegowna)
- `[ ]` **ie_004_die_mahlzeit_des_geistlichen** — Die Mahlzeit des Geistlichen (The Priest's Supper)
- `[ ]` **ie_005_der_kleine_sackpfeifer** — Der kleine Sackpfeifer (The Elves in the Downs / The Mawrish Piper)
- `[ ]` **ie_006_die_brauerei_von_eierschalen** — Die Brauerei von Eierschalen (The Brewery of Egg-shells)
- `[ ]` **ie_007_der_wechselbalg** — Der Wechselbalg (The Changeling)
- `[ ]` **ie_008_die_beiden_gevatterinnen** — Die beiden Gevatterinnen (The Two Gossips)
- `[ ]` **ie_009_die_flasche** — Die Flasche (The Legend of Bottle Hill)
- `[ ]` **ie_010_die_bekenntnisse_des_thomas_bourke** — Die Bekenntnisse des Thomas Bourke (The Confessions of Tom Bourke)
- `[ ]` **ie_011_die_verwandelten_elfen** — Die verwandelten Elfen (The Fairy Nurse)

### Der Cluricaun

- `[ ]` **ie_012_der_verwuenschte_keller** — Der verwünschte Keller (The Haunted Cellar)
- `[ ]` **ie_013_der_schuhmacher** — Der Schuhmacher (The Cluricaune / The Leprechaun)
- `[ ]` **ie_014_herr_und_diener** — Herr und Diener (Master and Man)
- `[ ]` **ie_015_das_feld_mit_hagebuchen** — Das Feld mit Hagebuchen (The Field of Boliauns)
- `[ ]` **ie_016_die_kleinen_schuhe** — Die kleinen Schuhe (The Little Shoes)

### Die Banshi

- `[ ]` **ie_017_die_banshi_von_bunworth** — Die Banshi von Bunworth (The Bunworth Banshee)
- `[ ]` **ie_018_die_banshi_von_mac_carthy** — Die Banshi von Mac Carthy (The Mac Carthy Banshee)

### Die Phuka

- `[ ]` **ie_019_das_hexenpferd** — Das Hexenpferd (The Pooka / The Witch-Horse)
- `[ ]` **ie_020_daniel_orourkes_irrfahrten** — Daniel O’Rourkes Irrfahrten (Daniel O'Rourke)
- `[ ]` **ie_021_das_gebueckte_muetterchen** — Das gebückte Mütterchen (The Crooked Back)
- `[ ]` **ie_022_die_verwuenschte_burg** — Die verwünschte Burg (The Haunted Castle)

### Das Land der Jugend

- `[ ]` **ie_023_springwasser** — Springwasser (The Spring Water / The Lake)
- `[ ]` **ie_024_der_see_corrib** — Der See Corrib (Lough Corrib)
- `[ ]` **ie_025_die_kuh_mit_den_sieben_faersen** — Die Kuh mit den sieben Färsen (The Seven Heifers)
- `[ ]` **ie_026_der_verzauberte_see** — Der verzauberte See (The Enchanted Lake)
- `[ ]` **ie_027_die_erscheinung_des_odonoghue** — Die Erscheinung des O’Donoghue (The Appearance of O'Donoghue)
