const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Handling get movies request');
    let queryText = `SELECT * FROM movies`;
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
    const queryText = `INSERT INTO movies (title, genre, release, time)
                      Values ($1, $2, $3, $4)
                      RETURNING id;`;
    pool.query(queryText, [req.body.title, req.body.genre[0], req.body.release, req.body.time])
      .then((result) => {

        const queryTextJ = `INSERT INTO junction (genre_id, movie_id)
                            Values ($1, $2);`;
        pool.query(queryTextJ, [req.body.genre[1], result])
          .then((result) => {
            res.sendStatus(200);
          })
          .catch((error) => {
            console.log(`Error handling POST for /heroes`, error);
            res.sendStatus(500);                   
      //   console.log(`Finished POST for movies`, result);
      //   res.sendStatus(200);
          })
      })
});

router.delete('/:id', (req, res) => {
    console.log('Handling delete request in /movies router');
    const id = req.params.id;
    const queryText = `DELETE FROM movies WHERE id=$1`;
    pool.query(queryText, [id])
    .then((result) => {
      console.log('Successful deletion of movie', result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error handling DELETE request for /movie ${error}`);
      res.sendStatus(500);
    })
});
  

module.exports = router;