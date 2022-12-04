let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/*get home page */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
<<<<<<< HEAD
router.get('/login', indexController.displayLoginPage); //getting router 
router.get('/login', indexController.processLoginPage); //posting router 
router.get('/register', indexController.displayRegisterPage); //getting register page
router.get('/register', indexController.processRegisterPage); //posting register page  
router.get('/logout', indexController.processLogoutPage); 
=======
>>>>>>> db45015ce5d5859cf66e63c2c92aad0f96eebccb

module.exports = router;
