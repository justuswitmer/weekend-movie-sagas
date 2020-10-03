const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movie" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
    .then(result => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id

      // Depending on how you make your junction table, this insert COULD change.
      const insertMovieGenreQuery = `
      INSERT INTO "junction" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})

router.get('/', (req, res) => {
  const queryString = `SELECT * FROM "movie" ORDER BY "id" DESC;`;
  pool.query(queryString)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in GETting movies', err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  console.log('in router.get details', req.params.id);
  const queryText = 'SELECT * FROM movie JOIN junction ON movie.id = junction.movie_id JOIN genre ON junction.genre_id=genre.id WHERE movie.id=$1;';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT detail query', err);
      res.sendStatus(500);
    });
});

module.exports = router;