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
  // write some code her
  for (let note of notepad) {
    notes.push(note);
  }
  return notes;
}
saveNote(notepad);
console.log(notes);
//saveNote("Pick up groceries", 1);
//saveNote("Do laundry", 2);
function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return notes[i].content;
    }
  }
}

const firstNote = getNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted(); // should log out the text below

function addNote(newContent, newId) {
  notepad.push({ id: newId, content: newContent });
}

addNote("My new note number three", 3);
console.log(notepad);

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
