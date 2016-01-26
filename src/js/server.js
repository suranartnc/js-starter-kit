import express from 'express';
import serverRendering from './serverRendering';

const app = express();
app.use(express.static('public'));

app.use(serverRendering);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});