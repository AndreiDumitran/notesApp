# Simple Notes App using NodeJS

This is a simple Notes taking app written in JavaScript.

## Stack used:

1. Programming Languages:
   - JavaScript
2. Frameworks:
   - NodeJS - to run the app
   - chalk - to offer colours to the outputs
   - yargs - to create the commands
   - fs (file system) - to save locally the notes in `JSON` format

## Usage:

To run the app, run:

```bash
node app.js
```

To see the help menu, run:

```bash
node app.js --help
```

```javascript
Commands:
  app.js add     Add a new note
  app.js remove  Remove a note
  app.js list    List your notes
  app.js read    Read a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

To view specific function, run:

```bash
node app.js add --help
```

```javascript

Add a new note

Options:
  --help     Show help                                  [boolean]
  --version  Show version number                        [boolean]
  --title    Note title                                 [string] [required]
  --body     Note body                                  [string] [required]
```
