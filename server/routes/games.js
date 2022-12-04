let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const games = require('../models/games');

//connect with gamesModel

let Games = require('../models/games');
let gamesController = require('../controller/games');
/* read operation*/
/* get route for games list*/

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
}
next();
}

router.get('/', gamesController.displayGamesList);

/*add operation*/
/*get route for displaying the add-page -- create operation*/
router.get('/add',requireAuth,gamesController.displayAddPage);
/*post route for processing the add page -- part of create operation*/
router.post('/add',requireAuth, gamesController.processAddPage);


/*edit operation*/
/*get route for displaying the edit operation -- update operation*/
router.get('/edit/:id',requireAuth, gamesController.displayEditPage);
/*post route for displaying the edit operation -- part of create operation*/
router.post('/edit/:id',requireAuth, gamesController.processEditPage);


/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/delete/:id', gamesController.performDelete);

module.exports=router;