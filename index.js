// extract env values
require('dotenv').config()

// Install and imports 
const express = require('express');
const workoutRoutes = require('./routes/workout');

const port = process.env.PORT;

// Initialize express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workout', workoutRoutes);

// Server listening at port
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})

