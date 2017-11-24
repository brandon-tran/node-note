console.log('--> app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note = require('./note.js');

const argv = yargs.argv;

var command = process.argv[2];

console.log(argv);
console.log(`Command: ${argv._[0]}`);

if (command === 'list') {
  note.getAll();
} else if (command === 'read') {
  note.getNote(argv.title);
} else if (command === 'remove') {
  note.removeNote(argv.title);
} else if (command === 'add') {
  note.addNote(argv.title, argv.body);
} else {
  console.log('Wrong command, dumb dawg.');

}
