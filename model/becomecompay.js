let mongoose = require('mongoose');

let becomecompay = new mongoose.Schema({
    companyname : String,
    email : String,
    tagline : String,
   
    ccertificate: {
      type: String 
    },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRegister' } 

    
});

let becompay = mongoose.model('becomecompay', becomecompay);

module.exports = becompay;