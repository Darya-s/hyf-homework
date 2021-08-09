const notes = [];

const notepad = [
  {
    content: "Pick up groceries",
    id: 1,
  },

  {
    content: "Do laundry",
    id: 2,
  },
];

function saveNote(content, id) {
  for (let note of notepad) {
    notes.push({ content, id });
  }
  return notes;
}
saveNote(notepad);
console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return notes[i].content;
    }
  }
}

const firstNote = getNote(1);
const secondNote = getNote(2);
console.log(firstNote, secondNote);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();

function addNote(newContent, newId) {
  notepad.push({ id: newId, content: newContent });
}

addNote("My new note number three", 3);
console.log(notepad);
