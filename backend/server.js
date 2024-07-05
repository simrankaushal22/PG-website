// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
// const MONGO_URI = 'mongodb+srv://simrankaushal374:simrankaushal@clustero.ptm3wxa.mongodb.net/? retryWrites=true&w=majority&appName=Cluster0';
// const MONGO_URI = 'mongodb+srv://simrankaushal374:simrankaushal@clustero.ptm3wxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// getting-started.js

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://simrankaushal374:simrankaushal@clustero.ptm3wxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>console.log("mongodb connected"))

}

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(MONGO_URI)
  // .then(()=>console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  mobile: { type: Number, required: true,  unique: true},
  Price: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);


// Subscriber Schema
const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
  });
  
  const Subscriber = mongoose.model('Subscriber', subscriberSchema);
  
  // Routes
  app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
  
    try {
      let subscriber = await Subscriber.findOne({ email });
      if (subscriber) {
        return res.status(400).json({ message: 'Email is already subscribed' });
      }
  
      subscriber = new Subscriber({ email });
      await subscriber.save();
      res.json({ message: 'Subscription successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Routes
app.post('/signup', async (req, res) => {
  const { name, email, password, mobile, Price} = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ name, email, password, mobile,Price });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
