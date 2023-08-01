# Database
- PostgreSQL (good support for many column types)
- 1 server instance
- 1 database item
- multiple tables

# Tables

## Kanji
- slug              TEXT UNIQUE (key?)
- parts             TEXT ARRAY
- kunyomi           TEXT ARRAY
- onyomi            TEXT ARRAY
- meanings          TEXT ARRAY
- mnemonic          TEXT (originally load from JSON file for easy editing?)
- custom_mnemonic   TEXT (user feature)
- jlpt_level        TEXT ('Nx' format)
- level             INTEGER

## Vocabulary
- slug              TEXT UNIQUE (key?)
- parts             TEXT ARRAY
- reading           TEXT
- meanings          TEXT ARRAY
- mnemonic          TEXT (originally loaded from JSON file for easy editing?)
- custom_mnemonic   TEXT (user feature)
- jlpt_level        TEXT ('Nx' format) 
- level             INTEGER

## Users
- id                TEXT (encrypted)
- password          TEXT (encrypted)
- name              TEXT
- level             INTEGER

## SRS
- grade             INTEGER
- name              TEXT (user-facing name)
- interval          INTEGER (hours)
- penalty           REAL (or float8 equivalent)

## User SRS stages (per-user tables)
- slug              TEXT UNIQUE (word or kanji)
- grade             INTEGER (join on SRS table's 'grade' column)
