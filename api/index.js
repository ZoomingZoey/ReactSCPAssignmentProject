// For creating the backend node server I referred to this tutorial:
https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/



// Bring in all dependencies
var express = require('express');
const path =  require('path');
const { subjectController } = require('./controllers');

// Create an instance of express.js
const app = express();

// Set the port to either the environment port set by heroku or to port 3001
const port = process.env.PORT || 3001;

// Have the node server serve the files for the built React app
app.use(express.static(path.resolve(__dirname, '../scp-client-app/build')));
// Tell express to parse all incoming data as json (needed for the PUT request)
app.use(express.json());

// GET request for handling the /api/scps route
app.get('/api/scps', (req, res) => {
  subjectController.selectAllSubjects((statusCode, data) => {
    res.statusCode = statusCode;
    res.json(data);
  });
});

// GET request for handling the /api/scps/:id route
app.get('/api/scps/:id', (req, res) => {
  const id = req.params.id;
  subjectController.selectSubject(id, (statusCode, data) => {
    res.statusCode = statusCode;
    res.json(data);
  });
});

// PUT request for handling the /api/scps/:id route
app.put('/api/scps/:id', (req, res) => {
  const id = req.params.id;
  // if the rating value is set (not undefined or null) use its value otherwise it is false
  const rating = req.body.rating ? req.body.rating : false;
  subjectController.updateSubjectRating(id, rating, (statusCode, data) => {
    res.statusCode = statusCode;
    res.json(data);
  });
});

// GET request for accessing and servingimage files
app.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.resolve(__dirname, './images', filename));
});

// All GET requests that we do not handle will return the index.html page of the react app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../scp-client-app/build', 'index.html'));
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));