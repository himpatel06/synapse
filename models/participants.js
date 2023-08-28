const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  participantName: { type: String, required: true },
  eventName: { type: String, required: true },
  collegeName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  emailId:{type:String,required:true}
});

module.exports = mongoose.model('Participant', participantSchema);
