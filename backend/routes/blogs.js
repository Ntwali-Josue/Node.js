const express = require('express')
const router = express.Router()
const blogs = require('../models/blog')

//getting all 
router.get('/', async(req,res)=>{
    try{
        const blog = await blogs.find()
        res.json(blog)
    } catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

// //getting article
// router.get('/:id',getblogs,(req,res) =>{
//     res.json(res.blog)
// })

//creating article
router.post('/create',async (req,res) =>{
    const blog = new blogs({
        author: req.body.author,
        content: req.body.content
      })
      try {
        const newblogs = await blog.save()
        res.status(201).json(newblogs)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})
// updating article
router.patch('/:id',getblogs, async(req,res) =>{
    if (req.body.author != null) {
        res.blog.author = req.body.author
      }
      if (req.body.content != null) {
        res.blog.content = req.body.content
      }
      try {
        const updatedblogs = await res.blog.save()
        res.json(updatedblogs)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }    
})
// deleting article
router.delete('/:id',getblogs, async(req,res) =>{
    try{
        await res.blog.remove()
        res.json({message: 'article Deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getblogs(req, res, next) {
    let blog
    try {
      blog = await blogs.findById(req.params.id)
      if (blog == null) {
        return res.status(404).json({ message: 'Cannot find your article' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
    res.blog = blog
    next()
  }


module.exports = router