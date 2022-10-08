const { Schema, model } = require('mongoose')

const linkSchema = new Schema({
  origin: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
})

const Link = model('Link', linkSchema)

module.exports = Link
