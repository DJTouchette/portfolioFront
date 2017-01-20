const express = require('express');
const app = express();
const compression = require('compression');
const oneYear = 31557600000;

app.use(compression());
app.use(express.static('build', { maxAge: oneYear }));

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
