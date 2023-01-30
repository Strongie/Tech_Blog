const router = require('express').Router();
const {Post, Comment} = require('../../models');


router.post('/', async(req,res)=>{
    try{
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    }catch(err){
        res.status(400).json(err);
    }
 } );

 router.delete('/', async(req,res)=>{
    try{
        const newPost = await Post.destroy({
            ...req.body,
            user_id: req.session.user_id,
        });

        if(!postData){
            res.status(404).json({message: 'No post found with this ID'});

        }

        res.status(200).json(postData);
    }catch(err){
        res.status(400).json(err);
    }
 } );
    
module.exports = router;