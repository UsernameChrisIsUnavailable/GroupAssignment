let mongoose = require('mongoose');
let passportLocalMongoose =require("passport-local-mongoose");

let User = mongoose.Schema({
    Username:
    {
        type:String,
        default:"",
        trim:true,
        required:'Username is required'

    },
    /*
    password:
    {
         type:String,
        default:"",
        trim:true,
        required:'Username is required'
    }*/
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:'Displayname is required'

    },
    created:{
        type:Date,
        default: Date.now,
    },
    update:{
        type:Date,
        default: Date.now,
    }
},
{
    collection: "User"
}
)

//configure options for usermodel
let options = ({MissingPasswordError:'Wrong or missing password'});
User.plugin(passportLocalMongoose,options);
module.exports.User=mongoose.model('User',User)

