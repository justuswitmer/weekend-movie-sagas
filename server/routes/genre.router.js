const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const queryString = `SELECT * FROM "genre";`;
  pool.query(queryString)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in GETting genres', err);
      res.sendStatus(500);
    });
});

module.exports = router;