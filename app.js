const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    builder: {

    },
    handler: function () {
        console.log('Listing out notes');
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading the note');
    }
});

yargs.parse();

