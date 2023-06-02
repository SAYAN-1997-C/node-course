const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.5.2')

//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        // console.log('Title : ' + argv.title)
        // console.log('Body : ' + argv.body)
        notes.addNote(argv.title , argv.body)
    } 
})

//Create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
       title : {
           describe : 'Note title',
           demandOption : true,
           type : 'string'
       }
    },
    handler(argv) {
        // console.log('Removing the note!'+argv.title)
        notes.removeNote(argv.title)
    }
}) 

//Create list command
yargs.command({
    command : 'list',
    describe : 'List your notes',
    handler() {
        //console.log('Listing out all note!')
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command : 'read',
    describe : 'Read a note',
    builder : {
      title : {
          command : 'Note title',
          demandOption : true,
          type : 'string',
      },  
    },
    handler(argv) {
        //console.log('Reading a note!')
        notes.readNote(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)