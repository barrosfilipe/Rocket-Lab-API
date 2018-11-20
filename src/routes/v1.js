const express = require('express');
const v1 = express.Router();

/* Controllers */
const info = require('../controllers/v1/info');
const launches = require('../controllers/v1/launches');
const payloads = require('../controllers/v1/payloads');
const rockets = require('../controllers/v1/rockets');

/* Info routes */
v1.get('/', info.index);

/* Rocket routes */
v1.get('/rockets', rockets.all);

/* Launch routes */
v1.get('/launches', launches.all);
v1.get('/launches/latest', launches.latest);
v1.get('/launches/:flight_number', launches.one);

/* Payload routes */
v1.get('/payloads', payloads.all);
v1.get('/payloads/:name', payloads.one);

module.exports = v1;
