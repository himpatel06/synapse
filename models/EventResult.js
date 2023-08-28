const mongoose = require('mongoose');

const eventResultSchema = new mongoose.Schema({
  contestantName: { type: String, required: true },
  position: { type: String, required: true },
  eventName: { type: String, required: true },
});

module.exports = mongoose.model('EventResult', eventResultSchema);
