const express = require("express");
const cors = require('cors');

const {productData , userData} = require('./data')

const app = express();
app.use(cors());
const port = 3050;

app.use(express.urlencoded({ extended: true })); // it makes req.body accessible
app.use(express.json()); // after accessible it converts in json automatically

app.get("/", (req, res) => {
//   const qry = req.query;
//   console.log(qry);
//   res.send(`<h1>Welcome to Nodejs</h1>`);
  res.json({messeage : 'Welcome to Nodejs'})
});

app.get('/productData' , (req,res) => {
  
    // res.json({
    //     status: 200 ,
    //     data : productData
    // })
    res.status(200).json(productData)

})

let receivedUserData = {}

app.get("/form", (req, res) => {
    res.status(200).send(receivedUserData)
})


app.post("/form", (req, res) => {
    let data = req.body;
    receivedUserData = {...data}
    console.log(data);

    if (data?.username || data?.userContact) {
        res.status(200).json({
            message: "success"
        })
    } else {
        res.status(500).json({
            message: "error"
        })
    }

})

app.delete("/form" , (req,res) => {
  
})


app.listen(port, () => {
  console.log(`Server started ${port}`);
});
