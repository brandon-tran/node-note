console.log('--> note.js');

var addNote = (title, body) => {
  console.log('Adding note with title:', title, 'and body:', body);
};

var getAll = () => {
  console.log('Getting all nodes');
};

var removeNote = (title) => {
  console.log('Removing note with title:', title);
};

var getNote = (title) => {
  console.log('Reading note with title:', title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};
