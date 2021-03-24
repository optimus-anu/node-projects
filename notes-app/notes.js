const fs = require('fs');
const getNotes = function () {
    return "Your notes...";
}
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        console.log('New Note Added!');
    } else {
        console.log('Title already present');
    }
    
    saveNotes(notes);
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    } 
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};