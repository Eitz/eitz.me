import express from 'express';

import BlogController from './lib/controllers/BlogController.mjs';
import PostController from './lib/controllers/PostController.mjs';

var app = express();

app.use('/api/', [
  new BlogController().setupRoutes(),
  new PostController().setupRoutes()
]);

app.get('/', (req, res) => res.send(`
  <!doctype HTML>
  <html>
    <head>
      <meta http-equiv="refresh" content="5; url=https://github.com/Eitz" />
      <style>
        h3 {
          text-align: center; margin-top: 100px; font-family: Arial; font-weight: normal;
        }
      </style>
    </head>
    <body>
      <h3>
        Hello World from my DigitalOcean droplet test! <br /><br />
        Redirecting you to my Github in 5 seconds 😁 or just click <a href="https://github.com/Eitz">here</a>!
      </h3>
    </body>
  </html>
`));

app.use(notFoundHandler);

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

function notFoundHandler(req, res) {
  return res.status(404).send('404');
}
