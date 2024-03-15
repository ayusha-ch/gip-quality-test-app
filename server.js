const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PDFDocument = require('pdfkit');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'HeOcB6012*%',
  database: 'quality',
  connectionLimit: 10 // Adjust the connection limit as needed
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// serve the one-step.js file
app.get('/public/one-step.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'public', 'one-step.js'));
});

// serve the two-step.js file
app.get('/public/two-step.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'public', 'two-step.js'));
});

app.get('/public/rap.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'public', 'rap.js'));
});

// path to public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));


// Handle form submissions

app.post('/submit-onestep', (req, res) => {
  const formData = req.body;
  const columns = Object.keys(formData).join(', ');
  const placeholders = Object.keys(formData).fill('?').join(', ');


  const sql = `INSERT INTO onestep (${columns}) VALUES (${placeholders})`;
  const values = Object.values(formData);
  
  // console.log('sql queries: ', sql)

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error submitting form.');
    }

    console.log('Form data inserted successfully!');
    return res.send('Form submitted successfully!');
  });
});

app.post('/submit-twostep', (req, res) => {
  const formData = req.body;
  const columns = Object.keys(formData).join(', ');
  const placeholders = Object.keys(formData).fill('?').join(', ');


  const sql = `INSERT INTO twostep (${columns}) VALUES (${placeholders})`;
  const values = Object.values(formData);
  
  // console.log('sql queries: ', sql)

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error submitting form.');
    }

    console.log('Form data inserted successfully!');
    return res.send('Form submitted successfully!');
  });
});

app.post('/submit-rap', (req, res) => {
  const formData = req.body;
  const columns = Object.keys(formData).join(', ');
  const placeholders = Object.keys(formData).fill('?').join(', ');


  const sql = `INSERT INTO rap_results (${columns}) VALUES (${placeholders})`;
  const values = Object.values(formData);
  
  // console.log('sql queries: ', sql)

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error submitting form.');
    }

    console.log('Form data inserted successfully!');
    return res.send('Form submitted successfully!');
  });
});

app.get('/getMaterials', (req, res) => {
  pool.query('SELECT id, source, product_type FROM master_aggregate_table', (err, results) => {
      if (err) {
          console.error('Error fetching data: ' + err.stack);
          return;
      }
      res.json(results);
  });
});

app.get('/getSources', (req, res) => {
  pool.query('SELECT id, source, product_type FROM master_aggregate_table', (err, results) => {
      if (err) {
          console.error('Error fetching data: ' + err.stack);
          return;
      }
      res.json(results);
      // console.log(results);
  });
});

app.get('/getSpecificationList', (req, res) => {
  pool.query('SELECT spec_name FROM specification', (err, results) => {
      if (err) {
          console.error('Error fetching data: ' + err.stack);
          return;
      }
      res.json(results);
  });
});

app.get('/getUsers', (req, res) => {
  pool.query('SELECT FirstName, LastName FROM user', (err, results) => {
      if (err) {
          console.error('Error fetching data: ' + err.stack);
          return;
      }
      res.json(results);
  });
});

app.get('/getJMF', (req, res) => {
  const { source, material } = req.query;
  const query = 'SELECT * FROM master_aggregate_table WHERE source = ? AND product_type = ?';

  pool.query(query, [source, material], (err, results) => {
      if (err) {
          console.error('Error fetching data: ' + err.stack);
          return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json(results);
  });
});

app.get('/getSpecification', (req, res) => {
  const { selectedSpec } = req.query;
  const query = 'SELECT * FROM specification WHERE spec_name = ?';

  pool.query(query, [selectedSpec], (err, results) => {
    if (err) {
      console.error('Error fetching data: ' + err.stack);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  })
})

app.get('/getAsphaltPlants', (req, res) => {
  pool.query('SELECT plant_name FROM asphalt_plant', (err, results) => {
      if (err) {
          console.error('Error fetching data: ' + err.stack);
          return;
      }
      res.json(results);
  });
});

// app.get('/getRAP', (req, res) => {
//   pool.query('SELECT source, product_type FROM master_aggregate_table WHERE source ILIKE $1', ['%rap%'], (err, results) => {
//     if (err) {
//       console.error('Error fetching data: ' + err.stack);
//       return;
//     }
//     res.json(results);
//     // console.log(results);
//   });
// });




const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


