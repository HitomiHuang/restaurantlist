const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  rating:{
    type: String
  },
  location: {
    type: String,
    required: true
  }, 
  google_map:{
    type: String,
  },
  phone:{
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  image:{
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Restaurant', restaurantSchema)