const express = require('express');
const app = express();


app.use('/css', express.static('css'));
app.use('/script', express.static('script'));

app.get('', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000);
