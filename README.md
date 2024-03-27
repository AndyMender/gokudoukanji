# gokudoukanji (極道漢字)
**A simple opinion-driven kanji learning app.**

## Design

### Features (WIP)
- Kanji-based progression (current planned soft cap is all jouyou kanji)

- Dynamically scaling SRS scheme, considering real life time intervals between study sessions

- A daily review cap to avoid burnout / overwhelming the learner

- `Kanji` is considered the basic building block, including [Kangxi radicals](https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count#Kanji_radicals_not_recognized_by_Kangxi)

- Kanji to vocabulary progression. Each kanji or set thereof unlock words which reinforce readings.

- Focus on more natural kanji and vocabulary acquisition - **aligned with JLPT levels and vocabulary frequency.**

- Simple, easy to follow mnemonics leveraging kanji meanings, respecting Japanese sounds (for instance, vowel length) 
  and including kanji phonetic composition where applicable

- Clear, readable, user-friendly interface

### Content (WIP)

#### Kanji
- The core building block of Japanese. `kun'yomi` readings are often used for single kanji words, while `on'yomi` readings in multi-kanji words (jukugo)

- **Kanji are sometimes taught in increasing complexity, however it is more beneficial to align kanji progression with JLPT levels and existing learning resources**

- Each kanji will be given a **series of meanings** and **1+** readings.

- The [Kangxi list](https://en.wikipedia.org/wiki/Kangxi_radical) features `radicals`, however at 3-4 strokes they resemble kanji. Therefore, the app 
  will not separate them. **Radical-like kanji without meaningful readings will not include them.**

#### Vocabulary
- Emphasis on **common** vocabulary, selected from data pulled from the Jisho Web API

- Each vocabulary item will feature a series of **meanings** and **readings**

- Use will be examplified via **context sentences** pulled from [Tatoeba](https://tatoeba.org/en). Teaching vocabulary without context is challenging.

#### Mnemonics
- Kanji meaning mnemonics will be **derived from simpler kanji meanings**.

- Kanji readings will be based on **simple character stories with animals** or similar. The point is for the mnemonic to be
  - relatable to as many people as possible
  - easy to infer the reading regardless of accent
  - memorable

## Front-end

### Front-end Design

#### Code
[React.js](https://react.dev/)

#### Styling
[Spectre CSS](https://picturepan2.github.io/spectre/getting-started.html), though a simpler CSS stylesheet might be preferable

## Back-end

### Back-end Design
- [node.js](https://nodejs.org/en) + extra libs where needed
- [prisma](https://www.prisma.io/) ORM to handle database requests 

### Back-end Storage
- [PostgreSQL](https://www.postgresql.org/) to store the majority of data

## Deployment
The setup is now fully Dockerized.
```bash
# build container (APP_PORT can be used to override the port exposed by default)
export APP_PORT=5173
docker build --build-arg APP_PORT=${APP_PORT} -f Dockerfile .
# run container as daemon in the background
docker run -p ${APP_PORT}:${APP_PORT} -d <name of previously created Docker container>
```
