const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
