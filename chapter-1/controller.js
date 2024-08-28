const qs = require("querystring");
const {Data , username} = require('./data') ;
const {userDetails} = require( './userData')

const homeController = (req , res , parsedURL) => {
    console.log("Nodejs !") ;
    const qry = qs.parse(parsedURL.query);
    console.log(qry)
    res.write(`<h1>My first Node js Server ,and its req.url is ${req.url}</h1>`) ;
    res.end()
}

const dataController = (req, res ) => {
    res.end(JSON.stringify({
        status: 200,
        data: Data,
        username : username
    }))
}


const userDataController = (req ,res) => {
    res.end(JSON.stringify ({
        status : 200 ,
       userDetails : userDetails
    }))
}

module.exports = {
    homeController,
    dataController,
    userDataController 
}