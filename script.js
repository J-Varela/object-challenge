//  Step 1: Create an array of objects called library
const library = [
  {
    title: 'Liftoff',
    author: 'Eric Berger',
    status: {
      own: true,
      reading: false,
      read: false
    },
  },

  {
    title: 'Decoding Greatness',
    author: 'Ron Friedman',
    status: {
      own: true,
      reading: false,
      read: false
    },
  },

  {
    title: 'Elon Musk',
    author: 'Walter Issacson',
    status: {
      own: true,
      reading: false,
      read: false
    },
  },
]; // We just created an array with 3 objects with the properties specified.

// Step 2: change the status of read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3: Destructure
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);