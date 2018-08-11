const route = require('express').Router();
const mongoose = require('mongoose');
const Post = require('../modules/post');
const multer = require('multer');
const upload = multer({
    dest:"../images/"
})

mongoose.connect('mongodb://localhost:27017')

route.get('/',(req , res)=>{

    Post.find({}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({error:err})
    })
})
route.post('/post',upload.single("image"),( req , res)=>{
   /* const post = new Post({title:req.body.title})
    post.save().then((data)=>{
        res.send(data)
    })*/
   res.send(req.file)




})
module.exports = route;