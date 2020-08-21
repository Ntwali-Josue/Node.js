const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('./user');
const blogModel = require('./user');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/node_db',{
    useUnifiedTopology: true,
    useNewUrlParser:true});

app.use(User);

app.get('/get', (req, res) => {
    res.send('Hello,Welcome to my blog!')
});


app.get('/blogs', async (req, res) => {
    const blogs = await blogModel.find({});

    try {
      res.send(blogs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.post('/post', async (req, res) => {
      const article = new blogModel(req.body);
    
      try {
        await article.save();
        res.send(article);
      } catch (err) {
        res.status(500).send(err);
      }
  });
  
  module.exports = app
  

app.listen(5000, () =>{
    console.log('Server is running...')
});