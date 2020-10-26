var express = require('express');
var router = express.Router();
var {addNewJob,getJobById,fetchJobs,editJob,deleteJob}=require('../../controllers/jobController');
const { hasPermissions } = require('../../middlewares/auth');

/* GET users listing. */
/**
 * @typedef USER
 * @property {string} jobTitle.required 
 * @property {string} email.required 
 * @property {string} password.required 
 */
/**
 * Returns ALL Users
 * 
 * @route GET /users
 * @group User - Deals with all CRUD operations with user model
 * @param {string} sort.query - sort parament
 * @param {string} page.query - set the page number
 * @param {string} filter.query - set filter query 
 * @security JWT
 * @returns {object} 200 - Array of users
 * @returns {Error}  default - Unexpected error
 */
router.route('/create').post(hasPermissions(['create job']),addNewJob);
router.route('/getJobs').get(fetchJobs);
router.route('/getJobById').get(getJobById);
router.route('/editJob').put(hasPermissions(['edit job']),editJob);
router.route('/deleteJob').delete(hasPermissions(['delete job']),deleteJob)

module.exports = router;
