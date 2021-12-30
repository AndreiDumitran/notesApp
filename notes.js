import fs from "fs";
import chalk from "chalk";
let loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
let saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const getNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};
export const readNote = (title) => {
  const notes = loadNotes();
  const noteToFind = notes.find((note) => note.title === title);
  if (noteToFind) {
    console.log(chalk.inverse.green(noteToFind.title));
    console.log(noteToFind.body);
  } else console.log(chalk.inverse.red("Note not in the list!"));
};
export const removeNote = (title) => {
  const notes = loadNotes();
  const noteToRemove = notes.filter((note) => note.title !== title);

  if (notes.length > noteToRemove.length) {
    console.log(chalk.green.inverse("Note removed!"));
  } else console.log(chalk.red.inverse("No note to remove!"));
  saveNotes(noteToRemove);
};
