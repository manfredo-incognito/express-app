const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');
var request = require('request');

var apiServerHost = 'https://www.beautylish.com/rest/';


app.post('/', function(req, res) {  
  var url = apiServerHost + req.url;
  req.pipe(request(url)).pipe(res);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


app.use(express.static('public'))

// create a GET route
/*app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});*/
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
/*app.post('https://www.beautylish.com/rest/interview-variant',function(req,res){
  //var user_name=req.body.user;
  //var password=req.body.password;
  //console.log("User name = "+user_name+", password is "+password);
  //res.end("yes");
  console.log('ddd');
});*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*app.use('/', function(req, res) {  
  var url = apiServerHost + req.url;
  req.pipe(request(url)).pipe(res);
});*/

app.get('https://www.beautylish.com/rest/interview-variant', function(req, res, next) {
  console.log('help get');
  // Handle the get for this route
});

/*app.post('/', function(req, res, next) {
 // Handle the post for this route
 request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
        res.json(body)
      });
 console.log('help post');
});*/
app.post('/', function(req, res) {

  
console.log('help post');
  console.log(req.body);
  res.send(200);
});