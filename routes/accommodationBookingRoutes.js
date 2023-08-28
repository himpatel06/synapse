const express = require('express');
const router = express.Router();
const accommodationBookingController = require('../controllers/AccommodationBookingController');

// Get all accommodation bookings
router.get('/', accommodationBookingController.getAllAccommodationBookings);

// Create a new accommodation booking
router.post('/', accommodationBookingController.createAccommodationBooking);

// Other CRUD operations routes can be added similarly

module.exports = router;
