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

- [x] KHM 001 The Frog-King, or Iron Henry
- [x] KHM 002 Cat and Mouse in Partnership
- [x] KHM 003 Our Lady's Child
- [x] KHM 004 The Story of the Youth Who Went Forth to Learn What Fear Was
- [x] KHM 005 The Wolf and the Seven Little Kids
- [x] KHM 006 Faithful John
- [x] KHM 007 The Good Bargain
- [x] KHM 008 The Wonderful Musician
- [x] KHM 009 The Twelve Brothers
- [x] KHM 010 The Pack of Ragamuffins
- [x] KHM 011 Brother and Sister
- [x] KHM 012 Rapunzel
- [x] KHM 013 The Three Little Men in the Wood
- [x] KHM 014 The Three Spinners
- [x] KHM 015 Hansel and Gretel
- [x] KHM 016 The Three Snake-Leaves
- [x] KHM 017 The White Snake
- [x] KHM 018 The Straw, the Coal, and the Bean
- [x] KHM 019 The Fisherman and His Wife
- [x] KHM 020 The Valiant Little Tailor
- [x] KHM 021 Cinderella
- [x] KHM 022 The Riddle
- [x] KHM 023 The Mouse, the Bird, and the Sausage
- [x] KHM 024 Mother Holle
- [x] KHM 025 The Seven Ravens
- [x] KHM 026 Little Red-Cap
- [x] KHM 027 The Bremen Town-Musicians
- [x] KHM 028 The Singing Bone
- [x] KHM 029 The Devil With the Three Golden Hairs
- [x] KHM 030 The Louse and the Flea
- [x] KHM 031 The Girl Without Hands
- [x] KHM 032 Clever Hans
- [x] KHM 033 The Three Languages
- [x] KHM 034 Clever Elsie
- [x] KHM 035 The Tailor in Heaven
- [x] KHM 036 The Wishing-Table, the Gold-Ass, and the Cudgel in the Sack
- [x] KHM 037 Thumbling
- [x] KHM 038 The Wedding of Mrs Fox
- [x] KHM 039 The Elves
- [x] KHM 040 The Robber Bridegroom
- [x] KHM 041 Herr Korbes
- [x] KHM 042 The Godfather
- [x] KHM 043 Frau Trude
- [x] KHM 044 Godfather Death
- [x] KHM 045 Thumbling's Travels
- [x] KHM 046 Fitcher's Bird
- [x] KHM 047 The Juniper-Tree
- [x] KHM 048 Old Sultan
- [x] KHM 049 The Six Swans
- [x] KHM 050 Little Briar-Rose
- [x] KHM 051 Fundevogel
- [x] KHM 052 King Thrushbeard
- [x] KHM 053 Little Snow-White
- [x] KHM 054 The Knapsack, the Hat, and the Horn
- [x] KHM 055 Rumpelstiltskin
- [x] KHM 056 Sweetheart Roland
- [x] KHM 057 The Golden Bird
- [x] KHM 058 The Dog and the Sparrow
- [x] KHM 059 Frederick and Catherine
- [x] KHM 060 The Two Brothers
- [x] KHM 061 The Little Peasant
- [x] KHM 062 The Queen Bee
- [x] KHM 063 The Three Feathers
- [x] KHM 064 The Golden Goose
- [x] KHM 065 Allerleirauh
- [x] KHM 066 The Hare's Bride
- [x] KHM 067 The Twelve Huntsmen
- [x] KHM 068 The Thief and His Master
- [x] KHM 069 Jorinda and Joringel
- [x] KHM 070 The Three Sons of Fortune
- [x] KHM 071 How Six Men Got On in the World
- [x] KHM 072 The Wolf and the Man
- [x] KHM 073 The Wolf and the Fox
- [x] KHM 074 Gossip Wolf and the Fox
- [x] KHM 075 The Fox and the Cat
- [x] KHM 076 The Pink
- [x] KHM 077 Clever Gretel
- [x] KHM 078 The Old Man and His Grandson
- [x] KHM 079 The Water-Nix
- [x] KHM 080 The Death of the Little Hen
- [x] KHM 081 Brother Lustig
- [x] KHM 082 Gambling Hansel
- [x] KHM 083 Hans in Luck
- [x] KHM 084 Hans Married
- [x] KHM 085 The Gold-Children
- [x] KHM 086 The Fox and the Geese
- [x] KHM 087 The Poor Man and the Rich Man
- [x] KHM 088 The Singing, Springing Lark
- [x] KHM 089 The Goose-Girl
- [x] KHM 090 The Young Giant
- [x] KHM 091 The Gnome
- [x] KHM 092 The King of the Golden Mountain
- [x] KHM 093 The Raven
- [x] KHM 094 The Peasant's Wise Daughter
- [x] KHM 095 Old Hildebrand
- [x] KHM 096 The Three Little Birds
- [x] KHM 097 The Water of Life
- [x] KHM 098 Doctor Know-All
- [x] KHM 099 The Spirit in the Bottle
- [x] KHM 100 The Devil's Sooty Brother
- [x] KHM 101 Bearskin
- [x] KHM 102 The Willow-Wren and the Bear
- [x] KHM 103 Sweet Porridge
- [x] KHM 104 Wise Folks
- [x] KHM 105 Tales of the Paddock
- [x] KHM 106 The Poor Miller's Boy and the Cat
- [x] KHM 107 The Two Travellers
- [x] KHM 108 Hans the Hedgehog
- [x] KHM 109 The Shroud
- [x] KHM 110 The Jew Among Thorns
- [x] KHM 111 The Skilful Huntsman
- [x] KHM 112 The Flail from Heaven
- [x] KHM 113 The Two Kings' Children
- [x] KHM 114 The Cunning Little Tailor
- [x] KHM 115 The Bright Sun Brings It to Light
- [x] KHM 116 The Blue Light
- [x] KHM 117 The Wilful Child
- [x] KHM 118 The Three Army-Surgeons
- [x] KHM 119 The Seven Swabians
- [x] KHM 120 The Three Apprentices
- [x] KHM 121 The King's Son Who Feared Nothing
- [x] KHM 122 Donkey Cabbages
- [x] KHM 123 The Old Woman in the Wood
- [x] KHM 124 The Three Brothers
- [x] KHM 125 The Devil and His Grandmother
- [x] KHM 126 Ferdinand the Faithful and Ferdinand the Unfaithful
- [x] KHM 127 The Iron Stove
- [x] KHM 128 The Lazy Spinner
- [x] KHM 129 The Four Skilful Brothers
- [x] KHM 130 One-Eye, Two-Eyes, and Three-Eyes
- [x] KHM 131 Fair Katrinelje and Pif-Paf-Poltrie
- [x] KHM 132 The Fox and the Horse
- [x] KHM 133 The Shoes That Were Danced to Pieces
- [x] KHM 134 The Six Servants
- [x] KHM 135 The White Bride and the Black Bride
- [x] KHM 136 Iron John
- [x] KHM 137 The Three Black Princesses
- [x] KHM 138 Knoist and His Three Sons
- [x] KHM 139 The Maid of Brakel
- [x] KHM 140 My Household
- [x] KHM 141 The Lambkin and the Little Fish
- [x] KHM 142 Simeli Mountain
- [x] KHM 143 Going A-Travelling
- [x] KHM 144 The Donkey
- [x] KHM 145 The Ungrateful Son
- [x] KHM 146 The Turnip
- [x] KHM 147 The Old Man Made Young Again
- [x] KHM 148 The Lord's Animals and the Devil's
- [x] KHM 149 The Beam
- [x] KHM 150 The Old Beggar-Woman
- [x] KHM 151 The Three Sluggards
- [x] KHM 151a The Twelve Idle Servants
- [x] KHM 152 The Shepherd Boy
- [x] KHM 153 The Star-Money
- [x] KHM 154 The Stolen Farthings
- [x] KHM 155 Brides on Their Trial
- [x] KHM 156 Odds and Ends
- [x] KHM 157 The Sparrow and His Four Children
- [x] KHM 158 The Story of Schlauraffen Land
- [x] KHM 159 The Ditmarsch Tale of Wonders
- [x] KHM 160 A Riddling Tale
- [x] KHM 161 Snow-White and Rose-Red
- [x] KHM 162 The Wise Servant
- [x] KHM 163 The Glass Coffin
- [x] KHM 164 Lazy Harry
- [x] KHM 165 The Griffin
- [x] KHM 166 Strong Hans
- [x] KHM 167 The Peasant in Heaven
- [x] KHM 168 Lean Lisa
- [x] KHM 169 The Hut in the Forest
- [x] KHM 170 Sharing Joy and Sorrow
- [x] KHM 171 The Willow-Wren
- [x] KHM 172 The Sole
- [x] KHM 173 The Bittern and the Hoopoe
- [x] KHM 174 The Owl
- [x] KHM 175 The Moon
- [x] KHM 176 The Duration of Life
- [x] KHM 177 Death's Messengers
- [x] KHM 178 Master Pfriem
- [x] KHM 179 The Goose-Girl at the Well
- [x] KHM 180 Eve's Various Children
- [x] KHM 181 The Nixie of the Mill-Pond
- [x] KHM 182 The Little Folks' Presents
- [x] KHM 183 The Giant and the Tailor
- [x] KHM 184 The Nail
- [x] KHM 185 The Poor Boy in the Grave
- [x] KHM 186 The True Bride
- [x] KHM 187 The Hare and the Hedgehog
- [x] KHM 188 Spindle, Shuttle, and Needle
- [x] KHM 189 The Peasant and the Devil
- [x] KHM 190 The Crumbs on the Table
- [x] KHM 191 The Sea-Hare
- [x] KHM 192 The Master-Thief
- [x] KHM 193 The Drummer
- [x] KHM 194 The Ear of Corn
- [x] KHM 195 The Grave-Mound
- [x] KHM 196 Old Rinkrank
- [x] KHM 197 The Crystal Ball
- [x] KHM 198 Maid Maleen
- [x] KHM 199 The Boots of Buffalo-Leather
- [x] KHM 200 The Golden Key

### Children's Legends (KHM 201 to 210)

- [x] KHM 201 St. Joseph in the Forest
- [x] KHM 202 The Twelve Apostles
- [x] KHM 203 The Rose
- [x] KHM 204 Poverty and Humility Lead to Heaven
- [x] KHM 205 God's Food
- [x] KHM 206 The Three Green Twigs
- [x] KHM 207 Our Lady's Little Glass
- [x] KHM 208 The Aged Mother
- [x] KHM 209 The Heavenly Wedding
- [x] KHM 210 The Hazel-Branch

> Count: 200 numbered tales plus 10 Children's Legends make the headline 210.
> KHM 151a (_The Twelve Idle Servants_) is the known extra tale that shares the
> number 151 in the 1857 edition; it is listed here as its own optional
> production so the manifest stays faithful to the source.
