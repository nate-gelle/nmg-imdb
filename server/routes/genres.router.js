const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Handling get genres request');
    let queryText = `SELECT * FROM genres ORDER BY id;`;
    pool.query(queryText)
      .then((result) => {
        console.log(`Finished GET for genres`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error handling GET for genres`, error);
        res.sendStatus(500);
      })
});

router.post('/', (req, res) => {
    console.log('Handling POST for /genres', req.body);
    const queryText = `INSERT INTO genres (name)
                      Values ($1);`;
    pool.query(queryText, [req.body.name])
      .then((result) => {
        console.log(`Finished POST for genres`, result);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error handling POST for genres`, error);
        res.sendStatus(500);
      })
});

module.exports = router;