# gokudoukanji (極道漢字)
A simple opinion-driven kanji SRS app

## Design

### Features
- Leveled progression (without a max level?) to avoid overwhelming users

- Fixed SRS scheme, but with shorter caps for radicals and maybe kanji

- Daily review caps (settable by users?)

- Radicals (?) > Kanji > Vocabulary progression

- Focus on more natural kanji and vocabulary acquisition

- Kanji sorting by simplicity + frequency usage

- Kanji coverage metrics?

- Vocabulary sets relying on frequency (pulled from [jisho.org](https://jisho.org/)?)

- Radical sets pulled from the Kangxi list on [Wikipedia](https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count#Kanji_radicals_not_recognized_by_Kangxi)

- Simple, easy to follow mnemonics leveraging kanji meanings, possibly relying on Japanese sounds (not English!)

- Mnemonic sounds should honor Japanese vowel length and should be consistent across kanji (for instance, character stories?)

- Include kanji phonetic composition where applicable!

- Should be friendly to beginners as well

- User-friendliness and no-fluff as top priorities

### High-level Design

#### Radicals
- The [Kangxi radicals](https://en.wikipedia.org/wiki/Kangxi_radical) are a good starting point, but at 3-4 strokes 
radicals effectively turn into kanji so there is little sense to teach radicals as radicals and instead start transitioning 
into kanji. **Teaching the 1-3 stroke radicals should be sufficient.**

- Each radical will be given a **series of meanings** to elaborate on the concept behind the radical and not just assign 
a single word to it. This will make it easier for students to relate to the radical.

#### Kanji
- **Teaching from simpler to more complex ones to ease students in.** However, overall kanji frequency should also be considered,
otherwise students will have problems aligning the app's curriculum with other study resources.

- As for radicals, each kanji will be given a **series of meanings**.

#### Vocabulary
- Preferably **common** vocabulary, selected from data pulled from the Jisho Web API.

- As for other items, a **series of meanings** will be given.

- Use will be examplified via **context sentences** pulled from [Tatoeba](https://tatoeba.org/en). Teaching vocabulary without 
context is challenging.

#### Mnemonics
- Each radical will get a **simple visual mnemonic**, but with time remembering them will become easy.

- Kanji meaning mnemonics will be **derived from radical meanings**.

- Kanji readings will be based on **simple character stories with animals** or similar. The point is for the mnemonic to be
  - relatable to as many people as possible
  - easy to infer the reading regardless of accent
  - memorable

### UI
- [Miligram CSS](https://milligram.io/) or [Bonsai CSS](https://www.bonsaicss.com/) for styling to keep it simple

- **TODO:** Custom designed UI blocks otherwise


## Logic
- [node.js](https://nodejs.org/en) + extra libs where needed

## Back-end Storage

### Main Back-end
- Probably [PostgreSQL](https://www.postgresql.org/)

### Caching
- **TODO:** if needed
