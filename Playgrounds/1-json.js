const fs = require('fs')
// const book = {
//     title : 'Data Structure',
//     author : 'Morris Mano',
// }

// // const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)
// // //fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
console.log(dataJSON)

const user = JSON.parse(dataJSON)

user.name = 'sayan'
user.age= 24

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)