const http = require('http') ;
const url = require('url') ;
const qs = require("querystring") ;
const {productDataHandler , userDataHandler} = require('./controller')

const handler = (req , res) => {

        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
        // if (req.method === 'OPTIONS') {
        //     res.writeHead(204);
        //     res.end();
        //     return;
        // }

        const parsedURL = url.parse(req.url);
        const path = parsedURL.pathname ;
        const querySel = qs.parse(parsedURL.query);
      
        switch(path){
            case '/' : 
            res.end(`<h1>Hi, ${querySel.name} Welcome to ${path} !!<h1>`);
            break;

            case '/productData' :
            if(req.method === 'GET') {
              productDataHandler(res,parsedURL)
            }   
            break; 

            case '/userData' : 
            if(req.method === 'GET') {
                userDataHandler(req,res,parsedURL)
              } 
            if(req.method === 'POST'){
                userDataHandler(req,res,parsedURL)
            }
            break;

            default : 
            res.end(`<h1>404 page not found !!<h1>`);

        }
      
}

http.createServer(handler).listen(8080 , () => {
    console.log('server started')
})


