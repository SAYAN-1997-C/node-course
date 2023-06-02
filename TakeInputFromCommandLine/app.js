
//console.log(process.argv)
//console.log(process.argv[2])
const yargs=require('yargs')
yargs.version('1.2.0')

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            command : 'title' ,
        }
    },
    handler : ()=>{
        console.log('Adding a new note...')
    } 
})
//create read command
yargs.command({
    command : 'read',
    describe : 'Reading the note',
    handler : ()=>{
        console.log('Reading the notes...')
    }
})

//create list command
yargs.command({
    command : 'list',
    describe  : 'Listing the note',
    handler : () =>{
        console.log('Listing the note')
    }
})
console.log(yargs.argv)