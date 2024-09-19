const Workout = require('../models/schema')
const mongoose = require('mongoose')

// create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    // add a new workout set
    try {
        const newWorkoutData = await Workout.create({title, load, reps})
        console.log('Data added successfully')
        res.status(200).json(newWorkoutData)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "No data available"})
    }
}

// get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;
    // check if the id acquired is a valid mongoId
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No workout with the ID found"})
    }

    // find the workout
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    // check if the id is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "The workout does'nt exist"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(404).json({error: "Workout does not exist"})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    // check if the id is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "The workout does'nt exist"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    // incase the index doesnt exist
    if (!workout){
        return res.status(404).json({error: "Workout does not exist"})
    }
    // return the workout updated
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}