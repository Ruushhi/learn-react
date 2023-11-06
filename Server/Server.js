const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(cors())

app.post('/login', function(req, res){

    console.log(req.body)
    res.send('response bhetla re bhai');
})


app.listen(5000, ()=>{
    console.log('listening on port 5000');
})