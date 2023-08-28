const express = require("express")
const router = express.Router();

const stripe = require("stripe")("sk_test_51NbhGiSAETD6oWDhJUYG3pWW4bb7KrjcQBsF7h38AcBUuIMa5mmdFQFIUxhGAczvtaehw6ZPwUQTByKLzrG06VYG00NpLxqCEk")

router.post("/create-payment-intent",async(req,res)=>{
    const data = req.body;
    console.log(data);

    const paymentIntent = await stripe.paymentIntents.create({
        amount : data.amount * 100,
        currency: "inr",
        automatic_payment_methods:{enabled:false},
    });

    console.log(paymentIntent.client_secret);

    res.send({clientSecret:paymentIntent.client_secret});

});

module.exports = router;