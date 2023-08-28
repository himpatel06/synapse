const Customer = require('../models/Customer');

const customers = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com', phone: '9265839087', transactionId: 'pi_3Nc06fSAETD6oWDh1V1OlvIw' },
  { id: 2, name: 'Aaradhya Patel', email: 'aaradhya@example.com', phone: '9265839087', transactionId: 'pi_MKjH5fRzeEGVvt9llQkKR6QH' },
  { id: 3, name: 'Vihaan Singh', email: 'vihaan@example.com', phone: '9265839087', transactionId: 'pi_bXElhkm5wg75KvRv1c9aL48y' },
  { id: 4, name: 'Ananya Gupta', email: 'ananya@example.com', phone: '9265839087', transactionId: 'pi_wLWbN9kPJLd5d74crJ8aOpf' },
  { id: 5, name: 'Advait Khan', email: 'advait@example.com', phone: '9265839087', transactionId: 'pi_WU9E6XQkDEejcI0eHou94Tsl' },
  { id: 6, name: 'Aanya Sharma', email: 'aanya@example.com', phone: '9265839087', transactionId: 'pi_RnT56jT79cQaVdZX0fb9dfeC' },
  { id: 7, name: 'Ishaan Verma', email: 'ishaan@example.com', phone: '9265839087', transactionId: 'pi_3oVfzZ8ANeaCGBbcytQ9tbdS' },
  { id: 8, name: 'Prisha Yadav', email: 'prisha@example.com', phone: '9265839087', transactionId: 'pi_4R5F6fZBQrkLW2P8mIO1bLKw' },
  { id: 9, name: 'Arjun Kumar', email: 'arjun@example.com', phone: '9265839087', transactionId: 'pi_xFC29i50OaTgxb61BeR7orYp' },
  { id: 10, name: 'Ishita Sharma', email: 'ishita@example.com', phone: '9265839087', transactionId: 'pi_5HY1O2JkcNGzswfJXZBE5H4i' },
  { id: 11, name: 'Aryan Singh', email: 'aryan@example.com', phone: '9265839087', transactionId: 'pi_dUVKL6M9rG7HtnzuuTy32hjE' },
  { id: 12, name: 'Avni Gupta', email: 'avni@example.com', phone: '9265839087', transactionId: 'pi_TU7G0NMd7geVR4LOyxckcW8r' },
  { id: 13, name: 'Reyansh Patel', email: 'reyansh@example.com', phone: '9265839087', transactionId: 'pi_p8Rq3qPvG3s6aXJU9oWqtSxz' },
  { id: 14, name: 'Siya Verma', email: 'siya@example.com', phone: '9265839087', transactionId: 'pi_DYBz7ERZB0HHjN3FzN0BwhK2' },
  { id: 15, name: 'Shlok Yadav', email: 'shlok@example.com', phone: '9265839087', transactionId: 'pi_0W8YwtH4dvoqeyS7v6I3tf8D' },
];


const getAllCustomers = async (req, res) => {
  try {
    console.log("getting Data...");
   // const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: 'Error getting customers', error: err.message });
  }
};


const createCustomer = async (req, res) => {
  try {
    const { name, email, phone, transactionId } = req.body;
    const newCustomer = new Customer({ name, email, phone, transactionId });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: 'Error creating customer', error: err.message });
  }
};

// Other CRUD operations (update, delete) can be implemented similarly

module.exports = {
  getAllCustomers,
  createCustomer,
  // Add other controller methods here
};
