// console.log('--> app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const titleOptions = {
  description: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  description: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read note with specified title', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = process.argv[2];

// console.log(argv);
// console.log(`Command: ${argv._[0]}`);



if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
  var note = notes.getNote(argv.title);

  if (note) {
    console.log("*** Note found.");
    notes.logNote(note);

  } else {
    console.log("*** ERROR: Title doesn't exist.");
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "*** ERROR: That title doesn't exists."

  console.log(message);

} else if (command === 'add') {
  var note  = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log("*** Note created.");
    notes.logNote(note);
  } else {
    console.log("*** ERROR: Title exists.");
  }
} else {
  console.log('Wrong command, dumb dawg.');

}
