require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8081;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth')

const errorHandler = require('./handlers/error')

app.use(cors());

app.use(bodyParser.json());

app.use('/api/auth', authRoutes)
// all my routes here 

app.use(function(req, res, next){
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})