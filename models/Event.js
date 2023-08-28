const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventType: { type: String, required: true },
  isTentative:{type:Boolean,required:true},
  eventDateTime:{type:String,required:true}
});

module.exports = mongoose.model('Event', eventSchema);
