const express = require('express');

// localhost:8500
const PORT = 8500;

const app = express();


function serveHomePage( request, response ) { 
  return response.send('Hello There');
}

function serveFakeWeather( request, response ) { 
  return response.send('Dark and Stormy Night');
}

app.get('/', serveHomePage );
app.get('/weather', serveFakeWeather );

app.listen( PORT ); 


console.log('The server is running on port' + PORT );

