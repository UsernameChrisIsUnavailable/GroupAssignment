let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const music = require('../models/games');

//connect with GamesModel

let Games = require('../models/games');

module.exports.displayMusicList = (req,res,next)=>{
    Games.find((err, Gameslist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('games/list',{
                title:'games', 
                Gameslist: Gameslist
            })
        }
    });
}

module.exports.displayAddPage =(req,res,next)=>{
    res.render('game/add',{title:'Add Game'})
}
module.exports.processAddPage = (req,res,next)=>{
    let newGame = Games ({
        "Name":req.body.Name,
        "Year":req.body.Year,
        "Genre":req.body.Genre,
        "Rating":req.body.Rating
    })
    Games.create(newGame,(err,Games) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gameslist');
        }
    })
}

module.exports.displayEditPage=(req,res,next)=>{
    let id = req.params.id;
    Games.findById(id, (err,gameToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('games/edit', {title:'Edit game',games:gameToEdit});
        }
    })
}

module.exports.processEditPage=(req,res,next)=>{
    let id=req.params.id;
    let updateGame = Games({
        "_id":id,
        "Name":req.body.Name,
        "Year":req.body.Year,
        "Genre":req.body.Genre,
        "Rating":req.body.Rating
    })
    Games.updateOne({_id:id},updateGames,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gameslist');
        }
    })
}

module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;
    Games.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gameslist');
        }
    })
}