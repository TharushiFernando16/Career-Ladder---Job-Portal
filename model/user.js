const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const docd = require('./docd');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  },
   role: {
        type: String,
        enum: ['user', 'company','admin'],
        default: 'user', 
  },
  month: {
    type: String,
    default: () => {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        return month;
    }
}
    
})

const User = mongoose.model("UserRegister", UserSchema);
module.exports = User;