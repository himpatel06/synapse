const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database');
const paymentRoutes = require("./routes/payment");

connectDB();


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
 
// Routes
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/event-results', require('./routes/eventResultRoutes'));
app.use('/api/participants', require('./routes/participantRoutes'));
app.use('/api/accommodation-bookings', require('./routes/accommodationBookingRoutes'));
app.use('/payment',paymentRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
