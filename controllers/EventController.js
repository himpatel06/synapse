const Event = require('../models/Event');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error getting events', error: err.message });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  try {
    console.log(req.body);
    let { eventName, eventDescription, eventType,isTentative,eventDateTime } = req.body;
   
    if(isTentative){

      eventDateTime = "-";
    
    }
   // console.log(eventDateTime);
    const newEvent = new Event({  eventName, eventDescription, eventType,isTentative,eventDateTime });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    console.log("Error");
    res.status(400).json({ message: 'Error creating event', error: err.message });
  }
};


// Get a single event by its _id
const getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error getting event', error: err.message });
  }
};

const updateEventById = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updates = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updates, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ message: 'Error updating event', error: err.message });
  }
};


// Other CRUD operations (update, delete) can be implemented similarly

module.exports = {
  getAllEvents,
  createEvent,
  getEventById,
  updateEventById,
  
  // Add other controller methods here
};
