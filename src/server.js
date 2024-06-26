const express = require('express');
const connectDB = require('./config/db');
const coffeeShopRoutes = require('./routes/coffeeShopRoutes');
const cors = require('cors'); 
const dotenv = require('dotenv');

const errorHandler = require('./middleware/errorHandler');


dotenv.config();


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(cors()); // Add this line


// Routes
app.use('/api', coffeeShopRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = 5555;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
