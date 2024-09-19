const express = require('express');
const Workout = require('../models/schema')
const { createWorkout, getWorkouts, getSingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

// initialize the router instance
const router = express.Router()

// routes
router.get('/', getWorkouts)

router.post('/', createWorkout)

router.get('/workouts/:id', getSingleWorkout)

router.patch('/workouts/:id', updateWorkout)

router.delete('/workouts/:id', deleteWorkout)

// export the router instance
module.exports = router;