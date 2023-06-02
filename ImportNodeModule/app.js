const validator = require('validator')
const chalk = require('chalk')

console.log(validator.isEmail('sayanjashu@gmail.com'))
console.log(validator.isURL('https://a.com'))
console.log(validator.matches('foo','foookkpopok'))

console.log(chalk.green('success'))
console.log(chalk.inverse.bold('sayanjashu'))

console.log(chalk.bold.inverse('Susanta Jashu'))

var a=20,b=30

if(a>b)
{
    console.log(chalk.white('success'))
    console.log(chalk.bgGreen('success'))
}
else{
    console.log(chalk.red('faliure'))
    console.log(chalk.bgRed('failure'))
}
