const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Url = require('./routers/url');
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Qr-codify')
.then(()=>{
	console.log('dbconnected')
}).catch((err)=>{
	console.log(err)
})

app.use(express.json());
app.use(cors());
app.use('/api/url',Url);

app.listen(5000,()=>{
    console.log('server is running on port: '+5000)
})