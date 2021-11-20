const express = require('express');
const mongoose = require('mongoose');

const Article = mongoose.model('Article');
const router = express.Router();

router.post('/article', async (req, res) => {
  const body = req.body;
  const article = new Article(body);
  try {
    await article.save();
  } catch (error) {
    console.error(error);
    return res.status(422).send(error);
  }
  res.send(article);
});

router.put('/article', (req, res) => {
  Article.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, article) => {
      res.send(article);
      if (err) {
        console.log(err);
      }
    }
  );
});

router.get('/articles', async (req, res) => {
  const articles = await Article.find();
  res.send(articles);
});

module.exports = router;
