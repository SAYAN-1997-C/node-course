const request = require('request')
const chalk = require('chalk')

const geocode = (address,callback) => {
    
    const url = 'http://api.positionstack.com/v1/forward?access_key=fa15065c811a14ea7868789fc47f2ff8&query='+address+'&limit=1'

    request({url,json :true},(error, {body}={} ) => {

        if(error){
            callback(chalk.red('Unable to connect to location service !'),undefined)
    
        }else if(body.data === undefined){
            callback(chalk.red('Unable to find location ! Try another search.'),undefined)
        }else{
            console.log(body)
            callback(undefined,{
                latitude : body.data[0].latitude,
                longitude : body.data[0].longitude,
                location : body.data[0].name +", "+ body.data[0].region +", " +body.data[0].country

            })
        }
    })
}

module.exports = geocode