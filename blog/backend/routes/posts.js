 
 const express =  require('express');

 const router = express.Router()
 const Post = require('../models/post');
 



 // Get All Post

 router.get('/', async (req, res) =>{
    try {
        const posts =  await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message})  
        
    }
 })




 //Get a single post by ID

 router.get('/:id',async (req, res ) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json ({message: "Post Not Found"});
            
        } 
        res.json(post);
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
        
    }
 })



 //Create  a new Post 

 router.post('/', async (req, res) => {
    const newPostData = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
        image: req.body.image,

    });
    try {
        const newPost = await newPostData.save();
        res.status (201).json(newPost);
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }





 })




 //UpDate Post


 router.put('/:id',async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json ({message: "Post Not Found"});
            
        } 

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        post.category = req.body.category || post.category;
        post.author = req.body.author || post.author;
        post.image = req.body.image || post.image;
        post.updateAt = Date.now();

        const UpdatedPost = await post.save();
        res.json(UpdatedPost);

    } catch (error) {
        return res.status(400).json ({message: "Post Not Found"});
        
    }
 } )




 

// Delete a Post 
router.delete('/:id', async (req, res) => { 
    try {
        
        const deletedPost = await Post.findByIdAndDelete(req.params.id); 
        
        if (!deletedPost) {
            return res.status(404).json({ message: "Not Post Here!" });
        } 
        
        res.json({ message: "Post Deleted Successfully" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





 module.exports = router;