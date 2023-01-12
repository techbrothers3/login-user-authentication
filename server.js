const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users-routes')
const app = express();

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);

mongoose.connect("mongodb://localhost:27017/database",(err) =>{
    if(err) {
        console.log(err)
    } else {
        console.log('connected')
    }
})

app.listen(3000)


