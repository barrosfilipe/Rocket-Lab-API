const request = require('supertest'),
  app = require('../../src/app');

beforeAll(done => {
  app.on('ready', () => {
    done();
  });
});

test('It should return project info', async () => {
  const response = await request(app).get('/v1');
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({
    name: 'Rocket-Lab-API',
    version: '1.0.0',
    description: 'An Open Source REST API for rocket, pad and launch data',
    github: 'https://github.com/barrosfilipe/Rocket-Lab-API',
    author: 'Filipe Barros <filipebarrossi@gmail.com>',
    license: 'MIT'
  });
});

/* TODO */

test('It should return all launches', async () => {
  const response = await request(app).get('/v1/launches');
  expect(response.statusCode).toBe(200);
});

test('It should return latest launch', async () => {
  const response = await request(app).get('/v1/launches/latest');
  expect(response.statusCode).toBe(200);
});

test('It should return one launch', async () => {
  const response = await request(app).get('/v1/launches/1');
  expect(response.statusCode).toBe(200);
});
