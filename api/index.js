const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));