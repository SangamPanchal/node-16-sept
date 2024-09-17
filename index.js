const express = require('express');
const connection = require('./connection')
const student = require('./routes/student')
const app = express();
connection();
app.use(express.json())
app.use(student);



app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server is running on port 3000');
    }
})