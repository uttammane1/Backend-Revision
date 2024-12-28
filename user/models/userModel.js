const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  password:{type:String, required:true}
},
  {
    versionKey:false
  }
)

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;