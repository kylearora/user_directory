const express = require("express")
const router = express.Router()
const Profile = require("../models/Profiles")

router.get("/new-profile", function(req, res){
  res.render("newProfile")
})

router.post("/new-profile", function(req, res){
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const age = req.body.age
  const avatar = req.body.avatar
  const linkedIn = req.body.linkedIn
  const gitHub = req.body.gitHub
  const website = req.body.website
  const bio = req.body.website
  const contributions = req.body.contributions
  const newProfile = new Profile()
  newProfile.name = name
  newProfile.email = email
  newProfile.phone = phone
  newProfile.age = age
  newProfile.avatar = avatar
  newProfile.linkedIn = linkedIn
  newProfile.gitHub = gitHub
  newProfile.website = website
  newProfile.bio = bio
  newProfile.contributions = contributions
  newProfile.save().then(function(profile){
    res.redirect("/")
  })
  .catch(function(error){
    console.log(error);
    res.render("newProfile", {
      profile:profile,
      error: error.errors
    })
  })
})


module.exports = router
