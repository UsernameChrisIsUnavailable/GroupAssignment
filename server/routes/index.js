let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/*get home page */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/login', indexController.displayLoginPage); //getting router 
router.get('/login', indexController.processLoginPage); //posting router 
router.get('/register', indexController.displayRegisterPage); //getting register page
router.get('/register', indexController.processRegisterPage); //posting register page  
router.get('/logout', indexController.processLogoutPage); 

module.exports = router;
