let mongoose = require('mongoose');

let blogschema = new mongoose.Schema({
    blogdate : Date,
    blogimage : String,
    blogtitle : String,
    blogdescription : String,
    blogdescriptionnew : String,
    blogauthor : String,

    
    

    





});

let blogs = mongoose.model('blogs', blogschema);

module.exports = blogs;