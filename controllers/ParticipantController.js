const Participants = require('../models/participants');

const participantsData = [
  {
    id: 1,
    participantName: 'Amit Kumar',
    eventName: 'Sports Meet',
    collegeName: 'Delhi University',
    mobileNumber: '9876543210',
    emailId: 'amit@example.com'
  },
  {
    id: 2,
    participantName: 'Pooja Sharma',
    eventName: 'Cultural Fest',
    collegeName: 'Mumbai University',
    mobileNumber: '8765432109',
    emailId: 'pooja@example.com'
  },
  {
    id: 3,
    participantName: 'Ravi Singh',
    eventName: 'Tech Symposium',
    collegeName: 'Kolkata University',
    mobileNumber: '7654321098',
    emailId: 'ravi@example.com'
  },
  {
    id: 4,
    participantName: 'Neha Gupta',
    eventName: 'Literary Conference',
    collegeName: 'Chennai University',
    mobileNumber: '6543210987',
    emailId: 'neha@example.com'
  },
  {
    id: 5,
    participantName: 'Anuj Patel',
    eventName: 'Science Expo',
    collegeName: 'Bangalore University',
    mobileNumber: '5432109876',
    emailId: 'anuj@example.com'
  },
  {
    id: 6,
    participantName: 'Riya Sharma',
    eventName: 'Robotics Workshop',
    collegeName: 'Hyderabad University',
    mobileNumber: '4321098765',
    emailId: 'riya@example.com'
  },
  {
    id: 7,
    participantName: 'Saurabh Verma',
    eventName: 'Coding Competition',
    collegeName: 'Pune University',
    mobileNumber: '3210987654',
    emailId: 'saurabh@example.com'
  },
  {
    id: 8,
    participantName: 'Sneha Yadav',
    eventName: 'Art Exhibition',
    collegeName: 'Ahmedabad University',
    mobileNumber: '2109876543',
    emailId: 'sneha@example.com'
  },
  {
    id: 9,
    participantName: 'Arjun Singh',
    eventName: 'Dance Showcase',
    collegeName: 'Jaipur University',
    mobileNumber: '1098765432',
    emailId: 'arjun@example.com'
  },
  {
    id: 10,
    participantName: 'Kriti Sharma',
    eventName: 'Fashion Show',
    collegeName: 'Lucknow University',
    mobileNumber: '9876543210',
    emailId: 'kriti@example.com'
  },
  {
    id: 11,
    participantName: 'Vikas Verma',
    eventName: 'Music Concert',
    collegeName: 'Indore University',
    mobileNumber: '8765432109',
    emailId: 'vikas@example.com'
  }
];

 
const getAllParticipants = async (req, res) => {
  try {
    console.log("getting Data...");
   // const Participants = await Participants.find();
    res.json(participantsData);
  } catch (err) {
    res.status(500).json({ message: 'Error getting Participants', error: err.message });
  }
};


const createParticipants = async (req, res) => {
  try {
    const { eventName, participantName} = req.body;
    const newParticipants = new Participants({eventName, participantName });
    await newParticipants.save();
    res.status(201).json(newParticipants);
  } catch (err) {
    res.status(400).json({ message: 'Error creating customer', error: err.message });
  }
};

// Other CRUD operations (update, delete) can be implemented similarly

module.exports = {
  getAllParticipants,
  createParticipants,
  // Add other controller methods here
};
