const route = require('express').Router();
const mongoose = require('mongoose');
const Post = require('../modules/post');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req , file , done){
        done(null, '../images');
    },
    filename: function (req , file ,done) {
        done(null , new Date().toISOString + file.originalname);

    }
})

const fileFilter = function(req , file , done){
    if(file.mimetype === "image/jpeg" || file.mimetype==="image/png"){
        done(null,true)
    }
    else { done(null ,false)}
}
const  upload = multer({
    storage:storage,
    fileFilter:fileFilter
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