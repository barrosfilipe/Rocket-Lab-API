const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const responseTime = require('response-time');
const createError = require('http-errors');
const MongoClient = require('mongodb');
const app = express();

/* Production read-only mongoDB */
const url =
  process.env.MONGO_URL ||
  'mongodb+srv://public:rocketlab@cluster0-vovr4.gcp.mongodb.net/rocketlab-api';

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

/* MongoDB Connection and Server Initialization */
(async () => {
  try {
    const client = await MongoClient.connect(
      url,
      { poolSize: 20, useNewUrlParser: true }
    );

    global.db = client.db('rocketlab-api');

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      app.emit('ready');
      console.log(`Rocket Lab API is Running on Port ${port}`);
    });
  } catch (err) {
    console.log(err.stack);
  }
})();

module.exports = app;
