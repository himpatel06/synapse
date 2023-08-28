const express = require('express');
const router = express.Router();
const eventController = require('../controllers/ParticipantController');

// Get all events
router.get('/', eventController.getAllParticipants);

// Create a new event
router.post('/', eventController.createParticipants);
 
// Other CRUD operations routes can be added similarly
/*
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEventById);*/

module.exports = router;
