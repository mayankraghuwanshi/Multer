const route = require('express').Router();
const mongoose = require('mongoose');
const User = require('../modules/user');
mongoose.connect('mongodb://localhost:27017')

route.get('/',(req , res)=>{
    User.find({}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({error:err})
    })
})

module.exports = route;