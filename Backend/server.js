import express from 'express';
import bodyParser from 'body-parser';
import Razorpay from 'razorpay';
import mongoose from 'mongoose';
import crypto from 'crypto';

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());

// Razorpay instance
const instance = new Razorpay({
    key_id: 'rzp_test_repeCzAdhpB8Cu',
    key_secret: 'gYBnndng1V2NEiNgbSLxKsLM'
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://bgmonika77:jMv90BFhmPME7ONo@cluster0.47cbom1.mongodb.net/?retryWrites=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Define a payment schema and model
const paymentSchema = new mongoose.Schema({
  razorpay_payment_id: String,
  razorpay_order_id: String,
  razorpay_signature: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

// Create an order ID
app.post('/create/orderId', async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // Convert amount to smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };

    const order = await instance.orders.create(options);

    res.json(order);
  } catch (error) {
    console.error("Error creating orderId:", error);
    res.status(500).json({ error: "Error creating orderId" });
  }
});

// Store payment details
app.post('/store-payment-details', async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const payment = new Payment({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature
    });

    await payment.save();

    res.status(200).send('Payment details stored successfully');
  } catch (error) {
    console.error("Error storing payment details:", error);
    res.status(500).send('Error storing payment details');
  }
});

// Verify payment
app.post("/api/payment/verify", (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const secret = 'gYBnndng1V2NEiNgbSLxKsLM';

    const generatedSignature = crypto.createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    const isSignatureValid = razorpay_signature === generatedSignature;

    const response = {
      signatureIsValid: isSignatureValid
    };

    res.send(response);
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).send('Error verifying payment');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
