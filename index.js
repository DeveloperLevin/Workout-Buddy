// extract env values
require('dotenv').config()

// Install and imports 
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

const port = process.env.PORT;


// Initialize express app
const app = express()
app.use(express.json())

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()    
})

// routes 
app.use(workoutRoutes); 

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Server listening at port
        console.log("Connected to database")
        app.listen(port, () => {
        console.log(`Server listening at port ${port}`);
        })
    })
    .catch((e) => {
        console.log(e);
    })

