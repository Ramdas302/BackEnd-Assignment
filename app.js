const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
var mongoose =require('./database/mongoose');

app.use(express.json());
const Imagedata = require('./controller/ImageData');
app.use(bodyParser.json());
app.use('/api', Imagedata);
app.listen(3000,() => console.log('server started at port 3000'));
