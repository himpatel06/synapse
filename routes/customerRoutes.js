const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

router.get('/', customerController.getAllCustomers);
router.post('/', customerController.createCustomer);



module.exports = router;
