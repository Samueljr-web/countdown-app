require('express-async-errors');
require('dotenv').config();
const express = require('express');
const db = require('./database/db');
const cors = require('cors');
const HomepageRouter = require('./routes/homepageRoutes');
const notFound = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const countdownRouter = require('./routes/countdown');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h2>Lets Countdown!</h2>');
});

app.use('/api/v1', HomepageRouter);
app.use('/api/v1/countdown', cors(), countdownRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

// start the server
const start = async () => {
  const PORT = process.env.PORT || 3700;
  await db.connectToMongoDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
start();
