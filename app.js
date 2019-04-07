const express = require('express')
const app = express()
const port = 3002

// app.get('/', (req, res) => res.send('Hello World!'))


var request = require('request');
app.get('/', function(req,res) {
  var newurl = 'http://google.com/';
  request(newurl).pipe(res);
});

app.use(express.static('build'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



