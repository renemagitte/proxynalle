const express = require('express');
const app = express();
const port = 3002
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
const router = express.Router();
const cheerio = require('cheerio');
const fs = require('fs');

// const http = require('http')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Cache-Control', 'no-cache')
//   next()
// })


// app.get('/', function(req,res) {
//     /* delivers google.com */
//     //   var newurl = 'http://google.com/';
// 	//   request(newurl).pipe(res);
	
// 	/* goes to index.html */
// 	res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.get('/get-proxy', function(req,res) {
//     /* delivers google.com */
//       var newurl = 'http://google.com/';
// 	   request(newurl).pipe(res);
// 	// response.send(request.body);
// });





// // app.use(express.static('build'))
// // app.get('/', (req, res) => res.send('Hello World!'))
// // app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.use("/", express.static(__dirname + "/"));
// app.use(express.static(__dirname + '/View'));
// //Store all HTML files in view folder.
// app.use(express.static(__dirname + '/Script'));
// //Store all JS and CSS in Scripts folder.

// app.use('/', router);
// app.set('port', process.env.PORT || 3002)

// app.listen(app.get('port'), () => {
// 	console.log('Server started at port: ', app.get('port'))
// })


/*****************************/
/******** ANOTHER TRY ********/
/*****************************/


// app.get('/www.google.com', function (req, res, next) {
//     http.get({
//         // host: request.params.host,
// 		// path: path,
// 		host: 'http://www.google.com',
// 		// path: 'http://www.google.com',
//         headers: {}
//     }, function(res) {
//         var body = '';

//         res.on('data', function(chunk) {
//             body += chunk;
//         });

//         res.on('end', function() {
// 			response.end(body);
//         });
//     }).on('error', function(e) {
//         console.log("Got error: ", e);
//     });
// });







/*****************************/
/******* SCRAPING TEST *******/
/*****************************/

// Scraping IMDB test, creates a json file but values are empty...

/*
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.get('/scrape', function(req, res){
url = 'http://www.imdb.com/title/tt1229340/';
request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);

    var title, release, rating;
    var json = { title : "", release : "", rating : ""};

    $('.header').filter(function(){
        var data = $(this);
        title = data.children().first().text();            
        release = data.children().last().children().text();

        json.title = title;
        json.release = release;
    })

    $('.star-box-giga-star').filter(function(){
        var data = $(this);
        rating = data.text();

        json.rating = rating;
    })
}

// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
res.send('Check your console!')

    }) ;
})

app.listen('3002')
console.log('Magic happens on port 3002');
exports = module.exports = app;
 */


/*******************************/
/******* SCRAPING TEST 2 *******/
/*******************************/

const JSON = require('circular-json');

app.get('/scrape-2', function(req, res){

	// const URL = "https://www.flipkart.com/search?q=mobiles";
	const URL = "http://www.wikipedia.org";

	request(URL, function (err, res, body) {
		if(err)
		{
			console.log(err, "error occured while hitting URL");
		}
		else
		{
			// const arr = []; 
			// let $ = cheerio.load(body); 
			// $('h1.central-textlogo > div.central-textlogo-wrapper').each(function(index){ 
				  
			// 	const data = $(this).find('div.central-textlogo__image').text();
			// 	const name = $(this).find('strong.localized-slogan').text();
			// 	const obj = { 
			// 		data : data, 
			// 		name : name 
			// 	}; 
			// 	console.log(obj); 
			// 	arr.push(JSON.stringify(obj)); 
			// }); 
			// console.log(arr.toString()); 
			// fs.writeFile('data.txt', arr, function (err) { 
			// 	if(err) { 
			// 		console.log(err); 
			// 	} 
			// 	else{ 
			// 		console.log("success"); 
			// 	} 
			// }); 
 
			let $ = cheerio.load(body); 
				  
			const data = $(this);
			const obj = { 
				data : data, 
			}; 
			console.log(obj); 

			const myJson = JSON.stringify(obj);

			fs.writeFile('data.txt', myJson, function (err) { 
				if(err) { 
					console.log(err); 
				} 
				else{ 
					console.log("success"); 
				} 
			}); 


			
		}
	});
})




app.listen('3002')
console.log('Magic happens on port 3002');
exports = module.exports = app;