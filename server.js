const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to initiate the payment process
app.post('/create-payment', async (req, res) => {
  try {
    // Replace 'YOUR_API_KEY' and 'YOUR_AUTH_TOKEN' with your actual API credentials
    const apiKey = '04f7bf33c1b28b8b8f7db54d2a89e15e';
    const authToken = '245b074554879afa97b211081634a17c';

    // Replace 'YOUR_WEBHOOK_URL' with the URL where you want to receive payment-related notifications
    const webhookUrl = 'https://c330-43-241-194-34.ngrok-free.app/payment';

    const data = {
      purpose: 'Payment for your product or service',
      amount: '123', // Set the payment amount dynamically based on your application
      buyer_name: "HImang",
      email: "himang@gmail.com",
      phone: "9265839087",
      redirect_url: "google.com", // Instamojo will redirect the user to this URL after payment
      send_email: true,
      webhook: webhookUrl, // Specify the webhook URL to receive payment-related notifications
    };

    const response = await axios.post('https://www.instamojo.com/api/1.1/payment-requests/', data, {
      auth: {
        username: apiKey,
        password: authToken,
      },
    });

    const paymentUrl = response.data.payment_request.longurl;
    res.redirect(paymentUrl);
  } catch (error) {
    console.error('Error creating payment request:', error.message);
    res.status(500).send('Payment request creation failed.');
  }
});

// Endpoint to receive webhook notifications
app.post('/payment', (req, res) => {
  // Handle payment-related webhook notifications here
  console.log('Received webhook notification:', req.body);
  res.sendStatus(200);
});

app.get('/',(req,res)=>{
  console.log("connected!")
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
