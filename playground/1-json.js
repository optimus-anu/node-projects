const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author);

let dataJSON = fs.readFileSync('1-json.json').toString();
const data = JSON.parse(dataJSON);
data.name = 'Anurag Singh';
data.age = 24;
dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON); 