const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Handling get movies request');
    let queryText = `SELECT * FROM movies ORDER BY id;`;
    pool.query(queryText)
      .then((result) => {
        console.log(`Finished GET server side for movies`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error handling GET for /heroes`, error);
        res.sendStatus(500);
      })
  });

  module.exports = router;