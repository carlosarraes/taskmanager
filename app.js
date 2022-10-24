const colors = require('colors');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const PORT = 3000;

//* Middleware
app.use(express.json())
app.use(express.static('./public'))

//? Routes
app.use('/api/v1/tasks', tasks)

app.listen(PORT, console.log(`Listening on: http://localhost:${PORT}/`.cyan))