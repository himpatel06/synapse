const EventResult = require('../models/EventResult');

// Get all event results
const getAllEventResults = async (req, res) => {
  try {
    console.log("Getting Event Data....");
    const eventResults = await EventResult.find().populate('eventName', 'name');
    res.json(eventResults);
  } catch (err) {
    res.status(500).json({ message: 'Error getting event results', error: err.message });
  }
};

// Create a new event result
const createEventResult = async (req, res) => {
  try {
    console.log(req.body);
    const { contestantName, position, eventName } = req.body;
    const newEventResult = new EventResult({ contestantName, position, eventName });
    await newEventResult.save();
    res.status(201).json(newEventResult);
  } catch (err) {
    res.status(400).json({ message: 'Error creating event result', error: err.message });
  }
};

// Other CRUD operations (update, delete) can be implemented similarly

module.exports = {
  getAllEventResults,
  createEventResult,
  // Add other controller methods here
};
