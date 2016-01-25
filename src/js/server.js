import express from 'express';

const app = express();
app.use(express.static('public'));

app.use((req, res) => {
	const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React Router Boilerplate</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>    
  `
  res.send(HTML);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});