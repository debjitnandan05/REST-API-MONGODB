const mongoose = require("mongoose");

// create a schema 
const userSchema = mongoose.Schema({
    id:{
        type: String,
        require : true
    },
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    createdOn:{
        type: Date,
        default:Date.now
    }
});

// create a model
module.exports =mongoose.model("User",userSchema);