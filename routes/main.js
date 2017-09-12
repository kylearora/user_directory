const express = require("express")
const router = express.Router()
const Profile = require("../models/Profiles")

router.get("/", function (req, res){
  console.log("Connected");
  Profile.find()
  .then(function(profile){
    res.render("index", {
      profile:profile
    })
  })
})


module.exports = router
