const express = require('express');
const mongoose = require('mongoose');
const server =  express();
server.use(express.json());
server.use(express.urlencoded({
    extend:true
}))


mongoose.connect('mongodb://localhost:27017')
server.listen(1221,()=>{
    console.log('http://localhost:1221')
})