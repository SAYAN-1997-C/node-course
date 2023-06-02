const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'your notes......'
}

const addNote = (title,body) => {
    const notes = loadNotes()
    // console.log(notes)
    // const duplicateNotes = notes.filter( function(note) {
    //     return note.title === title
    // })
    //const duplicateNotes = notes.filter((note) => note.title === title )
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    //if(duplicateNotes.length === 0)
    if(!duplicateNote) //if(duplicateNote === undefined)
    {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added!'))
    }
    else{
        console.log(chalk.red.bold.inverse('Note title taken!'))
    }
}
const removeNote = (title) => {
    const notes=loadNotes()
    const notesToKeep = notes.filter((note) => note.title!=title)
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse('Note removed!'))

    }
    else{
        console.log(chalk.red.bold.inverse('This Note not found!'))
    }
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes : '))

    notes.forEach((note) => {
       console.log(chalk.yellow(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)
    
    if(findNote)
    {
        console.log('Title ' + chalk.yellow(findNote.title))
        console.log('Body : '+ chalk.yellow(findNote.body))
    }
    else
    {
        console.log(chalk.red('Note is not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =  () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}



module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}