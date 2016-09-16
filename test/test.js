import test from 'ava';
import 'babel-core/register';

import http from 'http';
import { agent } from 'supertest';

import schema from '../lib/schema';
import { validate } from 'tcomb-validation';

test.beforeEach(async t => {
  const app = require('../lib/');

  const server = http.createServer(app);
  server.listen(() => console.log(`listen localhost:${server.address().port}`));

  t.context.server = server;
  t.context.agent = agent(server);
});

test.afterEach(t => {
  t.context.server.close();
});

test('GET /api/v1/search', async t => {
  const res = await t.context.agent.get(`/api/v1/search/tt0411008/1/1`);
  t.truthy(res.status === 200);

  const val = validate(res.body, schema);
  t.truthy(val.isValid() === true);
});
