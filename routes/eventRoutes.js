const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController');

// Get all events
router.get('/', eventController.getAllEvents);

// Create a new event
router.post('/', eventController.createEvent);

// Other CRUD operations routes can be added similarly

router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEventById);

module.exports = router;
