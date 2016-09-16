'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const OpenSubtitles = require('opensubtitles-universal-api');
const api = new OpenSubtitles('OSTestUserAgent');

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/v1/search/:imdb/:s?/:ep?', (req, res, next) => {
  const { imdb, s, ep } = req.params;

  const query = {
    imdbid: imdb
  };

  if (s && ep) {
    query.season = +s;
    query.episode = +ep;
  }

  api.token = null; // @TODO proper validation

  api
    .search(query)
    .then(result => {
      res.json(result);
    })
    .catch(err => next(err));
});

app.use(function(err, req, res, next) { // always last
  if (!err) {
    return next();
  }

  console.log(err.stack || err);
  res.status(err.status || 500).json({ status: 'error' });
});

if (module.parent) {
  module.exports = app;
} else {
  app.listen(port, () => console.log(`localhost:${port}`));
}
