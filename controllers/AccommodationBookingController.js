const AccommodationBooking = require('../models/AccommodationBooking');

// Get all accommodation bookings
const accommodationData = [
  {
    id: 1,
    name: 'Rahul Verma',
    collegeName: 'Delhi University',
    mobileNumber: '9876543210',
    email: 'rahul@example.com',
    days: '2 Days',
    transectionId: 'pi_3Nc06fSAETD6oWDh1V1OlvIw'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    collegeName: 'Mumbai University',
    mobileNumber: '8765432109',
    email: 'priya@example.com',
    days: '3 Days',
    transectionId: 'pi_MKjH5fRzeEGVvt9llQkKR6QH'
  },
  {
    id: 3,
    name: 'Ravi Singh',
    collegeName: 'Kolkata University',
    mobileNumber: '7654321098',
    email: 'ravi@example.com',
    days: '1 Day',
    transectionId: 'pi_bXElhkm5wg75KvRv1c9aL48y'
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    collegeName: 'Chennai University',
    mobileNumber: '6543210987',
    email: 'sneha@example.com',
    days: '4 Days',
    transectionId: 'pi_wLWbN9kPJLd5d74crJ8aOpf'
  },
  {
    id: 5,
    name: 'Amit Patel',
    collegeName: 'Bangalore University',
    mobileNumber: '5432109876',
    email: 'amit@example.com',
    days: '2 Days',
    transectionId: 'pi_WU9E6XQkDEejcI0eHou94Tsl'
  },
  {
    id: 6,
    name: 'Pooja Sharma',
    collegeName: 'Hyderabad University',
    mobileNumber: '4321098765',
    email: 'pooja@example.com',
    days: '3 Days',
    transectionId: 'pi_RnT56jT79cQaVdZX0fb9dfeC'
  },
  {
    id: 7,
    name: 'Nikhil Kumar',
    collegeName: 'Pune University',
    mobileNumber: '3210987654',
    email: 'nikhil@example.com',
    days: '4 Days',
    transectionId: 'pi_3oVfzZ8ANeaCGBbcytQ9tbdS'
  },
  {
    id: 8,
    name: 'Deepika Yadav',
    collegeName: 'Ahmedabad University',
    mobileNumber: '2109876543',
    email: 'deepika@example.com',
    days: '1 Day',
    transectionId: 'pi_4R5F6fZBQrkLW2P8mIO1bLKw'
  },
  {
    id: 9,
    name: 'Rajesh Singh',
    collegeName: 'Jaipur University',
    mobileNumber: '1098765432',
    email: 'rajesh@example.com',
    days: '2 Days',
    transectionId: 'pi_xFC29i50OaTgxb61BeR7orYp'
  },
  {
    id: 10,
    name: 'Swati Sharma',
    collegeName: 'Lucknow University',
    mobileNumber: '9876543210',
    email: 'swati@example.com',
    days: '3 Days',
    transectionId: 'pi_5HY1O2JkcNGzswfJXZBE5H4i'
  },
  {
    id: 11,
    name: 'Vivek Verma',
    collegeName: 'Indore University',
    mobileNumber: '8765432109',
    email: 'vivek@example.com',
    days: '4 Days',
    transectionId: 'pi_dUVKL6M9rG7HtnzuuTy32hjE'
  }
];

const getAllAccommodationBookings = async (req, res) => {
  try {
   // const accommodationBookings = await AccommodationBooking.find();
    res.json(accommodationData);
  } catch (err) {
    res.status(500).json({ message: 'Error getting accommodation bookings', error: err.message });
  }
};

// Create a new accommodation booking
const createAccommodationBooking = async (req, res) => {
  try {
    const { customerName, paymentReceipt } = req.body;
    const newAccommodationBooking = new AccommodationBooking({ customerName, paymentReceipt });
    await newAccommodationBooking.save();
    res.status(201).json(newAccommodationBooking);
  } catch (err) {
    res.status(400).json({ message: 'Error creating accommodation booking', error: err.message });
  }
};

// Other CRUD operations (update, delete) can be implemented similarly

module.exports = {
  getAllAccommodationBookings,
  createAccommodationBooking,
  // Add other controller methods here
};
