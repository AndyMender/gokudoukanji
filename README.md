# gokudoukanji (極道漢字)
A simple opinion-driven kanji learning app.

## Design

### Features
- No levels - only kanji-based progression (the max is at least jouyou kanji).

- Dynamic SRS scheme, respecting real-time intervals between study sessions.

- A daily review cap to avoid burnout / overwhelming the learner.

- Kanji -> vocabulary progression. Even radical-like parts are effectively kanji.

- Focus on more natural kanji and vocabulary acquisition - aligned with JLPT levels and vocabulary frequency.

- Radical-like kanji sets pulled from the Kangxi list on 
  [Wikipedia](https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count#Kanji_radicals_not_recognized_by_Kangxi)

- Simple, easy to follow mnemonics leveraging kanji meanings, respecting Japanese sounds (for instance, vowel length) 
  and including kanji phonetic composition where applicable.

- Simple, clear, user-friendly interface.

### Content Design

#### Radicals
- The [Kangxi radicals](https://en.wikipedia.org/wiki/Kangxi_radical) are a good starting point, but at 3-4 strokes 
  radicals effectively become kanji so there is little sense to teach radicals as separate components.

- For radical-like kanji, teaching the reading would not be very useful long-term. Teaching the **meaning** should be sufficient.

#### Kanji
- **Teaching from simpler to more complex ones to ease students in.** However, JLPT levels and kanji frequency will be prioritized.
  That way it's easier to align how the app works with other study resources.

- Each kanji will be given a **series of meanings** and **1+** readings.

#### Vocabulary
- Preferably **common** vocabulary, selected from data pulled from the Jisho Web API.

- As for other items, a **series of meanings** and a **reading** will be given.

- Use will be examplified via **context sentences** pulled from [Tatoeba](https://tatoeba.org/en). Teaching vocabulary without 
context is challenging.

#### Mnemonics
- Kanji meaning mnemonics will be **derived from simpler kanji meanings**.

- Kanji readings will be based on **simple character stories with animals** or similar. The point is for the mnemonic to be
  - relatable to as many people as possible
  - easy to infer the reading regardless of accent
  - memorable

## Front-end

### Front-end Design
- Logic via [React.js](https://react.dev/)
- [Spectre CSS](https://picturepan2.github.io/spectre/getting-started.html) for styling

## Back-end

### Back-end Design
- [node.js](https://nodejs.org/en) + extra libs where needed
- [prisma](https://www.prisma.io/) ORM to handle database requests 

### Back-end Storage

- [PostgreSQL](https://www.postgresql.org/) to store the majority of data
