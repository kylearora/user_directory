const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  name: {type:String, reuired:true},
  email: {type:String, require:true, unique:true},
  phone: {type:String, required:true, unique:true},
  age: {type:Number, required:true},
  avatar: {type:String, required:true},
  linkedIn: {type:String, required:true, unique:true},
  gitHub: {type: String, required:true, unique:true},
  website: {type: String},
  bio: {type:String, required:true},
  contributions: {type:String, required:true}
})

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile
