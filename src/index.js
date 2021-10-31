require('./models/Article');
const express = require('express');
const mongoose = require('mongoose');
const articlesRoutes = require('./routes/articleRoutes');

const app = express();
app.use(express.json());
app.use(articlesRoutes);

const mongodbUri = 'mongodb://127.0.0.1:27017/reactnative-course';
mongoose.connect(mongodbUri);

mongoose.connection.on('connected', () => {
  console.log('Connect to mongodb');
});

mongoose.connection.on('error', (error) => {
  console.error(error);
});

app.get('/hello', (req, res) => {
  res.send('Hello there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
