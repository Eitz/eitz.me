import express from 'express';

import BlogController from './backend/lib/controllers/BlogController.mjs';
import PostController from './backend/lib/controllers/PostController.mjs';

var app = express();

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

// backend
app.use('/api/', [
  new BlogController().setupRoutes(),
  new PostController().setupRoutes()
]);

// frontend
app.use(express.static('frontend/build'));
app.use(webAppHandler);

function webAppHandler(req, res) {
  return res.sendFile('index.html', {root: 'frontend/build'});
}

app.listen(80, () => console.log('eitz.me listening on port 80!'));