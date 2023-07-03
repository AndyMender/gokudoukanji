# gokudoukanji (極道漢字)
A simple opinion-driven kanji SRS app

## Design

### UI
- [Miligram CSS](https://milligram.io/) or [Bonsai CSS](https://www.bonsaicss.com/) for styling to keep it simple

- **TODO:** Custom designed UI blocks otherwise

### Features
- Leveled progression (without a max level?) to avoid overwhelming users

- Fixed SRS scheme, but with shorter caps for radicals and maybe kanji

- Daily review caps (settable by users?)

- Radicals (?) > Kanji > Vocabulary progression

- Focus on more natural kanji and vocabulary acquisition

- Kanji sorting by simplicity + frequency usage

- Kanji coverage metrics?

- Vocabulary sets relying on frequency (pulled from [jisho.org](https://jisho.org/)?)

- Simple, easy to follow mnemonics leveraging kanji meanings, possibly relying on Japanese sounds (not English!)

- Include kanji phonetic composition where applicable!

- Should be friendly to beginners as well

- User-friendliness and no-fluff as top priorities

## Logic
- [node.js](https://nodejs.org/en) + extra libs where needed

## Back-end Storage

### Main Back-end
- Probably [PostgreSQL](https://www.postgresql.org/)

### Caching
- **TODO:** if needed
