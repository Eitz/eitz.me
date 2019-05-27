var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(`
    <head>
      <meta http-equiv="refresh" content="5; url=https://github.com/Eitz" />
    </head>
    <body>
      <h3 style="text-align: center; margin-top: 100px; font-family: Arial; font-weight: normal;">
        Hello World from my DigitalOcean droplet test! <br /><br />
        Redirecting you to my Github in 5 seconds 😁 or just click <a href="https://github.com/Eitz">here</a>!
      </h3>
    </body>`);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});