const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dsSchema = new Schema({
  ds1: {
    type: Number,
    required: true
  },
  ds2: {
    type: Number,
    required: true
  },
  ds3: {
    type: Number,
    required: true
  },
  elden: {
    type: Number,
    required: true
  },
  bloodborne: {
    type: Number,
    required: true
  },
  demon: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const Poll = mongoose.model("poll", dsSchema)

module.exports = Poll
