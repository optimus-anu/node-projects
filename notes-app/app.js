const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0');

//add, remove, read, list

//create a add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Add Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//create a remove note
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Removes the note with the provided title',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
})

//create a list command 
yargs.command ({
    command: 'list',
    describe: 'List all notes',
    handler () {
        notes.listNotes();
    }
})

//create a read command
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    handler () {
        console.log('Reading a note');
    }
})

yargs.parse();