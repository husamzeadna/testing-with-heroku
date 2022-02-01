const express = require('express');
const path = require('path');
const cors = require('cors');
require('./db/mongoose')
const app = express();
const publicPath = path.join(__dirname,'client/build');
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(publicPath);
app.get('/api/users',(req,res)=>{
    try{
        res.status(200).send({username:'Bob',age:28})
    }catch (e){
        res.status(404).send({message:e.message})
    }
})
app.listen(port,() => {
    console.log('Listening on port ' + port);
})
