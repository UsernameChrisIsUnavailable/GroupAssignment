let mongoose = require('mongoose');
//create music model
let gamesModel = mongoose.Schema({
    Song: String,
    Year: String,
    Genre: String,
    Rating: String
},
{
    collection: "games"
})
module.exports=mongoose.model('games', gamesModel)

