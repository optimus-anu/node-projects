const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return "Your notes...";
}

//Add note handler
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
        console.log(chalk.inverse.green.bold('New Note Added!'));
    } else {
        console.log(chalk.inverse.red.bold('Note with the same title already present!'));
    }
    
    saveNotes(notes);
}

//Remove note handler
const removeNote = function (title) {
    const notes = loadNotes();
    const notesAfterRemoval = notes.filter(function(note) {
        return note.title !== title;
    });

    if(notesAfterRemoval.length === notes.length) {
        console.log(chalk.inverse.red.bold('No note found!'));
    } else {
        saveNotes(notesAfterRemoval);
        console.log(chalk.inverse.green.bold('Note removed!'))
    }

}

//save note utility function
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//Return All the notes present in notes.json
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
    addNote: addNote,
    removeNote: removeNote,
};