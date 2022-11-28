let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const music = require('../models/music');

//connect with musicModel

let Music = require('../models/music');
let musicController = require('../controller/music');
/* read operation*/
/* get route for music list*/

router.get('/', musicController.displayMusicList);

/*add operation*/
/*get route for displaying the add-page -- create operation*/
router.get('/add',musicController.displayAddPage);
/*post route for processing the add page -- part of create operation*/
router.post('/add', musicController.processAddPage);


/*edit operation*/
/*get route for displaying the edit operation -- update operation*/
router.get('/edit/:id', musicController.displayEditPage);
/*post route for displaying the edit operation -- part of create operation*/
router.post('/edit/:id', musicController.processEditPage);


/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/delete/:id', musicController.performDelete);

module.exports=router;