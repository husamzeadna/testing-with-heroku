const express = require('express');
const cors = require('cors');
require('./db/mongoose')
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
// app.use(express.json());
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
