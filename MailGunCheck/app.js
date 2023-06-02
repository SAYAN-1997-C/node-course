var api_key = '031fa185bef66a7472cdb9d0a40413da-1f1bd6a9-4701cb83';
var domain = 'sandboxf8ba6a17cfcf43b1a5308ed9952138cf.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  
const send = (cb) => {
  var data = {
    from: 'sayanjashu365@gmail.com',
    to: 'sayanjashu@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  };
  mailgun.messages().send(data, (error,body) => {
    if(error) {
      return cb('Interact User',undefined)
    }
    cb(undefined,'ok') 
  });
}

send((error,data) => {
  if(error) {
    return console.log(error)
  }
  console.log(data)
})