const request = require ('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

var address = process.argv[2]

if(!address){
    console.log(chalk.red('Provide a address ! '))
}else{
    geocode(address, (error, {latitude, longitude, location}={}) => {

        if(error){
            return console.log(error)    
        }
        forecast(latitude,longitude, (error, forecastData) => {
            if(error){
               return console.log('Error :', error)
            }
            console.log(chalk.yellow.bold(location))
            console.log('Data :', forecastData)
          })
    })
}
