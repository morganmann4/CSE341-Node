// Express web server example
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello");
});
 
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});
 

// HTTP web server example
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080