let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const music = require('../models/music');

//connect with musicModel

let Music = require('../models/music');

module.exports.displayMusicList = (req,res,next)=>{
    Music.find((err, Musiclist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('music/list',{
                title:'music', 
                Musiclist: Musiclist
            })
        }
    });
}

module.exports.displayAddPage =(req,res,next)=>{
    res.render('music/add',{title:'Add Song'})
}
module.exports.processAddPage = (req,res,next)=>{
    let newSong = Music ({
        "Song":req.body.Song,
        "Artist":req.body.Artist,
        "Year":req.body.Year,
        "Genre":req.body.Genre,
        "Rating":req.body.Rating
    })
    Music.create(newSong,(err,Music) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/musiclist');
        }
    })
}

module.exports.displayEditPage=(req,res,next)=>{
    let id = req.params.id;
    Music.findById(id, (err,musicToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('music/edit', {title:'Edit Song',music:musicToEdit});
        }
    })
}

module.exports.processEditPage=(req,res,next)=>{
    let id=req.params.id;
    let updateSong = Music({
        "_id":id,
        "Song":req.body.Song,
        "Artist":req.body.Artist,
        "Year":req.body.Year,
        "Genre":req.body.Genre,
        "Rating":req.body.Rating
    })
    Music.updateOne({_id:id},updateSong,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/musiclist');
        }
    })
}

module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;
    Music.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/musiclist');
        }
    })
}