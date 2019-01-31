const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Team', teamSchema)
