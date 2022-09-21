require('dotenv').config()
require('cross-fetch/polyfill')

let user = {
    limit: 1
}

 const response = async () => {await fetch(process.env.API_URL, {
     method: 'POST',
     headers: {
          'Content-Type': 'text/plain;charset=utf-8',
          'Authorization':'Bearer ' + process.env.SECRET_API_KEY
        },
     body: JSON.stringify(user)
    })
 }

let result = async () => await response.json();
module.exports = result.message