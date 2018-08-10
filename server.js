const express = require('express');
const mongoose = require('mongoose');
const server =  express();
server.use(express.json());
server.use(express.urlencoded({
    extend:false
}))
server.use('/uploads', express.static('images'));
server.use('/user',require('./routes/user'))
server.use('/post',require('./routes/post'))



server.listen(1221,()=>{
    console.log('http://localhost:1221')
})