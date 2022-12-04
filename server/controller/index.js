let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let userModel = require('../models/user');
let user = userModel.user;

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', {
    title: 'Home'
  });
}


module.exports.displayLoginPage = (req, res, next) => {
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messag: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''

    })
  }
  else {
    return res.redirect('/')
  }
}
module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      req.flash('loginMessage', 'AuthenticationError');
    }
    req.login(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.redirect('/gameslist');
    })
  })(req, res, next)
}

module.exports.displayRegisterPage = (req, res, next) => {
  // check if user is not already logged in 
  if (!req.user) {
    res.render('auth/register', {
      title: 'Register',
      messag: req.flash('RegisterMessage'),
      displayName: req.user ? req.user.displayName : ''

    })
  }
  else {
    return res.redirect('/')
  }
}

module.exports.processRegisterPage = (req, res, next) => {
  let newUser = newUser({
    username: req.body.username,
    // password: req.body.password,
    email: req.body.email,
    displayName: req.body.displayName

  })
  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting the new user");

      if (err.name == "UserExistsError") {
        req.flash('registerMessage',
          'Registration Error: User Already Exists')
      }
      return res.render('auth/register',
        {
          title: 'Register',
          message: req.flash('registerMessage'),
          displayName: req.user ? req.user.displayName : ''

        });
    }
    else {
      // if registration is not sucessful
      return passport.autheticate('local')(req, res, () => {
        res.redirect('gamelist')
      })
    }
  })
}

module.exports.performLogout = (req, res, next) => 
  {
    req.logout();
    res.redirect('/')
  }
=======

module.exports.displayHomePage = (req,res,next)=>{
        res.render('index', { title: 'Home'
      });
    }
>>>>>>> db45015ce5d5859cf66e63c2c92aad0f96eebccb
