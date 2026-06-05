# PRODUCTION.md, the Grimm run

The plan for the Grimm house: stage the whole of the Brothers Grimm as **210
sovereign plays**, one tale at a time, each its own complete khai production.
This file is the run's blueprint and its tracker. The plays themselves land in
`plays/`; this document says how they are built and how far the run has come.

> Source: the _Children's and Household Tales_ (Kinder und Hausmaerchen), final
> 1857 edition, in the **Margaret Hunt** translation (1884), which is in the
> public domain. The tales are credited, never claimed; the architecture is
> original work. The titles in the tracker below follow the standard KHM
> numbering and Hunt's English titles, and are reconciled against the text as
> each tale is produced (treat the tracker as the working manifest, not gospel).

## The strategy: 210 distinct worlds

We do not treat the collection as one long sequence. Each KHM number is its own
**Play**: a complete ENACTS production container, with its own closed Company and
its own Stakes. A tale like _Hansel and Gretel_ is not a single flat plot; it is
a production whose internal narrative movements (the abandonment, the witch's
house, the escape) are discrete **Plots** that hand off to one another through
the play's own Triggers.

What this buys us:

- **Intra-tale granularity.** The internal structural transitions of a story are
  captured as discrete, chaining Plots, not flattened into one scene.
- **Localized companies.** Each tale keeps its own closed, specific cast.
  `Persona: Hansel` lives strictly inside the Company of KHM 15 and never bleeds
  into the rest of the repository. No global character list.
- **Micro-stakes.** Instead of one abstract motive for hundreds of stories, each
  play isolates exactly what _this_ tale is fighting over, in its own Stakes.

## The build: one tale, full Mode B

Every tale is built as a full khai-playwright **Mode B** production. The mode and
its rules live in the `khai-playwright` skill; this is the per-tale workflow:

```
[Target: KHM_NNN]
  |
  ├─ Step 1: Author play_<name>.md (ENACTS) ........ sets the tale's master constraints
  |
  ├─ Step 2: Extract the plot chain (CAST) ......... plot_01_<movement>.md, plot_02_..., ...
  |
  └─ Step 3: Map the cast, in fixed order .......... process > position > piece > place > persona
```

1. **Author the play.** Six chapters, in ENACTS order (Estate, Name, Arc,
   Company, Triggers, Stakes). The Estate is **this house** (see `README.md`); a
   play with no Estate is not yet a production. The Company is the closed cast;
   the Triggers name the plots and their order.
2. **Author each plot the Triggers chain.** Chapters Cue, Action, Stage, Tension
   (CAST), under the Taxonomy and Owner prefix. Every element a plot draws on
   comes **only** from the play's Company.
3. **Author each Company element that has no file yet**, in the fixed order
   process, position, piece, place, persona.

### The world layout (one folder per tale)

Each tale lives in its own directory under `plays/`, in the world layout:

```
plays/
  KHM_015_Hansel_and_Gretel/
    play_hansel_and_gretel.md          (the ENACTS container)
    plot_01_the_abandonment.md         (first CAST movement)
    plot_02_the_witchs_house.md        (second CAST movement)
    plot_03_the_escape.md              (third CAST movement)
    persona_hansel.md                  (the specific company assets the plots cast)
    persona_gretel.md
    place_the_gingerbread_house.md
    ...
```

Directory name: `KHM_<NNN>_<Title_In_Snake_Case>`, number zero-padded to three
digits. File names follow the world layout: `play_`, `plot_NN_`, then the element
prefixes (`process_`, `position_`, `piece_`, `place_`, `persona_`).

### Mechanical integrity constraints

These are mechanical (testable by structure), checked per tale before it is done:

- **The lane is total.** A plot may reference no element the play's Company does
  not name. An element that appears in a plot but not in the Company has gone off
  the play: stop, and either add it to the Company or cut it from the plot.
- **The hand-off chains.** The Triggers must chain the movements close to cue:
  the close of Plot 1 is the direct cue for Plot 2, and so on. A pile of scenes
  that do not hand off is not a run.
- **Existence resolves.** Every Cue, Action, Stage, and Tension reference resolves
  to a Company member with a file. The conformance test (`tests/house.test.mjs`)
  validates this for every play in `plays/`.
- **House voice, no dashes.** Across all 210 production folders: colons,
  ellipses (...), and line breaks only. No em-dashes or en-dashes in any output
  file. (Ordinary hyphens in names like "The Frog-King" are fine.)

And these are judgement calls (settled by review, not structure), self-checked
and reported per tale:

- The Arc genuinely **bends** across the plots (reorder them and something is lost).
- Each plot **moves the Stakes**; none leaves them where it found them.
- The **Tension** in each plot genuinely blocks its Action.

## Branching and registration

- **One tale, one branch.** Each tale is its own change under `plays/**`, so it
  rides a `play/<topic>` lane. Computed, not chosen: edit first, then
  `npx khai-guard branch <topic>` picks the lane. Never `--no-verify`; never
  merge (open the PR and stop).
- **The house is registered in khai.** The Grimm house has a card in the
  `khai-plays` registry (the bill khai keeps of every house). The card names this
  repository as the house and `@chbrain/khai-plays-grimm` as the programme the
  website pulls to read these plays. khai holds the card; the plays live here.

## The run: 210 tales

Each box is one production folder under `plays/`. Check it when the tale's play,
plots, and full cast are authored and the house conformance test is green with it
in place.

### Tales (KHM 1 to 200)

- [ ] KHM 001 The Frog-King, or Iron Henry
- [ ] KHM 002 Cat and Mouse in Partnership
- [ ] KHM 003 Our Lady's Child
- [ ] KHM 004 The Story of the Youth Who Went Forth to Learn What Fear Was
- [ ] KHM 005 The Wolf and the Seven Little Kids
- [ ] KHM 006 Faithful John
- [ ] KHM 007 The Good Bargain
- [ ] KHM 008 The Wonderful Musician
- [ ] KHM 009 The Twelve Brothers
- [ ] KHM 010 The Pack of Ragamuffins
- [ ] KHM 011 Brother and Sister
- [ ] KHM 012 Rapunzel
- [ ] KHM 013 The Three Little Men in the Wood
- [ ] KHM 014 The Three Spinners
- [ ] KHM 015 Hansel and Gretel
- [ ] KHM 016 The Three Snake-Leaves
- [ ] KHM 017 The White Snake
- [ ] KHM 018 The Straw, the Coal, and the Bean
- [ ] KHM 019 The Fisherman and His Wife
- [ ] KHM 020 The Valiant Little Tailor
- [ ] KHM 021 Cinderella
- [ ] KHM 022 The Riddle
- [ ] KHM 023 The Mouse, the Bird, and the Sausage
- [ ] KHM 024 Mother Holle
- [ ] KHM 025 The Seven Ravens
- [ ] KHM 026 Little Red-Cap
- [ ] KHM 027 The Bremen Town-Musicians
- [ ] KHM 028 The Singing Bone
- [ ] KHM 029 The Devil With the Three Golden Hairs
- [ ] KHM 030 The Louse and the Flea
- [ ] KHM 031 The Girl Without Hands
- [ ] KHM 032 Clever Hans
- [ ] KHM 033 The Three Languages
- [ ] KHM 034 Clever Elsie
- [ ] KHM 035 The Tailor in Heaven
- [ ] KHM 036 The Wishing-Table, the Gold-Ass, and the Cudgel in the Sack
- [ ] KHM 037 Thumbling
- [ ] KHM 038 The Wedding of Mrs Fox
- [ ] KHM 039 The Elves
- [ ] KHM 040 The Robber Bridegroom
- [ ] KHM 041 Herr Korbes
- [ ] KHM 042 The Godfather
- [ ] KHM 043 Frau Trude
- [ ] KHM 044 Godfather Death
- [ ] KHM 045 Thumbling's Travels
- [ ] KHM 046 Fitcher's Bird
- [ ] KHM 047 The Juniper-Tree
- [ ] KHM 048 Old Sultan
- [ ] KHM 049 The Six Swans
- [ ] KHM 050 Little Briar-Rose
- [ ] KHM 051 Fundevogel
- [ ] KHM 052 King Thrushbeard
- [ ] KHM 053 Little Snow-White
- [ ] KHM 054 The Knapsack, the Hat, and the Horn
- [ ] KHM 055 Rumpelstiltskin
- [ ] KHM 056 Sweetheart Roland
- [ ] KHM 057 The Golden Bird
- [ ] KHM 058 The Dog and the Sparrow
- [ ] KHM 059 Frederick and Catherine
- [ ] KHM 060 The Two Brothers
- [ ] KHM 061 The Little Peasant
- [ ] KHM 062 The Queen Bee
- [ ] KHM 063 The Three Feathers
- [ ] KHM 064 The Golden Goose
- [ ] KHM 065 Allerleirauh
- [ ] KHM 066 The Hare's Bride
- [ ] KHM 067 The Twelve Huntsmen
- [ ] KHM 068 The Thief and His Master
- [ ] KHM 069 Jorinda and Joringel
- [ ] KHM 070 The Three Sons of Fortune
- [ ] KHM 071 How Six Men Got On in the World
- [ ] KHM 072 The Wolf and the Man
- [ ] KHM 073 The Wolf and the Fox
- [ ] KHM 074 Gossip Wolf and the Fox
- [ ] KHM 075 The Fox and the Cat
- [ ] KHM 076 The Pink
- [ ] KHM 077 Clever Gretel
- [ ] KHM 078 The Old Man and His Grandson
- [ ] KHM 079 The Water-Nix
- [ ] KHM 080 The Death of the Little Hen
- [ ] KHM 081 Brother Lustig
- [ ] KHM 082 Gambling Hansel
- [ ] KHM 083 Hans in Luck
- [ ] KHM 084 Hans Married
- [ ] KHM 085 The Gold-Children
- [ ] KHM 086 The Fox and the Geese
- [ ] KHM 087 The Poor Man and the Rich Man
- [ ] KHM 088 The Singing, Springing Lark
- [ ] KHM 089 The Goose-Girl
- [ ] KHM 090 The Young Giant
- [ ] KHM 091 The Gnome
- [ ] KHM 092 The King of the Golden Mountain
- [ ] KHM 093 The Raven
- [ ] KHM 094 The Peasant's Wise Daughter
- [ ] KHM 095 Old Hildebrand
- [ ] KHM 096 The Three Little Birds
- [ ] KHM 097 The Water of Life
- [ ] KHM 098 Doctor Know-All
- [ ] KHM 099 The Spirit in the Bottle
- [ ] KHM 100 The Devil's Sooty Brother
- [ ] KHM 101 Bearskin
- [ ] KHM 102 The Willow-Wren and the Bear
- [ ] KHM 103 Sweet Porridge
- [ ] KHM 104 Wise Folks
- [ ] KHM 105 Tales of the Paddock
- [ ] KHM 106 The Poor Miller's Boy and the Cat
- [ ] KHM 107 The Two Travellers
- [ ] KHM 108 Hans the Hedgehog
- [ ] KHM 109 The Shroud
- [ ] KHM 110 The Jew Among Thorns
- [ ] KHM 111 The Skilful Huntsman
- [ ] KHM 112 The Flail from Heaven
- [ ] KHM 113 The Two Kings' Children
- [ ] KHM 114 The Cunning Little Tailor
- [ ] KHM 115 The Bright Sun Brings It to Light
- [ ] KHM 116 The Blue Light
- [ ] KHM 117 The Wilful Child
- [ ] KHM 118 The Three Army-Surgeons
- [ ] KHM 119 The Seven Swabians
- [ ] KHM 120 The Three Apprentices
- [ ] KHM 121 The King's Son Who Feared Nothing
- [ ] KHM 122 Donkey Cabbages
- [ ] KHM 123 The Old Woman in the Wood
- [ ] KHM 124 The Three Brothers
- [ ] KHM 125 The Devil and His Grandmother
- [ ] KHM 126 Ferdinand the Faithful and Ferdinand the Unfaithful
- [ ] KHM 127 The Iron Stove
- [ ] KHM 128 The Lazy Spinner
- [ ] KHM 129 The Four Skilful Brothers
- [ ] KHM 130 One-Eye, Two-Eyes, and Three-Eyes
- [ ] KHM 131 Fair Katrinelje and Pif-Paf-Poltrie
- [ ] KHM 132 The Fox and the Horse
- [ ] KHM 133 The Shoes That Were Danced to Pieces
- [ ] KHM 134 The Six Servants
- [ ] KHM 135 The White Bride and the Black Bride
- [ ] KHM 136 Iron John
- [ ] KHM 137 The Three Black Princesses
- [ ] KHM 138 Knoist and His Three Sons
- [ ] KHM 139 The Maid of Brakel
- [ ] KHM 140 My Household
- [ ] KHM 141 The Lambkin and the Little Fish
- [ ] KHM 142 Simeli Mountain
- [ ] KHM 143 Going A-Travelling
- [ ] KHM 144 The Donkey
- [ ] KHM 145 The Ungrateful Son
- [ ] KHM 146 The Turnip
- [ ] KHM 147 The Old Man Made Young Again
- [ ] KHM 148 The Lord's Animals and the Devil's
- [ ] KHM 149 The Beam
- [ ] KHM 150 The Old Beggar-Woman
- [ ] KHM 151 The Three Sluggards
- [ ] KHM 151a The Twelve Idle Servants
- [ ] KHM 152 The Shepherd Boy
- [ ] KHM 153 The Star-Money
- [ ] KHM 154 The Stolen Farthings
- [ ] KHM 155 Brides on Their Trial
- [ ] KHM 156 Odds and Ends
- [ ] KHM 157 The Sparrow and His Four Children
- [ ] KHM 158 The Story of Schlauraffen Land
- [ ] KHM 159 The Ditmarsch Tale of Wonders
- [ ] KHM 160 A Riddling Tale
- [ ] KHM 161 Snow-White and Rose-Red
- [ ] KHM 162 The Wise Servant
- [ ] KHM 163 The Glass Coffin
- [ ] KHM 164 Lazy Harry
- [ ] KHM 165 The Griffin
- [ ] KHM 166 Strong Hans
- [ ] KHM 167 The Peasant in Heaven
- [ ] KHM 168 Lean Lisa
- [ ] KHM 169 The Hut in the Forest
- [ ] KHM 170 Sharing Joy and Sorrow
- [ ] KHM 171 The Willow-Wren
- [ ] KHM 172 The Sole
- [ ] KHM 173 The Bittern and the Hoopoe
- [ ] KHM 174 The Owl
- [ ] KHM 175 The Moon
- [ ] KHM 176 The Duration of Life
- [ ] KHM 177 Death's Messengers
- [ ] KHM 178 Master Pfriem
- [ ] KHM 179 The Goose-Girl at the Well
- [ ] KHM 180 Eve's Various Children
- [ ] KHM 181 The Nixie of the Mill-Pond
- [ ] KHM 182 The Little Folks' Presents
- [ ] KHM 183 The Giant and the Tailor
- [ ] KHM 184 The Nail
- [ ] KHM 185 The Poor Boy in the Grave
- [ ] KHM 186 The True Bride
- [ ] KHM 187 The Hare and the Hedgehog
- [ ] KHM 188 Spindle, Shuttle, and Needle
- [ ] KHM 189 The Peasant and the Devil
- [ ] KHM 190 The Crumbs on the Table
- [ ] KHM 191 The Sea-Hare
- [ ] KHM 192 The Master-Thief
- [ ] KHM 193 The Drummer
- [ ] KHM 194 The Ear of Corn
- [ ] KHM 195 The Grave-Mound
- [ ] KHM 196 Old Rinkrank
- [ ] KHM 197 The Crystal Ball
- [ ] KHM 198 Maid Maleen
- [ ] KHM 199 The Boots of Buffalo-Leather
- [ ] KHM 200 The Golden Key

### Children's Legends (KHM 201 to 210)

- [ ] KHM 201 St. Joseph in the Forest
- [ ] KHM 202 The Twelve Apostles
- [ ] KHM 203 The Rose
- [ ] KHM 204 Poverty and Humility Lead to Heaven
- [ ] KHM 205 God's Food
- [ ] KHM 206 The Three Green Twigs
- [ ] KHM 207 Our Lady's Little Glass
- [ ] KHM 208 The Aged Mother
- [ ] KHM 209 The Heavenly Wedding
- [ ] KHM 210 The Hazel-Branch

> Count: 200 numbered tales plus 10 Children's Legends make the headline 210.
> KHM 151a (_The Twelve Idle Servants_) is the known extra tale that shares the
> number 151 in the 1857 edition; it is listed here as its own optional
> production so the manifest stays faithful to the source.
