let mongoose = require('mongoose');

let jobapplieshema = new mongoose.Schema({
    
    companyid : { type: mongoose.Schema.Types.ObjectId, ref: 'UserRegister' },
   
    jobid: { type: mongoose.Schema.Types.ObjectId, ref: 'listedjobs' } ,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRegister' },
    profileid : { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' },
    profilePic : String,
    createdAt: { type: Date, default: Date.now },
    experience : Number,
    selected : 0,
});

let jobapplies = mongoose.model('jobapplies', jobapplieshema);

module.exports = jobapplies;


