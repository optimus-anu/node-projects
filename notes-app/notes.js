const fs = require('fs');
const chalk = require('chalk');
const getNotes = () =>  {
    return "Your notes...";
}

//Add note handler
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
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
const removeNote = (title) => {
    const notes = loadNotes();
    const notesAfterRemoval = notes.filter((note) => note.title !== title);

    if(notesAfterRemoval.length === notes.length) {
        console.log(chalk.inverse.red.bold('No note found!'));
    } else {
        saveNotes(notesAfterRemoval);
        console.log(chalk.inverse.green.bold('Note removed!'))
    }

}

//List Notes Handler
const listNotes = () => {
    const notes = loadNotes();
    if(notes.length!==0) {
        console.log(chalk.bold.inverse.blue("Your Notes"));
        notes.forEach((note) => {
            console.log(note.title);
        })
    } else {
        console.log(chalk.bold.inverse.yellow("You do not have any notes!"));
    }
    
}

//save note utility function
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//Return All the notes present in notes.json
const loadNotes = () => {
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
    listNotes: listNotes,
};