import express from 'express';

import BlogController from './lib/controllers/BlogController.mjs';
import PostController from './lib/controllers/PostController.mjs';

var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// backend
app.use('/api/', [
  new BlogController().setupRoutes(),
  new PostController().setupRoutes()
]);

// frontend
app.get('/', (req, res) => res.sendFile('index.html', {root: 'frontend/build'}));
app.use(express.static('frontend/build'));

app.use(notFoundHandler);

app.listen(80, () => console.log('eitz.me listening on port 80!'));

function notFoundHandler(req, res) {
  return res.status(404).send('404');
}
