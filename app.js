const express = require("express")
const app = express()
const session = require("express-session")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const mongooseSession = require("mongoose-session")
const mongoose = require("mongoose")
const MongoClient = require("mongodb")
mongoose.Promise = require("bluebird")
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))

const URL = "mongodb://127.0.0.1:27017/profiles"

mongoose.connect(URL)

var sess = {
  secret: "keyboard cat",
  cookie: {},
  saveUninitialized: true,
  resave: true,
  store: mongooseSession(mongoose)
}
app.use(session(sess))

const main = require("./routes/main")
app.use(main)

const newProfile = require("./routes/newProfile")
app.use(newProfile)

app.listen(3000, function(req, res){
  console.log("Awww yeahh! We live on 3000!");
})
