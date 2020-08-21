const express = require('express');
const blogModel = require('./user');
const app = express();

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
