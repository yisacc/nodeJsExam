var router = require("express-promise-router")();

const  {authFormRequest} = require('../../middlewares/formRequest/auth')
const authController = require('../../controllers/authController')

/* GET users listing. */
router.post('/login', authController.login);
router.post('/signup',authFormRequest('createUser'), authController.signup);

module.exports = router;