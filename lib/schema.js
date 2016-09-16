'use strict';

const t = require('tcomb');

module.exports = t.dict(
  t.String,
  t.list(
    t.struct({
      url: t.String,
      lang: t.String,
      downloads: t.Number,
      score: t.Number,
      subFilename: t.String,
      releaseFilename: t.String,
      date: t.String,
      encoding: t.String
    })
  )
);
