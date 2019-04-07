const express = require('express');
const app = express();
const port = 3002
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
const router = express.Router();
const cheerio = require('cheerio');
const fs = require('fs');
const http = require('http');
const JSON = require('circular-json');

/*******************************/
/************* STUFF ***********/
/*******************************/

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Cache-Control', 'no-cache')
//   next()
// })

// app.use(express.static('build'))

// define static resource server from local directory public (for any request not otherwise handled)
app.use("/", express.static(__dirname + "/"));

// app.use(express.static(__dirname + '/View')); //Store all HTML files in view folder.
// app.use(express.static(__dirname + '/Script')); //Store all JS and CSS in Scripts folder.

// app.use('/', router);




/*******************************/
/********* INDEX ROUTE *********/
/*******************************/

/* index.html */
app.get('/', function(req,res) {
	// res.send('Hello World!'))
	res.sendFile(path.join(__dirname + '/index.html'));
});


/*******************************/
/********** PROXY TEST *********/
/*******************************/

/* proxy */
app.get('/get-proxy', function(req,res) {
    var newurl = 'http://www.wikipedia.org';
	// request(newurl).pipe(res);
	// response.send(request.body);


	request(newurl, function (err, res, body) {

		if(err)
		{
			console.log(err, "error occured while hitting URL");
		}
		else
		{
			
			console.log(body); // succsessfully logging out html
			// res.send(res.body);
		}
	})
});


/*******************************/
/********* SCRAPING TEST *******/
/*******************************/

app.get('/scrape', function(req, res){

	const URL = "http://www.wikipedia.org";

	request(URL, function (err, res, body) {
		res.charset = null; 
		
			/* Crawl logo and slogan text only */

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

			/* Crawl enitire body */

			let $ = cheerio.load(body); 

			if(err)
			{
				console.log(err, "error occured while hitting URL");
			}
			else
			{
				  
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


			
	})
});


/*******************************/
/************* PORT ************/
/*******************************/

// app.set('port', process.env.PORT || 3002)
// app.listen(app.get('port'), () => {
// 	console.log('Server started at port: ', app.get('port'))
// })
app.listen('3002')
console.log('Magic happens on port 3002');
exports = module.exports = app;