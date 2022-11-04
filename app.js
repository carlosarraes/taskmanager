const colors = require('colors');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const PORT = 3000;

//* Middleware
app.use(express.static('./public'));
app.use(express.json());

//? Routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    console.log('[MongoDB] started'.brightGreen.bold);
    app.listen(PORT, console.log(`Listening on: http://localhost:${PORT}/`.brightCyan.bold));
  } catch (error) {
    console.log((error.message).red.bold);
  }
};

start();
