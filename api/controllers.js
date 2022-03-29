// Import node-postgres
const { Pool } = require('pg');

// Connect to the postgres database hosted on the heroku server
// Production connection
/*
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
*/
// Development connection
const pool = new Pool({
  host: 'ec2-34-238-37-113.compute-1.amazonaws.com',
  port: 5432,
  database: 'dcepfkpnjt5993',
  user: 'irurpatymlkpri',
  password: 'b548bfb0627e3b871d1d6c0d84abf3ecec966bcdc19a2f1c3fb875251f36bc0c',
  ssl: { rejectUnauthorized: false },
  max: 20 // The max number of connections the postgres server can have at once is 20
});

// Used this documentation to help configure a connection to the pool and perform error handling:
// https://node-postgres.com/api/pool


// Create a container for all of the controllers
const controllers = {};

// Create the controller to deal with operations on SCP subjects
controllers.subjectController = {};

// handle getting all subjects
controllers.subjectController.selectAllSubjects = (callback) => {
  pool.connect((err, client, release) => {
    // check if we have an error connecting to a client in the pool
    if (err) {
      callback(500, {'Error': `Error acquiring client. ${err.stack}`});
      return console.error('Error acquiring client', err.stack);
    }

    // if we don't, perform the query
    client.query('SELECT * FROM scps', (err, result) => {
      // release the client
      release();
      // check if there was an error querying the data
      if (err) {
        callback(500, {'Error': `Error executing query. ${err.stack}`});
        return console.error('Error executing query', err.stack);
      }
      // otherwise use the data and callback with the data
      callback(200, result.rows);
    });
  });
};

// handle getting a single subject by its unique id value
controllers.subjectController.selectSubject = (id, callback) => {
  pool.connect((err, client, release) => {
    // check if we have an error connecting to a client in the pool
    if (err) {
      callback(500, {'Error': `Error acquiring client. ${err.stack}`});
      return console.error('Error acquiring client', err.stack);
    }

    // if we don't, perform the query
    client.query(`SELECT * FROM scps WHERE id = ${id}`, (err, result) => {
      // release the client
      release();
      // check if there was an error querying the data
      if (err) {
        callback(500, {'Error': `Error executing query. ${err.stack}`});
        return console.error('Error executing query', err.stack);
      }
      // check if the rows length is 0 if it is we have no data as no subject could be found with the specified id
      // so callback with an error
      if (result.rows.length === 0) {
        callback(404, {'Error': 'Subject not found'});
        return console.error('Error: Subject not found');
      }
      // otherwise use and callback with the single subject data in the first row at index 0
      callback(200, result.rows[0]);
    });
  });
};

// handle updating a single subject by its unique id value
controllers.subjectController.updateSubjectRating = (id, rating, callback) => {
  // if the rating is not set or not of type 'number' callback a 400 response
  if (!rating || typeof(rating) !== 'number') {
    callback(400, {'Error': 'Missing required fields'});
    return console.error('Error missing required fields');
  }

  pool.connect((err, client, release) => {
    // check if we have an error connecting to a client in the pool
    if (err) {
      callback(500, {'Error': `Error acquiring client. ${err.stack}`});
      return console.error('Error acquiring client', err.stack);
    }

    // if we don't, perform the query to check if the subject exists before trying to update its rating
    client.query(`SELECT * FROM scps WHERE id = ${id}`, (err, result) => {
      // check if there was an error querying the data
      if (err) {
        callback(500, {'Error': `Error executing query. ${err.stack}`});
        return console.error('Error executing query', err.stack);
      }
      // check if the rows length is 0 if it is we have no data as no subject could be found with the specified id
      // so callback with an error
      if (result.rows.length === 0) {
        callback(404, {'Error': 'Subject not found'});
        return console.error('Error: Subject not found');
      }
      // otherwise update the subject
      client.query(`UPDATE scps SET rating = ${rating} WHERE id = ${id}`, (err, result) => {
        // release the client
        release();
        // check if there was an error querying the data
        if (err) {
          callback(500, {'Error': `Error executing query. ${err.stack}`});
          return console.error('Error executing query', err.stack);
        }
        // otherwise callback success with an empty object
        callback(200, {});
      });
    });
  });
};

module.exports = controllers;


