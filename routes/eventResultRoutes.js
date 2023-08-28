const express = require('express');
const router = express.Router();
const eventResultController = require('../controllers/EventResultController');

// Get all event results
router.get('/', eventResultController.getAllEventResults);

// Create a new event result
router.post('/', eventResultController.createEventResult);

// Other CRUD operations routes can be added similarly

module.exports = router;