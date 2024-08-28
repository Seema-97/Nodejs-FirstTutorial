const http = require("http") ;
const url = require("url") ;   // will get url module
// console.log(url)

const qs = require("querystring");
const {Data , username} = require('./data') ;

// console.log(Data) ;


http.createServer(function(req , res) {
  
    const parsedURL = url.parse(req.url) ; // req.url: This is typically the URL part of the incoming HTTP request. It might look something like /path?name=value.
    // console.log(parsedURL) ; // It will be an object containing various properties representing different parts of the URL.

    const path = parsedURL.pathname; 
    const method = req.method.toUpperCase()


       // Set CORS headers
       res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
       res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   
       if (req.method === 'OPTIONS') {
           res.writeHead(204);
           res.end();
           return;
       }

    if(path === '/'){
        console.log("Nodejs !") ;
        const qry = qs.parse(parsedURL.query);
        console.log(qry)
        res.write(`<h1>My first Node js Server ,and its req.url is ${req.url}</h1>`) ;
        res.end()
    }
    else if(path === '/data' && method === 'GET'){
        
        // res.write(`<h1>My first Node js Server ,and its req.url is ${req.url}</h1>`) ;

        res.end(JSON.stringify({
            status: 200,
            data: Data,
            username : username
        }))

    }

}).listen( 8000 , function() {
  console.log("Server Started");
})