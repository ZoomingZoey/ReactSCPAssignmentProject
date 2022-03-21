// Bring in all dependencies
const express = require('express');
const path =  require('path');

// Create an instance of express.js
const app = express();

// Set the port to either the environment port set by heroku or to port 3001
const port = process.env.PORT || 3001;

// GET request for getting all SCP's from the database


// All GET requests that we do not handle will return the index.html page of the react app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../scp-client-app/build', 'index.html'));
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));