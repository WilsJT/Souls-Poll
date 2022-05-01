const express = require("express")
const mongoose = require("mongoose")
const Poll = require("./models/poll")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const dbURI = "mongodb+srv://guest:guest1234@cluster0.zgdic.mongodb.net/node?retryWrites=true&w=majority"
mongoose.connect(dbURI)
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  Poll.findById("626cce1c5e8dd22df0807895")
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.post("/", (req, res) => {
  const poll = new Poll(req.body)
  poll.isNew = false

  poll.save()
    .catch((err) => {
      console.log(err)
    })
})
