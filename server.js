const express = require('express');

const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static(__dirname + '/client', { type: 'text/javascript' }));



const db = new sqlite3.Database('./mydatabase.db');

app.get('/api/items', (req, res) => {
    db.all('SELECT * FROM todo_items', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.json(rows);
      }
    });
  });
  
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});