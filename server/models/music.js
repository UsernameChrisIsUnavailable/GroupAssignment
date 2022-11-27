let mongoose = require('mongoose');
//create music model
let musicModel = mongoose.Schema({
    Song: String,
    Artist: String,
    Year: String,
    Genre: String,
    Rating: String
},
{
    collection: "music"
})
module.exports=mongoose.model('music', musicModel)

