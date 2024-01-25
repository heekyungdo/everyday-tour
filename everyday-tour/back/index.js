const express = require('express');

const PORT = 8080;
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })