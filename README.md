# opensubtitles-rest-server

[![Build Status](https://travis-ci.org/ewnd9/opensubtitles-rest-server.svg?branch=master)](https://travis-ci.org/ewnd9/opensubtitles-rest-server)

REST wrapper over opensubtitles xmlrpc api

## Usage

```
$ git clone https://github.com/ewnd9/opensubtitles-rest-server.git
$ npm install --production
$ OS_USER_AGENT=OSTestUserAgent npm start
```

:warning: 'OSTestUserAgent' is intended only for the test usage. Use the [instruction](https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst) to get your own token.

## API

```js
$ curl "http://localhost:8000/api/v1/search/:imdb"
$ curl "http://localhost:8000/api/v1/search/:imdb/:s/:ep"
```

## License

MIT © [ewnd9](http://ewnd9.com)
