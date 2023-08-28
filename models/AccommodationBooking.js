const mongoose = require('mongoose');

const accommodationBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  collegeName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  days: { type: String, required: true },
  transectionId: { type: String, required: true },
});

module.exports = mongoose.model('AccommodationBooking', accommodationBookingSchema);
