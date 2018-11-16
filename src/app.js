const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const responseTime = require('response-time');
const createError = require('http-errors');
const app = express();

/* Import routes */
const routes_v1 = require('./routes/v1');

/* HTTP enhancements */
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(responseTime());

/* Use routes */
app.use('/v1', routes_v1);

/* Catch 404 and forward to error handler */
app.use((req, res, next) => {
  next(createError(404));
});

/* Error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: 'No results found' });
});

module.exports = app;

/* Server listener */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Rocket Lab API is Running on Port ${process.env.PORT || 3000}`);
  app.emit('ready');
});
