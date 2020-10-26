var express = require('express');
var router = express.Router();

const indexRouter=require('./v1/index');
const usersRouter=require('./v1/users');
const jobRouter=require('./v1/job');
const authRouter=require('./v1/auth');

/* GET home page. */
router.use('/', indexRouter);
router.use('/users',usersRouter);
router.use('/job', jobRouter);
router.use('/auth', authRouter);

module.exports = router;
