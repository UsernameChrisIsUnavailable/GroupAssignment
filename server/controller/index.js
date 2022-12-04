let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req,res,next)=>{
        res.render('index', { title: 'Home'
      });
    }


    module.exports.displayLoginPage = (req, res, next) => {
      if (!req.user){
        res.render('auth/login'), {
          title: 'Login',
          messag: req.flash('loginMessage')
        }
      }
    }