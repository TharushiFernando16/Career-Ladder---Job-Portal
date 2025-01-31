let mongoose = require('mongoose');

let myschema = mongoose.Schema({
    jobpostedDate : Date,
    jlogo : String,
    jobtitle : String,
    address : String,
    vacancy : String,
    gender: String,
    salary: String,
    deadline :Date,
    jobregion : String,
    jobtype : String,
    jobdescription: String,
    experience: Number,
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRegister' } // Change userId to patientId

    





});

let listedjobs = mongoose.model('listedjobs', myschema);

module.exports = listedjobs;