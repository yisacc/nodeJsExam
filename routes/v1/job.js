var express = require('express');
var router = express.Router();
var {addNewJob,getJobById,fetchJobs,editJob,deleteJob}=require('../../controllers/jobController');
const { hasPermissions } = require('../../middlewares/auth');

/**
 * Create a new user 
 * 
 * @route POST /users/
 * @group Job 
 * @param {Job.model} Job.body.required - the new user
 * @security JWT
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.route('/create').post(hasPermissions(['create job']),addNewJob);

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about Job
 * @returns {object} 200 - An array of Job info
 * @returns {Error}  default - Unexpected error
 */
router.route('/getJobs').get(fetchJobs);
router.route('/getJobById').get(getJobById);
router.route('/editJob').put(hasPermissions(['edit job']),editJob);
router.route('/deleteJob').delete(hasPermissions(['delete job']),deleteJob)

module.exports = router;
