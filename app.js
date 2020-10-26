const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose =require('./config/mongoose');

const versionOneRouter = require('./routes/v1.route');

const app = express();
const PORT=3333;

// open mongoose connection
mongoose.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1', versionOneRouter);


app.use('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);
app.listen(PORT,()=>{
  console.log(`Your server is running on port ${PORT}`)
})