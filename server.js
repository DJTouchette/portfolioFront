const express = require('express');
const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
