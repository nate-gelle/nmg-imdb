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

router.post('/', (req, res) => {
    console.log('Handling POST for /movies', req.body);
    const queryText = `INSERT INTO movies (name, genre, release, time)
                      Values ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.name, req.body.genre, req.body.release, req.body.time])
      .then((result) => {
        console.log(`Finished POST for movies`, result);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error handling POST for /heroes`, error);
        res.sendStatus(500);
      })
});

module.exports = router;