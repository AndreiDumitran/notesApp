import validator from "validator";
import * as notes from "./notes.js";
import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const y = yargs(hideBin(process.argv));

// Customize yargs version
y.version("1.1.0");

// Create add command
y.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
y.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
y.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.getNotes();
  },
});

// Create read command
y.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

y.parse();
