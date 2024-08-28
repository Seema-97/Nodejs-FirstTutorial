const {productData , userData} = require('./data');

const qs = require("querystring") ;

const productDataHandler = (res , parsedURL) => {
    const querySel = qs.parse(parsedURL.query);

        res.end(JSON.stringify({
            message : `Hi, ${querySel.name} Welcome to ${parsedURL.pathname} !!`,
            status : 200,
            data : productData
        })); 

}

const userDataHandler = (req, res , parsedURL) => {
    const querySel = qs.parse(parsedURL.query);
    if(req.method === 'GET') {
        res.end(JSON.stringify({
            message : `Hi, ${querySel.name} Welcome to ${parsedURL.pathname} !!`,
            status : 200,
            data : userData
        })); 
    } 
    if(req.method === 'POST') {
        res.end(JSON.stringify({
            message : `Hi, your data is posted successfully !!`,
            status : 200,
        })); 
    } 
}


module.exports = {
    productDataHandler,
    userDataHandler
}


