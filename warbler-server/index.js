const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8081;
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

// all my routes here 

app.use(function(req, res, next){
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})