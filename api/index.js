// Bring in all dependencies
const express = require('express');
const path =  require('path');

// Create an instance of express.js
const app = express();

// Set the port to 3001
const port = 3001;

// All GET requests that we do not handle will return the index.html page of the react app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../scp-client-app/build', 'index.html'));
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));