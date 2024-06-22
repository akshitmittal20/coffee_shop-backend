const express = require('express');
const connectDB = require('./config/db');
const coffeeShopRoutes = require('./routes/coffeeShopRoutes');
const cors = require('cors'); // Add this line


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(cors()); // Add this line


// Routes
app.use('/api', coffeeShopRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
