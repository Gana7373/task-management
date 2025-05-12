const express = require('express');
const cors = require('cors');
const tasksRoute = require('../routes/tasks');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON requests

// Routes
app.use('/api/tasks', tasksRoute);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});